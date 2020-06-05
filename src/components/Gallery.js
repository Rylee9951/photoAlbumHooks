import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "../styles/gallery.css"

const Gallery = props => {
  const [photos, setPhotos] = useState([])
  const [albumName, setAlbumName] = useState("")
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    const id = props.match.params.id
    axios.get("/albums").then(resp => {
      setAlbums(resp.data)
    })
    axios.get(`/albums/${id}/?_embed=photos`).then(resp => {
      setAlbumName(resp.data.name)
      setPhotos(resp.data.photos)
    })
  }, [props.match.params])
  return (
    <div className="galleryContainer">
      <div className="galleryHeader">
        <h1>{albumName}</h1>
      </div>
      <div className="mainContainer">
        <div className="sidebar">
          {albums.map(item => (
            <Link key={`albumNaame-${item.id}`} to={`/gallery/${item.id}`}>
              <div>{item.name}</div>
            </Link>
          ))}
        </div>
        <div className="picsContainer">
          {photos.map(photo => (
            <Link to={`/picture/${photo.id}`}>
              <div className="pic">
                <img src={photo.url} />
                <div>{photo.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
