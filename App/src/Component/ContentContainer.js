import React from 'react';
import MapsContainer from './MapsContainer';
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