import { useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default ({ratedDoggo, getDoggo, doggo}) => {
    const dogRateInputRef = useRef(null);
    const dogDescriptionInputRef = useRef(null);

    const createRating = async (event) => {
        event.preventDefault();
        const dogRate = dogRateInputRef.current.value;
        const dogDescription = dogDescriptionInputRef.current.value;
        const body = JSON.stringify({
            rate:dogRate, description:dogDescription, image:doggo.message
        });
        event.currentTarget.reset();
        console.log(body);
        try{
            await fetch('http://localhost:3000/ratedogs', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: body
            })
            getDoggo()
            // getRatedDoggo()
        } catch(error){
            console.error(error)
        }
    }
    // const getRatedDoggo = async (event) => {
    //     event.preventDefault();
    //     const dogRate = dogRateInput.current.value;
    //     const dogDescription = dogDescriptionInput.current.value;
    //     const body = JSON.stringify({
    //         rate:dogRate, description:dogDescription, image:doggo.message
    //     });
    //     event.currentTarget.reset();
    //     try{
    //         await fetch('http://localhost:3000/ratedogs', {
    //             method: 'GET',
    //             headers: {
    //                 'Conent-type': 'application/json'
    //             },
    //             body: body
    //         })
    //         getRatedDoggo()
    //     } catch(error){
    //         console.error(error)
    //     }
    // }

    
    return(
        <Form onSubmit={createRating}>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Group>
                        <Form.Label>Dog Rate</Form.Label>
                        <Form.Control type="number" placeholder="Rate This Dog" ref={dogRateInputRef}/> /10
                        <br/>
                        <Form.Label>Describe This Dog</Form.Label>
                        <Form.Control type="text" placeholder="Describe This Dog" ref={dogDescriptionInputRef}/>
                        <br/>
                        <Button type="submit"> Rate This Dog</Button>{' '}
                    </Form.Group>
                </Col>
            </Form.Row>
        </Form>
    )

}

// Rate:<input className="fi" type="number" name="dogRate" ref={dogRateInput}/> /10 <br/>
// Describe this dog: <input className="fi" type="text" name="dogDescription" ref={dogDescriptionInput}/> <br/>
// <input type="submit" value="Rate This Dog"/>