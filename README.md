# My Gif Library

## Introduction

This project is a single page application that allow its users to browse the Giphy API and save their favorite gifs on the page. 


## Project set up

### React
This project was made with the version 18.2.0 of React, installed via the command `npx create-react-app my-app`


### Dependencies 
After cloning this repository, you can install all the dependencies at once using `npm install` at the root of the React project.

The following libraries are included this project : 

[React-Toastify](https://www.npmjs.com/package/react-toastify) : `npm install react-toastify`

[Material UI](https://mui.com/)

Material UI icons : `npm install @mui/icons-material`

Material UI components : `npm install @mui/material @emotion/react @emotion/styled`

Material UI styled components: `npm install @mui/styled-engine-sc styled-components`



## Giphy API Connection
You will need an API key to make this project work.
You can get a free one from Giphy by clicking 'create an app' on [this page](https://developers.giphy.com/docs/api/)

Once you have your key, create a .env file at the root of the React project. 
Store your key in this file exactly like this : `REACT_APP_API_KEY_GIPHY=YOUR_API_KEY`



## Server launch
Launch your server with `npm run start` in your project root directory. 

## That's it ! 
You are now able to use the application, enjoy !
