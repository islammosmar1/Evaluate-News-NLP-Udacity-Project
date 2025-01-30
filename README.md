# Analyze News Articles Using Natural Language Processing
  This project, part of the Udacity Front End Web Developer Nanodegree program, aims to develop a web application that facilitates the assessment of sentiment in articles or blog posts sourced from various websites through Natural Language Processing (NLP). Users can input the URL of an article to receive sentiment analysis results provided by the MeaningCloud API.

## Development Tools
- **HTML**
- **CSS**
- **JavaScript**
- **Node.js**
- **Express.js**
- **Webpack**
- **MeaningCloud API**
- **Jest**
- **Workbox**


## Setup
Before proceeding with the setup, ensure Node.js and npm are installed on your system. You can verify their versions using the following commands in the terminal:
    
    `node -v`
    `npm -v`

## Getting Started
1. Navigate to the project directory in your terminal:

   `cd <project-directory>`

3. Clone the repository:

   `git clone <repository-url>`

5. Install npm dependencies:

   `npm install`

7. Install Loaders and Plugins
  Depending on your development mode, install the required loaders and plugins:
    ```npm i -D @babel/core @babel/preset-env babel-loader
    npm i -D style-loader node-sass css-loader sass-loader
    npm i -D clean-webpack-plugin
    npm i -D html-webpack-plugin
    npm i -D mini-css-extract-plugin
    npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

9. Obtain an API key from MeaningCloud.

10. Configure Environment Variables
  To safeguard your API key, utilize the dotenv package for managing environment variables:
  - Install the dotenv package:

     `npm install dotenv`

- Create a new `.env` file in the project's root directory.

- Populate the `.env` file with your API key:
  
    `API_KEY=**************************`

## Useful Commands
1. Start Development Server:
  - To run the project in development mode with live reloading:

    `npm run build-dev`

2. Build the Project for Production:
  - To bundle and optimize the project for production:

    `npm run build-prod`

3. Run Tests:
   
  - To execute unit tests using Jest:

    `npm test`

4. Start the Application:
  - To launch the application server:

    `npm start`

Access the web application by opening your browser and visiting http://localhost:3333/.
