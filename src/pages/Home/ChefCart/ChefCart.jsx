import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HiOutlineThumbUp} from "react-icons/hi";
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import "./ChefCart.css";

const ChefCart = ({chef}) => {
    const { id, picture, experience, name, likes,recipesNumber} = chef;
    // console.log(chef);
    return (
        <div className='mr-5 my-4 p-3'>
            <Card style={{ width: '22rem'}}>
                <LazyLoad><Card.Img variant="top" src={picture} style={{height:"250px"}} /></LazyLoad>
                <Card.Body>
                    <Card.Title >{name}</Card.Title>
                    <Card.Text className='fw-semibold'>Experience {experience}</Card.Text>
                    <Card.Text>Recipes: {recipesNumber}</Card.Text>
                    <Card.Text><HiOutlineThumbUp className='fs-5'></HiOutlineThumbUp> {likes}</Card.Text>
                    <Link to={`/chefs/${id}`}>
                    <Button variant="warning" className='text-success-emphasis'>View Recipe</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefCart;