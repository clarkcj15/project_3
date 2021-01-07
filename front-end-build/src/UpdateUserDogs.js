import { useRef, useState } from "react";
export default (props) => {
    const updateImageInputRef = useRef(null);
    const updateBreedInputRef = useRef(null);
    const updateRateInputRef = useRef(null);
    const updateDescriptionInputRef = useRef(null);

    const updateUserDog = async (event) => {
        event.preventDefault()
        const image = updateImageInputRef.current.value;
        const breed  = updateBreedInputRef.current.value;
        const rate = updateRateInputRef.current.value;
        const description = updateDescriptionInputRef.current.value;
        const body = JSON.stringify({
            image, breed, rate, description
        });
            event.currentTarget.reset(); 
            try {
                const response = await fetch(
                `https://dog-rate-app.herokuapp.com/api/userdogs/${_id}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: body,
                }
                );
                const data = await response.json();
                const filteredUserDogs = props.allDogs.filter(
                    (allDogs) => allDogs._id !== data._id
                )
                props.updatedUserDogs([...filteredUserDogs, data])
            } catch (err) {
                console.error(err);
            }
    };
            return (
            <form onSubmit={updateUserDog}>
                Image:<input type="text" ref={updateImageInputRef} />
                Breed:<input type="text" ref={updateBreedInputRef} />
                Rate:<input type="number" ref={updateRateInputRef} />
                Description: <input type="text" ref={updateDescriptionInputRef} />
                <input type="submit" value="Update Your Dog" />
            </form>
            );
};