import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

import Box from "@mui/material/Box"

import { NewsBox } from '../../components'
import { loadNews } from '../../services/actions/news'
import Haber from './Haber'

const Haberler = () => {
    const dispatch = useDispatch()
    const news = useSelector(state=>state.news.news)
    React.useEffect(()=>{
        dispatch(loadNews())
    },[])
  return news.map((e,i)=>
    <Box key={i} sx={{py:1}}>
        <NewsBox>
            <Haber haber={e}/>
        </NewsBox>
    </Box>)
    
  
}

export default Haberler