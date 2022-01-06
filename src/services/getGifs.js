const API_KEY = "KCiy4K3mfjw2ZFhrTSAadAlGD2PM8A6z";

const GetGifs = ({keyword = "morty", page = 0}) => {

    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=16&offset=${page * 16}&rating=g&lang=en"`;

    return fetch(API_URL)
        .then( res => res.json())
        .then( response => {
            const {data} = response
            const gifs = data.map( gif => {
                const {title, id, images} = gif
                const {url} = images.downsized_medium
                return {title, id, url}
            })
            return gifs;
        })
}

export default GetGifs;
