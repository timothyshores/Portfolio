import React from "react"

const Card = ({ name, image, handle, credit, description }) => {
  return (
    <div>
      <h3>{name}</h3>
          {image && <img src={image} />}
      <p>
        {handle && credit && (
          <em>
            Photo by <a href={`https://unsplash.com/@${handle}`}>{credit}</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </em>
        )}
      </p>
      <p>{description}</p>
    </div>
  )
}

export default Card
