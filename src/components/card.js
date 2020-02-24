import React from "react"
import styled from "styled-components"

const Image = styled.img`
  margin-bottom: 0;
  object-fit: cover;
  height: auto;
  width: auto;
  max-width: 80%;
  max-height: 80%;
  display: block;
  margin: auto;
`
const Link = styled.a`
  color: black;
  text-decoration: none;
  margin: 10px 0;
  padding: 10px 5px;
`
const Button = styled.button`
  margin: 0 25px 50px 0;
  border: none;
  background: #004b40;
  color: #fff;
  font-size: 1.25rem;
  padding: 0.15rem 0.4rem;
  text-decoration: none;
  &:hover {
    font-size: 1.275rem;
    letter-spacing: 0.05rem;
  }
`
const ImageP = styled.p`
  text-align: center;
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
      {image && <Image src={image} alt={alt} />}
      <ImageP>
        {handle && credit && (
          <em>
            Photo by <a href={`https://unsplash.com/@${handle}`}>{credit}</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </em>
        )}
      </ImageP>
      <p>{description}</p>
      <Button>
        <Link style={{color: "white"}} href={github}>GitHub Repo</Link>
      </Button>{" "}
      <Button>
          <Link style={{ color: "white" }} href={demo}>Live Demo</Link>
      </Button>
    </div>
  )
}

export default Card
