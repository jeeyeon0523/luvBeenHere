import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import DateSlider from './DateSlider';
import '../dist/ContentContainer.css';
import './DetailContainer';
import Maps from '../modules/Maps';
import DetailContainer from './DetailContainer';

function MapsContainer(){

    return(
        <Fragment>
            <Container className="container">
                <Box className="container-box" display="flex" flexDirection="row">
                    <Maps />
                </Box>
                <Box className="container-box2" display="flex" flexDirection="row">
                    {/* <DateSlider></DateSlider> */}
                    <DetailContainer/>
                </Box>
            </Container>
        </Fragment>
    )
}

export default MapsContainer;