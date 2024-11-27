# <i> ChefGPT: Where every ingredient into a masterpiece!!🍳 </i>
![](../images/logo.png)</br>

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/se24ncsu/ChefGPT/graphs/commit-activity) [![Contributors Activity](https://img.shields.io/github/commit-activity/m/se24ncsu/ChefGPT)](https://github.com/se24ncsu/ChefGPT/pulse) [![GitHub issues](https://img.shields.io/github/issues/se24ncsu/ChefGPT.svg)](https://github.com/se24ncsu/ChefGPT/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues-closed](https://img.shields.io/github/issues-closed/se24ncsu/ChefGPT.svg)](https://github.com/se24ncsu/ChefGPT/issues?q=is%3Aissue+is%3Aclosed) ![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/se24ncsu/ChefGPT) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT) [![Unittest](https://github.com/se24ncsu/ChefGPT/actions/workflows/unittest.yml/badge.svg?branch=main&event=push)](https://github.com/se24ncsu/ChefGPT/actions/workflows/unittest.yml) [![codecov](https://codecov.io/gh/se24ncsu/ChefGPT/graph/badge.svg?token=0XN6K2DMGS)](https://codecov.io/gh/se24ncsu/ChefGPT) [![GitHub release](https://img.shields.io/github/release/se24ncsu/ChefGPT.svg)](https://github.com/se24ncsu/ChefGPTreleases/) [![StyleCheck: pylint](https://img.shields.io/badge/linting-pylint-yellowgreen)](https://github.com/pylint-dev/pylint) [![HitCount](https://hits.dwyl.com/se24ncsu/ChefGPT.svg)](https://hits.dwyl.com/se24ncsu/ChefGPT) ![GitHub contributors](https://img.shields.io/github/contributors/se24ncsu/ChefGPT) ![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/se24ncsu/ChefGPT) ![GitHub repo size](https://img.shields.io/github/repo-size/se24ncsu/ChefGPT)  [![Maintainability](https://api.codeclimate.com/v1/badges/260d558f17ae5e1027e5/maintainability)](https://codeclimate.com/github/se24ncsu/ChefGPT/maintainability) [![GitHub closed issues by-label](https://img.shields.io/github/issues-closed-raw/se24ncsu/ChefGPT/bug?color=green&label=Squished%20bugs)](https://github.com/se24ncsu/ChefGPT/issues?q=is%3Aissue+label%3Abug+is%3Aclosed) ![Discord](https://img.shields.io/discord/1143966088695124110) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.14028522.svg)](https://doi.org/10.5281/zenodo.14028522)
  

  
<img src="https://github.com/se24ncsu/ChefGPT/blob/docs/assets/searchResult.jpg" alt="drawing" style="width:1000px;"/>
<b>Wave goodbye to the endless struggle of deciding what to cook with whatever’s in your kitchen. ChefGPT transforms your cooking experience with a smart, easy-to-use app that turns your pantry and fridge into a treasure trove of culinary possibilities. Simply input the ingredients you have, and ChefGPT instantly suggests mouthwatering recipes tailored to your inventory.

But that’s not all! Discover new cuisines, get step-by-step cooking instructions, and customize recipes to suit your dietary preferences or mood. Whether you’re a beginner or a seasoned chef, ChefGPT makes every meal an exciting journey of flavor and creativity.

Say hello to stress-free cooking and unlock your kitchen’s hidden potential with ChefGPT—your ultimate recipe companion! 🍳</b>

# Contents  

- [Why use ChefGPT?](#why-use-ChefGPT)
- [Project Documentation](#documentation)
- [Project Presentation Videos](#project-presentation-video)
- [Brief Overview of Project](#project-description)
- [What Docs](#what-docs)
- [How Docs](#how-docs)<br/>
    - [MongoDB](#mongodb-integration)
    - [Docker](#docker-container)
    - [Collaborative Filtering](#collaborative-filtering)
    - [Streaming Links](#streaming-links)
    - [Dashboard](#dashboard)
    - [Create an Acccount](#create-an-account)
    - [Login to Account](#login-to-account)
    - [Profile and Friends](#profile-and-friends)
    - [Wall](#wall)
    - [Recommendation Mechanism](#movie-recommendation-mechanism)<br/>
    - [Email Notifier](#email-notifier)

- [Improvements Made in the Project](#project-2-delta)
- [TechStack Used for the Development of Project](#tech-stack-used)
- [Steps for Execution](#getting-started)
- [Future Scope](#future-scope)
- [Contribute](#contribute-to-the-project)
- [Team Members](#contributors)
- [Contact](#contact)
- [License](#license)

## Why use ChefGPT?

<img
  src="https://www.wlns.com/wp-content/uploads/sites/50/2020/01/popcorn-1085072_1920_29563194_ver1.0.jpg?strip=1"
  alt="Movie Time"
  width="30%"
  align="right"
/>

ChefGPT: Your movie recommender! Input movies, get tailored suggestions, and share via email. Elevate your movie choices effortlessly!

- **Efficient:** Lightning-fast recommendations for movie buffs! 🚀
- **Adaptable:** Tailor the recommendations to your taste.
- **Accessible:** Works across all platforms and shells.
- **Insightful:** Get movie insights at a glance.
- **Comprehensive:** Supports a wide array of user-preferred movies.
- **Simple:** Easy installation and setup – start discovering great movies in no time!"

## Documentation
Checkout for project documentation [here](https://github.com/se24ncsu/ChefGPT/tree/main/docs)

## Project Presentation Videos
### Project Overview
[https://github.com/se24ncsu/ChefGPT/blob/main/asset/animated_video.mp4
](https://github.com/user-attachments/assets/ed0c3f79-b31f-4876-ba03-b2e640cf8333
)
### New Features 2 minute demo
[![why contribute video](https://img.youtube.com/vi/M13zDRgjNGE/0.jpg)](https://www.youtube.com/watch?v=M13zDRgjNGE)



## Project Description
ChefGPT is a user-friendly movie recommender that curates a tailored list of 10 movie predictions based on user-provided movie preferences. Users can input their favorite movies, and our algorithm refines recommendations based on feedback—Liked, Disliked, or Yet To Watch. Additionally, ChefGPT offers the convenience of emailing the recommended movies, enhancing the movie-watching experience. For the system architecture and other details, please refer to our documentation [here](https://github.com/se24ncsu/ChefGPT/tree/main/docs)

## What docs
View our documentation outlining each class and function of ChefGPT here
- [Backend](https://github.com/se24ncsu/ChefGPT/blob/main/docs/backend.md)
- [Frontend](https://github.com/se24ncsu/ChefGPT/blob/main/docs/frontend.md)
- [Testing](https://github.com/se24ncsu/ChefGPT/blob/main/docs/testing.md)

View our autogenerated doco here [Doco](https://github.com/se24ncsu/ChefGPT/blob/main/docs/generated_docs/)

## How docs

### MongoDB integration
#### NEW in project 2
**The project now uses MongoDB Atlas, which is highly scalable and fast.**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/mongo.gif" width="600" height="375">

### Docker Container
#### NEW in project 2
**The application is containerized using Docker, ensuring consistent deployment across all environments.**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/docker.gif" width="600" height="375">

### Collaborative Filtering
#### NEW in project 2
**Implements an intelligent recommendation system using collaborative filtering to suggest personalized movie choices.**

### React Components
#### NEW in project 2
**Utilizes modern React components with hooks for efficient state management and reusable UI elements.**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/react.gif" width="600" height="375">

### Streaming Links
#### NEW in project 2
**We provide streaming links directly to the appropriate website for easier access.**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/links.gif" width="600" height="375">

### Dashboard
#### NEW in project 2
**Features an analytics dashboard that displays user-related data like genres.**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/dashboard.gif" width="600" height="375">

### Create an Account
**Users can now create accounts, persisting data including their movie reviews and recommendations**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/create_account.gif" width="600" height="375">

### Login to account
**The user can log in to their account securly with encrypted passwords stored in our database**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/login.gif" width="600" height="375">

### Profile and Friends
**The user can add friends, view the movies reviewed by the friends, and see their reviewed movies in their profile**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/profile.gif" width="600" height="375">

### Wall
**The user can interact with other users, by viewing a community sourced wall of recent moview reviews**
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/wall.gif" width="600" height="375">

### Movie Recommendation Mechanism 
**The user selects upto 5 movies to get a tailored watchlist and provide feedback for the same**
  
<img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/recommend_mechanism.gif" width="600" height="375">

### Email Notifier
**The user sends his/her movies feedback via an email (Notify Me button)**
  
<div style="display: flex; justify-content: space-between;">
    <img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/email_notifier.gif" alt="Email Notifier" width="600" height="375">
    <img src="https://github.com/se24ncsu/ChefGPT/blob/main/asset/email.png" alt="Email" width="400" height="400">
</div>


## Project 2 Delta
Check out the significant changes that we made for Project 2 [here](https://github.com/se24ncsu/ChefGPT/blob/main/proj2/Proj2Changes.md)

Our grading scorecard can be found [here](https://github.com/se24ncsu/ChefGPT/blob/main/proj2/README.md)

## Tech stack Used👨‍💻:

<p>
<img src="https://i.giphy.com/media/LMt9638dO8dftAjtco/200.webp" width="150">
<img src="https://i.giphy.com/media/KzJkzjggfGN5Py6nkT/200.webp" width="150">
<img src="https://i.giphy.com/media/IdyAQJVN2kVPNUrojM/200.webp" width="150">
<img src="https://media.giphy.com/media/UWt0rhp21JgLwoeFQP/giphy.gif" width ="150"/>
<img src="https://media.giphy.com/media/kH6CqYiquZawmU1HI6/giphy.gif" width ="150"/>
<img src="https://media.giphy.com/media/tAjb5pyCEBhEb8jWxC/giphy.gif" width="150"/> <!-- MongoDB -->
<img src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif" width="150"/> <!-- React -->
<img src="https://images.ctfassets.net/o7xu9whrs0u9/4sYuVlC3grWV9xqiALyYr2/a52875856c016db3eb86c1d8adced886/Docker.logo2_.png" width="150"/> <!-- Docker -->
<img src="https://images.javatpoint.com/tutorial/flask/images/flask-tutorial.png" width="150"/> <!-- Flask -->
<img src="https://media.giphy.com/media/Sr8xDpMwVKOHUWDVRD/giphy.gif" width="150"/> <!-- Bootstrap -->
<img src="https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif" width="150"/> <!-- JavaScript -->
<img src="https://media.giphy.com/media/fsEaZldNC8A1PJ3mwp/giphy.gif" width="150"/> <!-- CSS3 -->
<img src="https://media.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif" width="150"/> <!-- HTML5 -->
</p>

## Getting Started

 Step 1: 
  Git Clone the Repository
  
    git clone https://github.com/se24ncsu/ChefGPT.git
    
  (OR) Download the .zip file on your local machine from the following link
  
    https://github.com/se24ncsu/ChefGPT
  
 Step 2:
   Follow the setup instructions in the installation documentation
   
    https://github.com/se24ncsu/ChefGPT/blob/main/docs/install.md

 OR 
 
 Step 1:
   Use docker image present at [Docker Image](https://drive.google.com/file/d/14ofAh84cE1sCS8k8yHVbWzRlIa1KDRhb/view?usp=share_link) and use

   docker save -o popcorn.tar popcorn

   docker load -i popcorn.tar

   docker run -d -p 3000:3000 -p 5001:5001 popcorn
    
    
<b>Finally, start enjoying personalized movie recommendations!</b>


## Future Scope
ChefGPT is a dynamic project with endless possibilities for expansion and enhancement. Here are some exciting avenues for future development:

1. **Friends Recommend Movies**: Let users get personalized movie recommendations from their friends for a more social experience!

2. **Parental Controls & Kids Mode**: Family-friendly viewing! Add parental controls and a curated kids’ section to make Popcorn Picks safe and fun for all ages!
  
3. **Dynamic Movie Collections**: Always stay relevant! Offer seasonal and trending collections like “Halloween Specials” and “Oscar Winners” based on user interests.
 
4. **Fun Trivia & Movie Quizzes**: Keep users engaged with interactive trivia and quizzes about movies they've watched!

5. **Tech Improvement**: Supercharge the backend with Express and Node.js for smoother, seamless integration with the React frontend! Upgrade the UI from bootstrap to tailwind to material UI.

The future of ChefGPT is full of potential, and we invite developers, movie lovers, and anyone passionate about cinema to join us in making this platform the ultimate movie companion. 

## Contribute to the Project!

Please refer to the [CONTRIBUTING.md](https://github.com/se24ncsu/ChefGPT/blob/main/CONTRIBUTING.md) if you want to contribute to the ChefGPT source code. Follow all the guidelines mentioned in the same and raise a pull request, we would love to look at it ❤️❤️!

## Contributors
<table>
  <tr>
    <td><a href="https://github.com/se24ncsu/ChefGPT">Project 2</a></td>
    <td align="center"><a href="https://github.com/Shrimadh/"><img src="https://avatars.githubusercontent.com/u/64469917?s=400&u=c88c30f494e1e8d5b6251213a2d7cbb2f83910d3&v=4" width="75px;" alt=""/><br /><sub><b>Srimadh V Rao</b></sub></a></td>
    <td align="center"><a href="https://github.com/akuldevali/"><img src="https://avatars.githubusercontent.com/u/64837282?v=4" width="75px;" alt=""/><br /><sub><b>Akul G Devali</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/codemanav/"><img src="https://avatars.githubusercontent.com/u/54708784?v=4" width="75px;" alt=""/><br /><sub><b>Manav D Shah</b></sub></a><br /></td>
  </tr>
</table>

[Srimadh Rao](https://www.linkedin.com/in/srimadh-rao/)<br/>
[Akul Gopal Devali](https://www.linkedin.com/in/akuldevali/)<br/>
[Manav D Shah](https://www.linkedin.com/in/manav-divyesh-shah//)<br/>

## Contact
In case of any issues, please e-mail your queries to ChefGPTse24@gmail.com or raise an issue on this repository.<br>
Our team of developers monitors this e-mail address and would be happy to answer any and all questions you have about setup or use of this project!

## Join the ChefGPT Community:

Contribute to the project and help us improve recommendations.
Share your experience and film discoveries with us.
Together, let's make ChefGPT the ultimate movie companion!
ChefGPT is more than just code; it's a passion for cinema, and we invite you to be a part of this exciting journey. Start exploring, sharing, and discovering movies like never before with ChefGPT!
Let's make movie nights extraordinary together!

## License
This project is under the MIT License.