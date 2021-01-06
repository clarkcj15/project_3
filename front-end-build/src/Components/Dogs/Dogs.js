import React from 'react';
import {useEffect, useState} from 'react';
import DogRateForm from '../../DogRateForm';

const Dogs = () => {
    const [doggo, showDog] = useState([]);
    const [ratedDoggo, showList] = useState([]);
    const dogURL = "https://dog.ceo/api/breeds/image/random";  
    const ratedURL = "http://localhost:3000/ratedogs";  
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
            
            <img className="i" src={doggo.message} height="200px" width="250"/>
            <DogRateForm getDoggo={getDoggo} ratedDoggo={ratedDoggo} doggo={doggo}/>
            <ul className="DRF">
                {
                    ratedDoggo.map(ratedDoggo => {
                        return(
                            <li>
                                <img src={ratedDoggo.image} height="200px" width="200px" alt=""/> <br/>
                                {ratedDoggo.rate} /10 <br/>
                                {ratedDoggo.description}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Dogs;