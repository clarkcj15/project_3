import React from 'react';
import dogs from './models/dogs';

const UserDogs = () => {

    return(
        <div>
            <Dog/>
        </div>
    )
}



export default UserDogs;



// import dogs from '../controllers/dogs/dogs';

// {/* <form onSubmit={handleSubmit}>
//       <label htmlFor="image"> Enter Dog Breed To Get Dog Pic </label>
//       <input type="text" id="image" value={image} onChange={(e) => {setBreed(e.target.value)}}/>
//       </form>
// <p>{setBreed.message}</p> */}