import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DateSlider from './DateSlider';
import '../dist/ContentContainer.css';
import Maps from '../modules/Maps';

function MapsContainer(){

    return(
        <Fragment>
            <Container fixed className="container">
                <Box className="container-box" display="flex" flexDirection="row">
                    {/* <DateSlider></DateSlider> */}
                    지도
                    <Maps />
                </Box>
                <Box className="container-box2" display="flex" flexDirection="row">
                    {/* <DateSlider></DateSlider> */}
                    상세페이지
                </Box>
            </Container>
        </Fragment>
    )
}

export default MapsContainer;