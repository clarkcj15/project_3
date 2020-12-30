import React, {useEffect, useState} from 'react';
import DogRateForm from '../DogRateForm';

const Doggo = (props) => {
    
    const [doggo, showDog] = useState(0);
    const dogURL = "https://dog.ceo/api/breeds/image/random";
    
    const getDoggo = async () => {
        // const doggoPic = props.routerProps.match.params.doggoPic;
        const url = `${dogURL}`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        showDog(json);
    }
    useEffect(() => {
        getDoggo();
        // console.log("use effect")
    }, []);

    return(
        <div className="d">
            <img className="i" src={doggo.message} height="200px" width="250"/>
            <DogRateForm/>
        </div>
    )
}

export default Doggo;