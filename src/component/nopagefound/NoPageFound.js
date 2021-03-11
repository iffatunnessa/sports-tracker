import { Container } from '@material-ui/core';
import React from 'react';

const NoPageFound = () => {
    return (
        <div>
            <Container maxWidth="md" style={{color:'white', textAlign:'center'}}>
                <h1>Page not found</h1>
            </Container>
        </div>
    );
};

export default NoPageFound;