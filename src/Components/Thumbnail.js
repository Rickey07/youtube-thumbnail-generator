import React from 'react'

export default function Thumbnail({text}) {
  return (
    <>
        <img src={`https://img.youtube.com/vi/${text}/hqdefault.jpg`} style={{height:"360px" , width:"400px"}} alt="Not found"></img>
        <a href={`https://img.youtube.com/vi/${text}/hqdefault.jpg`}  className="btn btn-success" download="my-image">Download</a>
    </>
  )
}
