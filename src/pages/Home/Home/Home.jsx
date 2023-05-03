import React from 'react';
import { Button, Container } from 'react-bootstrap';
import banner from "../../../assets/banner.jpg";
import Chefs from '../Chefs/Chefs';


const Home = () => {
    return (
        <Container>
            <div className='d-lg-flex mt-4'>
                <div className='mt-5 pt-5 px-2'>
                    <h2>FIND ANYTHING WHAT YOU WANT TO EAT</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae enim non architecto culpa facere. Soluta nam commodi aperiam dolorum, labore odit dolores nostrum quae libero!</p>
                    <Button variant="warning">Show Details</Button>
                </div>
                <div>
                    <img src={banner} alt="" />
                </div>
            </div>
            <div>
                <Chefs></Chefs>
            </div>
        </Container>
    );
};

export default Home;