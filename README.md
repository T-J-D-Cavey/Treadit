# Treadit - find the best hiking reddit posts

Into hiking, the outdoors and adventure? How about Reddit, the online community and discussion forum? Treadit combines the two so you can easily find the best Reddit posts about your walking hobby. Take a step (tread) into Treadit!

CLick here to visit the web app *URL to be added once deployed*

## What is this project?

Treadit is a single-page-application (SPA) project showcasing React, Redux, asynchronous API functionality and javascript (js) testing. 

### Technologies used

- React js library,
- React Router v6, 
- Redux js library (including React-Redux and @reduxjs/toolkit) to manage all state, 
- Jest and Enzyme testing libraries for a demonstration of unit, integration and end to end testing (to be completed), 
- CSS, 
- HTML, 
- NPM,
- Git/Github, 
- VScode to write the code,
- Netlify to deploy the site. 

### How is the reddit data obtained?

This web app uses the Reddit .JSON API to retrieve reddit posts. This API doesn't require authentication or tokens. Data is obtained using a GET request with a URL that includes ".json". One limitation of this API is that search results use /search in the URL instead of /listing, and the results ignore the subreddit specified in the URL. 

### What testing coverage is there? (working progress)

This project is partly a demonstration of writing js tests. It uses '@testing-library/react', 'testing-library/user-event', '@testing-library/jest-dom'. The Jest and Enzyme js library.

It has some unit tests of vital features and functions, some integration tests of the most important features, and will have end to end testing. I do not intend to provide 100% unit testing coverage as I don't deem it to be worth my time at this point. A demonstration of writing good tests is partly the purpose of this project. This can be demonstrated without 100% coverage.  

## Why was this project made?

This project was made in order to reinforce learnings of how React components and Redux state management work together, managing an app with lots of elements working together seamlessly. To reinforce the learning of and demonstrate js testing proficiency, and working with an API to fetch asynchronous data. 

It's not perfectly written and could be refactored in a number of places. 