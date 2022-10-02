import React , {useState} from 'react'
import {Container,Form,FloatingLabel} from 'react-bootstrap'
import Thumbnail from './Thumbnail'

 function Search() {
    const [text,setText] = useState("");
    let searchId;
    const blurHandler = (e) => {
        e.preventDefault();
        let start;
        let end;
        start = text.indexOf("=");
        if (text.includes("&")) {
            end = text.indexOf("&");
        } else {
            console.log(text.slice(start+1,text.length));
        }
        searchId = (text.slice(start+1,end))
        setText(searchId);
    }


  return (
    <>
    <Container className='mt-3 d-flex justify-content-center gap-4 flex-wrap' style={{maxWidth:"700px"}}>
        <FloatingLabel controlId="floatingTextarea2" label="Enter Youtube URL" className="d-flex flex-column gap-3">
          <Form.Control as="textarea" style={{height:"60px" , minWidth:"300px"}} value={text} onChange={(e) => setText(e.target.value)} onBlur={blurHandler}></Form.Control>
          <a href="Prevent#"className="btn btn-danger" onClick={(e) => {
            e.preventDefault();
            setText("");
          }}>Clear</a>
        </FloatingLabel>
            <Thumbnail text={text}/>
    </Container>
    </>
  )
}

export default Search;