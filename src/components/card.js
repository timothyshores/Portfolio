import React from "react"
import styled from "styled-components"

const Link = styled.a`
  color: black;
  text-decoration: none;
  margin: 10px 0;
  padding: 10px 5px;
`

const Button = styled.button`
  margin: 0 25px 50px 0;
`

const Card = ({
  name,
  image,
  handle,
  credit,
  description,
  github,
  demo,
  alt,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      {image && <img src={image} alt={alt} />}
      <p>
        {handle && credit && (
          <em>
            Photo by <a href={`https://unsplash.com/@${handle}`}>{credit}</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </em>
        )}
      </p>
      <p>{description}</p>
      <Button>
        <Link href={github}>GitHub Repo</Link>
      </Button>{" "}
      <Button>
        <Link href={demo}>Live Demo</Link>
      </Button>
    </div>
  )
}

export default Card
