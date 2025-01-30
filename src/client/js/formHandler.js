//importing validateURL function from urlValidator file
import { validateURL } from './urlValidator'

//adding an event listener for form submission after the DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm'); //getting the form element by ID
    form.addEventListener('submit', handleSubmit); //adding event listener for form submission
});

//function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); //preventing default form submission behavior

    //getting the URL from the input field
    const formInput = document.getElementById('name').value;

    //checking if entered URL is valid 
    if (validateURL(formInput)) {
        console.log("::: Form Submitted :::")

        //sending URL data to the server
        urlData('/api', { url: formInput })

            .then(function (res) {
                console.log("Server Response: ", res)
                //updating DOM with sentiment analysis results
                document.getElementById("polarity").innerHTML = "Polarity: " + res.score_tag;
                document.getElementById("agreement").innerHTML = "Agreement: " + res.agreement;
                document.getElementById("subjectivity").innerHTML = "Subjectivity: " + res.subjectivity;
                document.getElementById("confidence").innerHTML = "Confidence: " + res.confidence;
                document.getElementById("irony").innerHTML = "Irony: " + res.irony;

            })
    } else {
        alert("Please enter a valid URL!") //alerting user to enter a valid URL
    }
}

//function to send data to the server
const urlData = async (url = "", data = {}) => {
    console.log('Analyzing: ', data)
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        return res.json(); //parsing the JSON response
    } catch (error) {
        throw error; //throwing any errors that occur during the fetch request
    }
}

export { handleSubmit }; //exporting the handleSubmit function
