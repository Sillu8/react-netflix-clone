import React, { useEffect, useState } from 'react'
import './RowPost.css';
import axios from '../../axios';
import YouTube from 'react-youtube';
import {API_KEY, imageUrl} from '../../Constants/Constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })
  },[movies])

  const opts = {
    height: '390',
    width: '640',
    playerVars: {

      autoplay: 1
    }
  };

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0].key);
      }
    }).catch(err => console.log(err))
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj,index)=>{
         return <img onClick={()=>{
            handleMovie(obj.id)
          }}
          key={index} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        })}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId}/> }
    </div>
  )
}

export default RowPost