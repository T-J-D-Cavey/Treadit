# Treadit - find the best hiking reddit posts

Into hiking, the outdoors and adventure? How about Reddit, the online community and discussion forum? Treadit combines the two so you can easily find the best Reddit posts about your walking hobby. Take a step (tread) into Treadit!

CLick here to visit the web app: https://treadit.netlify.app/

## What is this project?

Treadit is a single-page-application (SPA) project showcasing React, Redux, asynchronous API functionality and javascript (js) testing. 

### Technologies used

- React framework,
- Cypress E2E and component testing library
- Jest testing library,
- React Router DOM / React DOM, 
- Redux js library (including React-Redux and @reduxjs/toolkit), 
- Mock Server Worker
- CSS, 
- HTML, 
- Reddit.json API,
- NPM,
- Git/Github, 
- VScode to write the code,
- Netlify to deploy the site. 

### Features:

- Loads 'hot' since the last week /r/hiking reddit posts when the site is first visited,
- Posts show the title of the post, the author (linking to their Reddit profile), the photo, desciption, how many comments and upvotes,
- Posts will later allow embeded video content to show,
- Navigation bar offers a 'search' and 'filter' option to tailour the posts the app displays,
- The best hiking related subreddits are included in the filter options,
- Site is responsive to any screensize and any modern browser,
- Slick design and fast loading times,

### How is the reddit data obtained?

This web app uses the Reddit .JSON API to retrieve reddit posts. This API doesn't require authentication or tokens. Data is obtained using a GET request with a URL that includes ".json". 

### What testing coverage is there? (working progress)

This project is partly a demonstration of writing js tests. It uses '@testing-library/react', 'testing-library/user-event', '@testing-library/jest-dom'. The Jest and Enzyme js library and more.

It has some unit tests of vital features and functions, some integration tests of the most important features, and will have end to end testing. I do not intend to provide 100% unit testing coverage as I don't deem it to be worth my time at this point. A demonstration of writing good tests is partly the purpose of this project. This can be demonstrated without 100% coverage.  

## Why was this project made?

This project was made in order to reinforce learnings of how React components and Redux state management work together, managing an app with lots of elements working together seamlessly. To reinforce the learning of and demonstrate js testing proficiency, and working with an API to fetch asynchronous data. 

It's not perfectly written and could be refactored in a number of places. 
