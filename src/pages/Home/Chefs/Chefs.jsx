import React, { useEffect, useState } from 'react';
import ChefCart from '../ChefCart/ChefCart';
import { Container } from 'react-bootstrap';


const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    console.log(chefs);

    useEffect(() => {
        fetch(`http://localhost:5000/chefs`)
            .then((res) => res.json())
            .then((data) => setChefs(data))
    }, [])
    

    return (
        <Container>
            <h2>Meet Our Expart Chef</h2>
            <div>
                {
                    chefs.map(chef => <ChefCart
                    chef={chef}></ChefCart>)
                }
            </div>
        </Container>
    );
};

export default Chefs;