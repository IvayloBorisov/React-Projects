# Movie App

## Description
This is a movie application, which show movies and TV serials information. The app make a
request to [The MovieDB API](https://developers.themoviedb.org/3/getting-started/introduction), and display 
the response from the API. You can search the movies by different categories or search them by name. The 
application give details about every selected movie, and it has two different view modes.

## Table of Content
1. [Technology stack](https://github.com/IvayloBorisov/react-movie-app#technology-stack)
2. [Installation](https://github.com/IvayloBorisov/react-movie-app#installation)
3. [Routing](https://github.com/IvayloBorisov/react-movie-app#routing)
4. [Usage](https://github.com/IvayloBorisov/react-movie-app#usage)

## Technology stack
- React
- HTML5
- CSS3
- react-router
- react-icons

## Installation

In the project directory, you can run:
```
npm install
```
```
npm start
```
With these commands you will install every dependencies, which are necessary and the app will run in the development mode.
Open http://localhost:3000 to view it in the browser.

## Routing

Route         | Description        | URL
--------------|--------------------|---------------------------------------------
/             | Home page          | https://movieaddict.netlify.app/
/now_playing  | Now playing page   | https://movieaddict.netlify.app/now_playing
/top_rated    | Top rated page     | https://movieaddict.netlify.app/top_rated
/upcoming     | Upcoming page      | https://movieaddict.netlify.app/upcoming
/category/:id | Category page      | https://movieaddict.netlify.app/category/16
/movie/:id    | Movie details page | https://movieaddict.netlify.app/movie/508442
/tv/:id       | TV details page    | https://movieaddict.netlify.app/tv/85271
/search/:query| Search page        | https://movieaddict.netlify.app/search/war

## Usage
When the app was started it load all popular movies sorted in descending order. The app has a pagination and 
search functionalities.

![](/repo_image/home.png)

When you select certain category (genre), and the app load all movies about selected category.

![](/repo_image/category.png)

You can switch between two different view modes

![](/repo_image/view_mode.png)

