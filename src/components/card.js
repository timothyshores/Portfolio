import React from "react"

const Card = ({ name, image, handle, credit, description, github, demo, alt }) => {
  return (
    <div>
      <h3>{name}</h3>
          {image && <img src={image} alt={alt}/>}
      <p>
        {handle && credit && (
          <em>
            Photo by <a href={`https://unsplash.com/@${handle}`}>{credit}</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </em>
        )}
      </p>
      <p>{description}</p>
      <button>
        <a href={github}>GitHub Repo</a>
      </button>
      <button>
        <a href={demo}>Live Demo</a>
      </button>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Card
