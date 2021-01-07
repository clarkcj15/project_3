import React from 'react';
import {useEffect, useState} from 'react';
import DogRateForm from '../../DogRateForm';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/esm/Card';


const Dogs = () => {
    const [doggo, showDog] = useState([]);
    const [ratedDoggo, showList] = useState([]);
    const dogURL = "https://dog.ceo/api/breeds/image/random";  
    const ratedURL = "https://dog-rate-app.herokuapp.com/api/ratedogs";  
    const getDoggo = async () => {
        try{
        const response = await fetch(dogURL);
        const data = await response.json();
        console.log(data);
        showDog(data);
        getRatedDoggo();
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getDoggo();
        getRatedDoggo();
    }, []);
    
    const getRatedDoggo = async () => {
        try{
            const response = await fetch(ratedURL);
            const data = await response.json();
            console.log(data);
            showList(data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="d">
            <header className="head">
            <h1>Rate Our Dogs!</h1>
            </header>
            
            <Card style={{width: '20rem'}}><Card.Img className="i" src={doggo.message} height="200px" width="250"/></Card>
            
            <DogRateForm getDoggo={getDoggo} ratedDoggo={ratedDoggo} doggo={doggo}/>
            <ul className="dog-list">
                {
                    ratedDoggo.map(ratedDoggo => {
                        return(
                            <li>
                            
                                <Card style={{width: '20rem'}} className="text-center">
                                    <Card.Img variant="top" style={{width: '20rem'}} src={ratedDoggo.image}/>
                                    <Card.Body>
                                        <ListGroup horizontal>
                                            <ListGroup.Item style={{width: '10rem'}} > {ratedDoggo.rate} /10 </ListGroup.Item>
                                            <ListGroup.Item style={{width: '10rem'}} > {ratedDoggo.description} </ListGroup.Item>
                                        </ListGroup>
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
export default Dogs;


{/* <img src={ratedDoggo.image} height="200px" width="200px" alt=""/> <br/> */}