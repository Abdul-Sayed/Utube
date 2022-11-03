import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_X_RapidAPI_Host,
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(process.env);
  return data;
};
