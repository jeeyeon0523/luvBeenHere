import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DateSlider from './DateSlider';
import '../dist/ContentContainer.css';
import './DetailContainer';
import Maps from '../modules/Maps';
import DetailContainer from './DetailContainer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ContainerDimensions from "react-container-dimensions"
import Navi from './Navi';
import DetailPopup from './DetailPopup';

const SFullScreen = styled.div`
  height : 100%;
  width : 100%;
`;



function MapsContainer() {

    return (
        
        <SFullScreen>
            <Maps />

            <DetailPopup/>

        </SFullScreen>
        
    )
}
export default MapsContainer;