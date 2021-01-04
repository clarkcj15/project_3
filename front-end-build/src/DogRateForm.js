import { useRef, useEffect } from 'react';


export default ({ratedDoggo, getDoggo}) => {
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
            await fetch('http://localhost:3000/ratedogs', {
                method: 'POST',
                headers: {
                    'Conent-type': 'application/json'
                },
                body: body
            })
            getDoggo()
            // getRatedDoggo()
        } catch(error){
            console.error(error)
        }
    }
    const getRatedDoggo = async (event) => {
        event.preventDefault();
        const dogRate = dogRateInput.current.value;
        const dogDescription = dogDescriptionInput.current.value;
        const body = JSON.stringify({
            dogRate, dogDescription
        });
        event.currentTarget.reset();
        try{
            await fetch('http://localhost:3000/ratedogs', {
                method: 'GET',
                headers: {
                    'Conent-type': 'application/json'
                },
                body: body
            })
            getRatedDoggo()
        } catch(error){
            console.error(error)
        }
}

    
    return(
        <form onSubmit={createRating}>
    
            Rate:<input className="fi" type="number" name="dogRate" ref={dogRateInput}/> /10 <br/>
           Describe this dog: <input className="fi" type="text" name="dogDescription" ref={dogDescriptionInput}/> <br/>
           <input type="submit" value="Rate This Dog"/>
        </form>
    )







}