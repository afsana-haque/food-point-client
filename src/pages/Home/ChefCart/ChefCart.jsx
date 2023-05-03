import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HiOutlineThumbUp} from "react-icons/hi";

const ChefCart = ({chef}) => {
    const { id, picture, experience, name, ratings,recipesNumber} = chef;
    console.log(chef);
    return (
        <div className='mr-5 my-4 p-3'>
            <Card style={{ width: '22rem'}}>
                <Card.Img variant="top" src={picture} style={{height:"250px"}} />
                <Card.Body>
                    <Card.Title >{name}</Card.Title>
                    <Card.Text className='fw-semibold'>Experience {experience}</Card.Text>
                    <Card.Text>Recipes: {recipesNumber}</Card.Text>
                    <Card.Text><HiOutlineThumbUp className='fs-5'></HiOutlineThumbUp> {ratings}</Card.Text>
                    <Button variant="warning" className='text-success-emphasis'>View Recipe</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCart;