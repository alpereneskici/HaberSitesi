import { instance, config } from "./baseApi"


const getNews = () => {
    return instance.get(`/paper/list/`, config() );
};
const addNews = (body) => {
    return instance.post(`/paper/save/`,body, config() );
};
const deleteNews = (body) => {
    return instance.delete(`/paper/delete/`,body, config() );
};


const NewsService = {
    getNews,
    addNews,
    deleteNews
};

export default NewsService;