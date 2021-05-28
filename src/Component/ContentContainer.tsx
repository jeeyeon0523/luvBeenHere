import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MapsContainer from './MapsContainer';
import DateSlider from './DateSlider';

function ContentContainer(){

    return(
        <Fragment>
            <Container fixed className="container">
                <MapsContainer/>
            </Container>
        </Fragment>
    )
            
}

export default ContentContainer;