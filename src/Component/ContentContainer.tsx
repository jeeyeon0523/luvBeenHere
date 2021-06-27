import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import MapsContainer from './MapsContainer';
import DateSlider from './DateSlider';
import styled from 'styled-components';

const SFullScreen = styled.div`
  background-color: white;
`;

function ContentContainer(){
    return(
        <SFullScreen>
            <MapsContainer/> 
        </SFullScreen>   
    )
            
}

export default ContentContainer;