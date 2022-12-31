import {
    SET_NEWS
} from './types';

import NewsService from '../api/news';

export const loadNews = () =>async dispatch =>{
    try{
        const res = await NewsService.getNews();
        console.log(res);
        dispatch({
            type:SET_NEWS,
            payload:res.data
        })
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}
export const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
}
export const addNews = (props) =>async (dispatch,getState) =>{
    const body ={...props,paper_id:props.paper_id ? props.paper_id:uuidv4().replace(/-/g, "")}
    try{
        const res = await NewsService.addNews(body);
        dispatch(loadNews())
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}
export const deleteNews = (props) =>async (dispatch,getState) =>{
    console.log(props);
    const body ={...props}
    try{
        const res = await NewsService.deleteNews(body);
        dispatch(loadNews())
        return Promise.resolve(res.data)
    }catch(err){
        return Promise.reject(err)
    }
}