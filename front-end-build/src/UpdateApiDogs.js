import { useRef, useState } from "react";
export default (props) => {
    const updateDogRateInputRef = useRef(null);
    const updateDogDescriptionInputRef = useRef(null);
    
    // const [change, setChange] = useState('')
    const updateApiDogs = async (event) => {
        event.preventDefault()
        const dogRate = updateDogRateInputRef.current.value;
        const dogDescription = updateDogDescriptionInputRef.current.value;
        const body = JSON.stringify({
            dogRate: dogRate, description: dogDescription
        });
            event.currentTarget.reset(); 
            console.log(body);
            try {
                const response = await fetch(`https://dog-rate-app.herokuapp.com/api/ratedogs/${_id}`, {
                    method: "PUT",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: body,
                })
                // setChange()

                const data = await response.json();
                const filteredDogs = props.someDogs.filter(
                    (someDogs) => someDogs._id !== data._id
                )
                props.updateApiDogs([...filteredDogs, data])
            } catch (err) {
                console.error(err);
            }
        };
            return (
            <form onSubmit={updateApiDogs}>
                Rate:<input type="number" ref={updateDogRateInputRef} />
                Description:<input type="text" ref={updateDogDescriptionInputRef} />
                <input type="submit" value="Update Dog" />
            </form>
            );
};