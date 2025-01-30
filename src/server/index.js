const dotenv = require('dotenv') //importing dotenv package to load environment variables from .env file
dotenv.config() //loading environment variables from .env file

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser'); 

const app = express()

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'))

console.log(__dirname)

//URL and API key variables
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?' //base URL for MeaningCloud API
const key = process.env.API_KEY //retrieving API key from environment variables

//route for serving the homepage
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html')) 
})

// POST Route for receiving article URL and performing sentiment analysis
app.post('/api', async function(req, res) {
    input = req.body.url //extracting URL from the request body
    console.log(`Entered URL: ${input}`)
    const apiURL = `${baseURL}key=${key}&url=${input}&lang=en` //constructing the API URL with the entered URL and API key
    const response = await fetch(apiURL) //fending a fetch request to the MeaningCloud API
    const mData = await response.json() //parsing the JSON response from the API
    console.log(mData) //logging the sentiment analysis data to the console
    res.send(mData) //sending the sentiment analysis data as the response
})

//setting up the server to listen on port
app.listen(3333, function () {
    console.log('Example app listening on port 3333!') // Logging a message to indicate that the server is running
})
