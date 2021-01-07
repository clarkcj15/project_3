import React from 'react';
import {useState, useEffect} from 'react';
import UserDogForm from '../../UserDogForm'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/esm/Card';


const UserDogs = () => {
    const [userDogs, setUserDogs] = useState([])
    const fetchUserDogs = async () => {
        try{
            const response = await fetch('https://dog-rate-app.herokuapp.com/api/doggos');
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
            <ul className="user-dog-form">
            {
                userDogs.map(userDogs => {
                    return(
                        <li>
                            <Card style={{width: '20rem'}} className="text-center">
                                <Card.Img variant="top" style={{width: '20rem'}} src={userDogs.image} /> <br/>
                                <Card.Body>
                                    <ListGroup.Item style={{width: '10rem'}}>{`${userDogs.breed}`}</ListGroup.Item> <br/>
                                    <ListGroup.Item style={{width: '10rem'}}>{`${userDogs.rate}`}/10</ListGroup.Item>  <br/>
                                    <ListGroup.Item style={{width: '10rem'}}>{`${userDogs.description}`}</ListGroup.Item> 
                                </Card.Body>
                            </Card>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}



export default UserDogs;