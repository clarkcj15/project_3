import React from 'react';
import {useState, useEffect} from 'react';
import UserDogForm from '../../UserDogForm'


const UserDogs = () => {
    const [userDogs, setUserDogs] = useState([])
    const fetchUserDogs = async () => {
        try{
            const response = await fetch('http://localhost:3000/doggos');
            const data = await response.json();
            setUserDogs(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserDogs()
    }, [])

    return(
        <div className="UD">
            <header className="he">
            <h1>Rate Your Own Dog!</h1>
            </header>

            <h3>Give the requested information to create your very own dog rating</h3>
            <UserDogForm fetchUserDogs={fetchUserDogs} userDogs={userDogs}/>
            <ul className="UDF">
            {
                userDogs.map(userDogs => {
                    return(
                        <li>
                            <img src={userDogs.image} height="200px" width="200px" alt=""/> <br/>
                            {`${userDogs.breed}`} <br/>
                            {`${userDogs.rate}`} /10 <br/>
                            {`${userDogs.description}`}
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}



export default UserDogs;