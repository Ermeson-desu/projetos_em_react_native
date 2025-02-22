import axios from "axios";

export async function getMangaCover(){
    const response =await axios.get('https://api.mangadex.org/manga')
    return (response.data.results)
}