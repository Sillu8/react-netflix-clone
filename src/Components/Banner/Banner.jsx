import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';

function Banner() {
    const [movie, setMovie] = useState('')
    useEffect(() => {
        axios.get(`/trending/all/week?api_key=${API_KEY}`).then((response)=>{
            const index = Math.floor(Math.random() * 10)
            setMovie(response.data.results[index])
        })
    },[]);

return (
    <div 
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ''})`}}
    className='banner'>
        <div className="content">
            <h1 className='title'>{movie.title ? movie.title : movie.name}</h1>
            <div className="banner_btns">
                <button className='btn'>Play</button>
                <button className='btn'>My list</button>
            </div>
            <h1 className="description">{movie.overview}</h1>
        </div>
        <div className="fade"></div>
    </div>
    )
}

export default Banner