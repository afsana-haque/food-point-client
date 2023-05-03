import React, { useEffect, useState } from 'react';
import ChefCart from '../ChefCart/ChefCart';
import { Container, Row } from 'react-bootstrap';


const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    // console.log(chefs);

    useEffect(() => {
        fetch(`http://localhost:5000/chefs`)
            .then((res) => res.json())
            .then((data) => setChefs(data))
    }, [])
    

    return (
        <Container className='mt-5 pt-5'>
            <h2 className='text-center'>Meet Our Expart Chef</h2>
            <Row xs={1} lg={3} className="g-2">
                {
                    chefs.map(chef => <ChefCart
                    key={chef.id}
                    chef={chef}></ChefCart>)
                }
            </Row>
        </Container>
    );
};

export default Chefs;