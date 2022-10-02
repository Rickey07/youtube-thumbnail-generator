import React from 'react'
import { Container } from 'react-bootstrap'

export default function Thumbnail({text}) {
  return (
    <>
      <Container className='d-flex flex-column justify-content-center align-items-center gap-3'>
        <img src={`https://img.youtube.com/vi/${text}/hqdefault.jpg`} style={{height:"360px" , maxWidth:"300px"}} alt="Not found"></img>
        <a href={`https://img.youtube.com/vi/${text}/hqdefault.jpg`}  className="btn btn-success" download="my-image">Download</a>
        </Container>
    </>
  )
}
