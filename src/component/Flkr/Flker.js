import React, {useEffect} from 'react'
import axios from "axios"

function Flker() {

  const [pic , setPic] = React.useState([])
  const getData = async()=>{
    const url = "https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=6197ba361521b525f4ed84fbb45934d3&per_page=20&format=json&nojsoncallback=1"

    const {data} = await axios.get(url)
    console.log(data.photos.photo)
    setPic(data.photos.photo)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
       {
         pic.map((item) => (
           <div key={item.id}>
             <img src={`https://farm`+item.farm+`.staticflickr.com/`+item.server+ `/` + item.id + `_` +item.secret + `.jpg`}/>
           </div>
         ))
       }
    </div>
  )
}

export default Flker
