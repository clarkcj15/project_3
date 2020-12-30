import { useRef, useEffect } from 'react';
// import Dogs from './Components/Dogs/Dogs';


export default (props) => {
    const dogRateInput = useRef(null);
    const dogDescriptionInput = useRef(null);

    const createRating = async (event) => {
        event.preventDefault();
        const dogRate = dogRateInput.current.value;
        const dogDescription = dogDescriptionInput.current.value;
        const body = JSON.stringify({
            dogRate, dogDescription
        });
        event.currentTarget.reset();
        try{
            const response = await fetch('http://localhost:3000/doggos', {
                method: 'POST',
                headers: {
                    'Conent-type': 'application/json'
                },
                body: body
            })
            const data = await response.json();
            props.updateDogs([...props.dogs,data]);
        } catch(error){
            console.error(error)
        }

        return(
            <form onSubmit={createRating}>
                <input className="fi" type="text" name="dogRate" ref={dogRateInput}/> <br/>
                <input className="fi" type="text" name="dogDescription" ref={dogDescriptionInput}/>
            </form>
        )
    }








}