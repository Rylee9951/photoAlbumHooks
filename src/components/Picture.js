import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "../styles/picture.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const Picture = props => {
  const [pic, setPic] = useState({})
  const [photosLength, setPhotosLength] = useState(0)
  const id = props.match.params.id
  useEffect(() => {
    const id = props.match.params.id
    axios.get(`/photos/${id}`).then(resp => {
      setPic(resp.data)
    })
    axios.get(`/photos`).then(resp2 => {
      setPhotosLength(resp2.data.length)
    })
  }, [props.match.params])

  return (
    <div id="photoContainer">
      <Link
        to={
          id == 1
            ? `/picture/${photosLength - 1}`
            : `/picture/${Number(id) - 1}`
        }
        className="leftArrow"
      >
        <FaArrowLeft />
      </Link>
      <div className="singlePhotoContainer">
        <div className="singlePhotoName">
          <h2>{pic.name}</h2>
        </div>
        <img src={pic.url} />
      </div>
      <Link
        to={id == photosLength ? `/picture/1` : `/picture/${Number(id) + 1}`}
        className="rightArrow"
      >
        <FaArrowRight />
      </Link>
    </div>
  )
}

export default Picture
