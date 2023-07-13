// hello

// create the little window that all of our functionality will be displayed in 
// append to the page -- just to make sure we have spacing/position working properly
    // when setting up, the persons birthday should be entered to calculate the time left in the lifespan

// add some sort of animation/drawing that impresses the value of time
// access openAI API to generate inspirational quote/fact in the window

// add eventlistener to trigger the extension
// document.addEventListener("DOMContentLoaded", () => {
    
// });

console.log('the script is working');
   
const popup = document.createElement('div');
popup.style.width = '50%';
popup.style.height = '50%';
popup.style.position = 'fixed';
/* the below setting can make main always center */
popup.style.left = '50%';
popup.style.top = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.backgroundColor = 'purple';
popup.style.color = 'white';
// popup.innerText = "don't waste your time"

// document is the website we are in
const page = document.getElementById('react-root') || document.getElementById('primary');
const parent = page.parentNode;
parent.removeChild(page);

parent.appendChild(popup);


// const headerParameters = {
//     'Authorization': "Bearer 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"
// };
// const options = {
//     method: 'GET',
//     headers: headerParameters
// };

// async function getQuotes() {
//     try {
//       const response = await fetch(endpointUrl, options);
//       // printing response
//       printResponse(response);
//     } catch (error) {
//       // Printing error message
//       printError(error);
//     }
//   }
// getQuotes();
// // fetch('https://api.openai.com/v1/chat/completions', )

let niceQuote;

function OpenaiFetchAPI() {
    console.log("Calling GPT3")
    let url = "https://api.openai.com/v1/chat/completions";
    let bearer = 'Bearer ' + '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';
    fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Find an inspirational fact no longer than 15 words"}],
            "max_tokens": 25,
            "temperature": 1,
            "top_p": 1,
            "n": 1,
            "stream": false,
            "stop": "\n"
        })


    }).then(response => {
        
        return response.json()
       
    }).then(data=>{
        console.log('the message is');
        console.log('the returned quote is ' + data['choices'][0]['message']['content'])
        
        niceQuote = data['choices'][0]['message']['content'];
        console.log('the nice quote is: ' + niceQuote);


        popup.innerHTML = niceQuote;
        // console.log(typeof data)
        // console.log(Object.keys(data))
        // console.log(data['choices'][0].text)
        
    })
        .catch(error => {
            console.log('Something bad happened ' + error)
        });

}
OpenaiFetchAPI();



