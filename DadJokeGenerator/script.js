const btnE1 = document.getElementById('btn');
const jokeE = document.getElementById('jokes')

const apiKey = 'UUUM6nMisbsnHY2qdtGjsQ==AFd21jdk10L5I2Fs';

const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey
    }
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit='

async function getJoke(){

    try {
        
        jokeE.innerText = "Loading...";
        btnE1.innerText = "Wait";
        btnE1.disabled = true;
    
        const response = await/*waits until response is fetch*/ fetch(apiURL, options);
        const data = await /*wait for data and conver to json format after fetched*/ response.json();

        btnE1.disabled = false;
        btnE1.innerText = "Tell me a Joke";    

        jokeE.innerText=data[0].joke;

    } catch (error) {
        jokeE.innerText = "Something went wrong, please try later...";
        btnE1.style.visibility = 'hidden';
        console.log(error);
    }
    
}

btnE1.addEventListener('click', getJoke)