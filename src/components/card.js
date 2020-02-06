import React from "react"

const Card = ({ name, image, handle, credit, description, github }) => {
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
      <p>TODO: Add GitHub url {github}</p>
    </div>
  )
}

export default Card
