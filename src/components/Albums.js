import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../styles/albums.css"

const Albums = props => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get("/albums").then(resp => {
      setAlbums(resp.data)
    })
  }, [])
  return (
    <div id="albumsContainer">
      <div className="header">
        <h1>My Albums</h1>
      </div>
      <div className="albums">
        {albums.map(item => (
          <Link key={`albums-${item.id}`} to={`/gallery/${item.id}`}>
            <div className="album">
              <img src={item.coverphoto} />
              <div className="title">{item.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Albums
