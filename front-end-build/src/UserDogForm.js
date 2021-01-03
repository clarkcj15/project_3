import { useRef, useEffect } from 'react';

export default ({userDogs, fetchUserDogs}) => {
    const imageInput = useRef(null);
    const breedInput = useRef(null);
    const rateInput = useRef(null);
    const descriptionInput = useRef(null);

    const createUserDog = async (event) => {
        event.preventDefault()
        const image = imageInput.current.value;
        const breed = breedInput.current.value;
        const rate = rateInput.current.value;
        const description = descriptionInput.current.value;const 
        body = JSON.stringify({
            image, breed, rate, description
        });
        event.currentTarget.reset();
        try {
            await fetch('http://localhost:3000/doggos', {
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
        <form onSubmit={createUserDog}>
            Image: <input className="form" type="text" name="image" ref={imageInput}/> <br/>
            Breed: <input className="form" type="text" name="breed" ref={breedInput}/> <br/>
            Rate: <input className="form" type="number" name="rate" ref={rateInput}/> /10 <br/>
            Description: <input className="form" type="text" name="description" ref={descriptionInput}/>
            <input type="submit" value="Rate Your Dog"/>
        </form>
    )
}