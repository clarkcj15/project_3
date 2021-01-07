import { useRef, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default ({userDogs, fetchUserDogs}) => {
    const imageInputRef = useRef(null);
    const breedInputRef = useRef(null);
    const rateInputRef = useRef(null);
    const descriptionInputRef = useRef(null);

    const createUserDog = async (event) => {
        event.preventDefault()
        const image = imageInputRef.current.value;
        const breed = breedInputRef.current.value;
        const rate = rateInputRef.current.value;
        const description = descriptionInputRef.current.value;
        const body = JSON.stringify({
            image, breed, rate, description
        });
        event.currentTarget.reset();
        try {
            await fetch('https://dog-rate-app.herokuapp.com/api/doggos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            })
            fetchUserDogs()
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <Form onSubmit={createUserDog}>
        <Form.Row className="align-items-center">
        <Col xs="auto">
            <Form.Group>

            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Input Image URL" ref={imageInputRef} />
             <br/>

            <Form.Label>Breed</Form.Label>
            <Form.Control type="text" placeholder="Input Dog Breed" ref={breedInputRef}/>
             <br/>

            <Form.Label>Rate Your Dog</Form.Label>
            <Form.Control type="number" placeholder="Rate Your Dog" ref={rateInputRef}/> /10
             <br/>

            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Describe Your Dog" ref={descriptionInputRef}/>
            <Button type="submit">Rate Your Dog</Button>{' '}
            </Form.Group> <br/>
            </Col>
            </Form.Row>
        </Form>
    )
}
{/* <form onSubition={createUserDog}>
<Form.Group controlId="image">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" placeholder="Input Image URL" />
  </Form.Group>
</form>

<Button type="submit">Rate Your Dog</Button>{' '}

Image: <input className="form" type="text" name="image" ref={imageInput}/> 
Breed: <input className="form" type="text" name="breed" ref={breedInput}/> <br/>
Rate: <input className="form" type="number" name="rate" ref={rateInput}/> /10 <br/>
Description: <input className="form" type="text" name="description" ref={descriptionInput}/>
<input type="submit" value="Rate Your Dog"/>
*/}