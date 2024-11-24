/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import { GoogleGenerativeAI } from '@google/generative-ai';
import puppeteer, { Browser, Page } from "puppeteer";

require('dotenv').config();
const chromium = require('chromium');

const cors = require('cors');
const corsOptions = {
    origin: "*", // Allows all origins
};
const corsMiddleware = cors(corsOptions);

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const GEMINI_KEY = process.env.GEMINI_API_KEY;

var browser: Browser;
var page: Page;

/* Function to scrape image from images.google.com */
function scrape_image(query: string) {
    return new Promise(async (resolve, _) => {

        // Prepare browser
        if (browser === undefined) browser = await puppeteer.launch({ executablePath: chromium.path, headless: true, args: ['--no-sandbox'] });
        if (page === undefined) page = await browser.newPage();

        await page.goto(`https://www.bing.com/images/search?q=${query.replace(' ', '+')}&first=1`);
        var nextUrl = await page.evaluate(() => {
            for (let i = 0; i < 10; i++) {
                let url = document.getElementsByClassName('imgpt')[i].children[0].getAttribute('href');
                if (url?.includes('/search')) return url;
            }
            return '';
        });
        if (nextUrl === '') {
            resolve('');
            return;
        }
        if (nextUrl[0] === '/') nextUrl = 'https://www.bing.com' + nextUrl;
        console.log(query + ' ' + nextUrl);
        await page.goto(nextUrl);
        const image = await page.evaluate(() => {
            return document.getElementsByClassName('mainContainer')[0].getElementsByTagName('img')[0].src;
        });
        resolve(image);
    });
}

/* API to scrape image */
export const get_image_by_name = onRequest({ memory: '1GiB', concurrency: 1 }, async (request, response) => {
    corsMiddleware(request, response, async () => {

        if (request.body.name === undefined) response.send('Missing name');

        const name = request.body.name;
        const url = await scrape_image(name);
        response.send(url);
    });
});

/* 
    API to get recipes using a list ingredients.
    This is used in the search by ingredients section.
    Name and ingredients combined will be used by 'get_detailed_recipe'.
*/
export const get_recipes_from_ingredients = onRequest(async (request, response) => {
    corsMiddleware(request, response, async () => {

        if (request.body.ingredients === undefined) response.send('Missing ingredients');
        if (request.body.page === undefined) response.send('Missing page');

        // Get the recipes from Gemini
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const ingredients = request.body.ingredients;
        const pagination = request.body.page;
        const prompt = `Give me a list of distinct recipes that uses the following ingredients: 
        [${ingredients}]
        Results will be paginated with 10 recipes per page.
        Return the following page: ${pagination}
        Return the response in the following JSON format: 
        {"recipes":[
            {
                "name":"name of the recipe", 
                "ingredients":["list of important ingredients sorted by importance as array", ...], 
                "time":"cooking time", 
                "tags":["3-6 tags for this recipe in array format", ...]
            }, ...]}
    `;
        let rawjson = (await model.generateContent(prompt)).response.text();
        rawjson = rawjson.substring(rawjson.indexOf('{') - 1, rawjson.lastIndexOf('}') + 1);

        // Prepare and send the result
        response.send(rawjson);
    });
});

/* 
    API to search recipes by name.
    This would be used to do search in the search bar.
    Its ingredients and name will be used by 'get_detailed_recipe'.
*/
export const get_recipes_by_name = onRequest(async (request, response) => {
    corsMiddleware(request, response, async () => {

        if (request.body.name === undefined) response.send('Missing name');
        if (request.body.page === undefined) response.send('Missing page');

        // Get the recipe from Gemini
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const name = request.body.name;
        const pagination = request.body.page;
        const prompt = `Give me a list of distinct recipes related (could be a match) to the name: ${name}
        Results will be paginated with 10 recipes per page.
        Return the following page: ${pagination}
        Return the response in the following JSON format: 
        {"recipes":[
            {
                "name":"name of the recipe", 
                "ingredients":["list of important ingredients sorted by importance as array", ...], 
                "time":"cooking time", 
                "tags":["3-6 tags for this recipe in array format", ...]
            }, ...]}
    `;
        let rawjson = (await model.generateContent(prompt)).response.text();
        rawjson = rawjson.substring(rawjson.indexOf('{') - 1, rawjson.lastIndexOf('}') + 1);

        // Prepare and send the result
        response.send(rawjson);
    });
});

/* API to get a detailed recipe using a list ingredients and name */
export const get_detailed_recipe = onRequest(async (request, response) => {
    corsMiddleware(request, response, async () => {

        if (request.body.name === undefined) response.send('Missing name');
        if (request.body.ingredients === undefined) response.send('Missing ingredients');

        // Get the recipe from Gemini
        const genAI = new GoogleGenerativeAI(GEMINI_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const name = request.body.name;
        const ingredients = request.body.ingredients;
        const prompt = `Give me a recipe (just one) related (could be a match) to the name: ${name} and
        uses the following list of ingredients: [${ingredients}]
        Return the response in the following JSON format: 
        {
            "name":"name of the recipe", 
            "ingredients":["list of all the required ingredients with quantities and sorted by importance as array", ...], 
            "time":"cooking time", 
            "tags":"3-6 tags for this recipe",
            "process":["step 1", "step 2", ...]
        }
        Process should be detailed steps of cooking the recipe from start to finish.
    `;
        let rawjson = (await model.generateContent(prompt)).response.text();
        rawjson = rawjson.substring(rawjson.indexOf('{') - 1, rawjson.lastIndexOf('}') + 1);

        // Prepare and send the result
        response.send(rawjson);
    });
});

