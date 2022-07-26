import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "28262230-06a9bc056ad9b220b5bf9e6d0";
const BASE_FILTERS = 'image_type=photo&orientation=horizontal&per_page=12';

export const loadImage = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&${BASE_FILTERS}`);
    const images = response.data.hits.map(img => {
        const {id, largeImageURL, webformatURL, tags } = img;
        return {
          id,
          largeImageURL,
          webformatURL,
          tags,
        }})
    return images;
};