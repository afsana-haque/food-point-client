import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
    const recipe = useLoaderData();
    console.log(recipe);
    const {id, recipes} = recipe;
    return (
        <Container className='mt-4'>
            <h2 className='fw-bold mb-4'>Recipes Details</h2>
            <Card className='w-75'>
                <Card.Body className='p-3 '>
                    <Card.Title>Recipe:</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted py-1">{recipes[0]?.ingredients[0]}, {recipes[0]?.ingredients[1]}, {recipes[0]?.ingredients[2]},</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted py-1">{recipes[0]?.ingredients[3]}, {recipes[0]?.ingredients[4]}, {recipes[0]?.ingredients[5]},</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted py-1">{recipes[0]?.ingredients[7]}, {recipes[0]?.ingredients[8]}, {recipes[0]?.ingredients[9]},  {recipes[0]?.ingredients[10]},</Card.Subtitle>
                     
                    <Card.Text><span className='fw-bold'>Method: </span>{recipes[0]?.method}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Recipe;