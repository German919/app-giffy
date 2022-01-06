const API_KEY = "KCiy4K3mfjw2ZFhrTSAadAlGD2PM8A6z";

const GetTredingTerms = () => {

    const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20&rating=g`; 

    return fetch(API_URL)
        .then( res => res.json())
        .then( response => response)
}

export default GetTredingTerms;