import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import { imageUrl,API_Key } from '../../Constants/Constants'
import YouTube from 'react-youtube'
function RowPost(props) {
  const [originals,setOriginals]=useState([])
  const [urlId,setUrlId]=useState("")
  useEffect(()=>{

    axios.get( props.Url).then((response)=>{
        console.log(response.data.results)
      setOriginals(response.data.results)
   
    }).catch((err)=>{
      console.log(err)
    })

  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovieTrailer=((id)=>{

    axios.get(`movie/${id}/videos?api_key=${API_Key}&language=en-US`).then((res)=>{
      console.log("response",res.data.results[0])
      if(res.data.results.length!=0)setUrlId(res.data.results[0])
    })

  })

  return (
    <div className='row' >

        <h1>{props.title}</h1>
        <div className='posters'>
          {originals.map((obj)=>{
           return(
            <div>
            <img onClick={()=>handleMovieTrailer(obj.id)} key={obj.id} className={props.isSmall? "smallPoster" :"poster"} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                  <h3>{`${obj.title || obj.name} (Ratings:${obj.vote_average})`}</h3>
                 
                  </div>
         ) })}
           
        </div>

       { urlId && < YouTube videoId={urlId.key} opts={opts}  />}
      
    </div>
  )
}

export default RowPost
