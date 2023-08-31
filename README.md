# Technical Test

## Objective
Develop a web-app that allows users to search for marvel characters. 

## Requirements:
1. On home page, show a simple search box where user can start typing character name.
2. On text change, call marvel API to search character and display character names in a list.
3. If user clicks on any name in the list, navigate them to a new page to display character details. Show basic information like the selected character's details, such as name, description, and additional information

To save your time, we have already setup marvel developer account and added a function named fetchData in src/lib/marvel.js, 
which calls marvel API and get search results. Feel free to modify as required.
Also, project already contains material UI library installed. Feel free to use any UI library you are comfortable with.

## Bonus points:
1. As marvel API is restricted to 3000 calls per day, you can implement logic to reduce number of API calls from the application to marvel.
2. Convert code in marvel.js to typescript
3. Any other suggestion to improve the code or product.

## Setup instructions:
1. Fork repo and install dependencies (`yarn install`)
2. Ask interviewer for environment variables and setup .env file
3. Start server (`yarn start`) and start coding
4. Push code to forked repo and share link with the interviewer

## Resources:
1. [Marvel developer docs](https://developer.marvel.com/)
2. [Material UI docs](https://mui.com/material-ui/getting-started/)
