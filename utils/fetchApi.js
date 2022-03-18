import axios from "axios";

// BaseUrl from bayut hub
export const baseUrl = 'https://bayut.p.rapidapi.com';

// fetchApi() fnx :: used to fetch the api from rapidapi
export const fetchApi = async (url) => {
    // Getting data using axios
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '311c827957msh4128e441d8b0b2dp1240f6jsn8331e93a9163'
        },
    });
    
   return data;
}