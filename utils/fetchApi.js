import axios from "axios";

// BaseUrl from bayut hub
export const baseUrl = 'https://bayut.p.rapidapi.com';

// fetchApi() fnx :: used to fetch the api from rapidapi
export const fetchApi = async (url) => {
    // Getting data using axios
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '1fca9ce7f3msh533b0ec55028494p167e09jsn6eeffea6fe41',
        },
    });
    
   return data;
}