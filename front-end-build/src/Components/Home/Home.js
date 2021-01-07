import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    return(
    <div class="col d-flex justify-content-center">
        <Card className="C" style={{ width: '29rem', height: '25rem' }}>
            <Card.Img variant="top" src="https://res.cloudinary.com/dwpxepy1m/image/upload/v1609958891/IMG_5685_j93few.jpg" />
            <Card.Body>
            <Card.Title>Dog lovers of all kinds can come together and rate some dogs!</Card.Title>
            </Card.Body>
        </Card>
    </div>
    )

}

export default Home;
//         <div>
//         <h1>Let's Rate Dogs!</h1>
//         <h2>Choose From The Navigations Options To Get Started</h2>
//         </div>