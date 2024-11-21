const axios = require('axios');

const test_from_ingredients = (data) => {
    axios.post('https://get-recipes-from-ingredients-3rhjd2q7dq-uc.a.run.app', data)
        .then((response) => {
            if (data.ingredients === undefined) {
                if (response.data !== 'Missing ingredients') throw 'get-recipes-from-ingredients: Invalid response for missing ingredients';
            }
            else if (data.page === undefined) {
                if (response.data !== 'Missing page') throw 'get-recipes-from-ingredients: Invalid response for missing page';
            }
            else {
                if (response.data.recipes === undefined) throw "get-recipes-from-ingredients: Invalid response";
                if (!Array.isArray(response.data.recipes)) throw "get-recipes-from-ingredients: Response not a list";
                response.data.recipes.forEach(e => {
                    if (e.name === undefined || typeof e.name !== "string") throw "get-recipes-from-ingredients: Invalid name";
                    if (e.time === undefined || typeof e.time !== "string") throw "get-recipes-from-ingredients: Invalid time";
                    if (e.tags === undefined || !Array.isArray(e.tags)) throw "get-recipes-from-ingredients: Invalid tags";
                });
            }
        })
        .catch((error) => {
            console.error(error + ' ' + JSON.stringify(data));
            process.exit(1);
        });
};

const test_from_name = (data) => {
    axios.post('https://get-recipes-by-name-3rhjd2q7dq-uc.a.run.app', data)
        .then((response) => {
            if (data.name === undefined) {
                if (response.data !== 'Missing name') throw 'get-recipes-by-name: Invalid response for missing name';
            }
            else if (data.page === undefined) {
                if (response.data !== 'Missing page') throw 'get-recipes-by-name: Invalid response for missing page';
            }
            else {
                if (response.data.recipes === undefined) throw "get-recipes-by-name: Invalid response";
                if (!Array.isArray(response.data.recipes)) throw "get-recipes-by-name: Response not a list";
                response.data.recipes.forEach(e => {
                    if (e.name === undefined || typeof e.name !== "string") throw "get-recipes-by-name: Invalid name";
                    if (e.time === undefined || typeof e.time !== "string") throw "get-recipes-by-name: Invalid time";
                    if (e.tags === undefined || !Array.isArray(e.tags)) throw "get-recipes-by-name: Invalid tags";
                });
            }
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
};

const test_detailed = (data) => {
    axios.post('https://get-detailed-recipe-3rhjd2q7dq-uc.a.run.app', data)
        .then((response) => {
            if (data.name === undefined) {
                if (response.data !== 'Missing name') throw 'get-recipes-by-name: Invalid response for missing name';
            }
            else if (data.ingredients === undefined) {
                if (response.data !== 'Missing ingredients') throw 'get-recipes-by-name: Invalid response for missing ingredients';
            }
            else {
                if (response.data.name === undefined || typeof response.data.name !== "string") throw "get-detailed-recipe: Invalid name";
                if (response.data.ingredients === undefined || !Array.isArray(response.data.ingredients)) throw "get-detailed-recipe: Invalid ingredients";
                if (response.data.time === undefined || typeof response.data.time !== "string") throw "get-detailed-recipe: Invalid time";
                if (response.data.tags === undefined || !Array.isArray(response.data.tags)) throw "get-detailed-recipe: Invalid tags";
                if (response.data.process === undefined || !Array.isArray(response.data.process)) throw "get-detailed-recipe: Invalid process";
            }
        })
        .catch((error) => {
            console.error(error);
            process.exit(1);
        });
};

const test_image = async (data) => {
    try {
        var response = await axios.post('https://get-image-by-name-3rhjd2q7dq-uc.a.run.app', data);
        if (data.name === undefined) {
            if (response.data !== 'Missing name') throw 'get-image-by-name: Invalid response for missing name';
        }
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
};



// Test cases ##############

/*
test_from_ingredients({ ingredients: 'paneer,onion,tomato', page: 1 });
test_from_ingredients({ ingredients: 'chicken,garlic,jalapenoes', page: 3 });
test_from_ingredients({ page: 3 });
test_from_ingredients({ ingredients: 'chicken,tomato' });

test_from_name({ name: 'Tandoori chicken', page: 1 });
test_from_name({ name: 'Marinara pasta', page: 5 });
test_from_name({ name: 'BBQ Pizza' });
test_from_name({ page: 3 });

test_detailed({ name: 'Banana milkshake', ingredients: 'banana,milk' });
test_detailed({ name: 'Strawberry smoothie', ingredients: 'strawberry,sugar' });
test_detailed({ ingredients: 'salt,sugar' });
test_detailed({ name: 'Tomato ketchup' });

test_image({ name: 'Veg Kolhapuri' });
test_image({});
*/

test('Functions tests', async () => {
    expect(await test_image({ name: 'Veg Kolhapuri' })).toBe(true);
});

test('Functions tests', async () => {
    expect(await test_image({})).toBe(false);
});