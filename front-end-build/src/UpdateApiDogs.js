import { useRef, useState } from "react";
export default ({props, _id}) => {
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
        // const deleteDog = async (id) => {
        //     try {
        //       const response = await fetch(`https://dog-rate-app.herokuapp.com/api/userdogs/${_id}`, {
        //         method: 'DELETE',
        //         headers: {
        //           'Content-type': 'application/json',
        //       }
        //       })
        //       const data = await response.json();
        //       const filteredUserDogs = userDogs.filter(userDogs => userDogs._id !== data._id)
        //       setUserDogs(filteredUserDogs);
        //     } catch(error) {
        //       console.error(error)
        //     }
        //   }
            return (
            <form onSubmit={updateApiDogs}>
                Rate:<input type="number" ref={updateDogRateInputRef} />
                Description:<input type="text" ref={updateDogDescriptionInputRef} />
                <input type="submit" value="Update Dog" />
            </form>
            );
};