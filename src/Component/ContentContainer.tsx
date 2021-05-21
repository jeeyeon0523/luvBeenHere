import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import DateSlider from './DateSlider';
import './ContentContainer.css';

function ContentContainer() {

    return(
        <Fragment>
            <Container fixed className="container">
                <Box className="container-box" display="flex" flexDirection="row">
                    {/* <DateSlider></DateSlider> */}
                    지도
                </Box>
                <Box className="container-box2" display="flex" flexDirection="row">
                    {/* <DateSlider></DateSlider> */}
                    상세페이지
                </Box>
            </Container>
        </Fragment>
    )
            
}

export default ContentContainer;