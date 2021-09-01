import styled from "styled-components";
import React, { useState } from 'react';
import Rating from "@material-ui/lab/Rating";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from 'react-swipeable-views';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Steps = (files) => {
    const a = files.map((file) => {return {file}} );
    console.log("S F");
    return a
} 

const ClusterTooltipCss = styled.div`
    z-index:10000;
    position: absolute;
    top:${(props) => props.posY-250}px;
    left:${(props) => props.posX-100}px;
    background-color:rgba(255,255,255,1);
    width : 200px;
    height : 230px;
    margin-top:55px;
    border-radius: 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    pointer-events: none;
`;

const ImgCss = styled.img`
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
    width: 200px;
    height: 165px;
`;
const TooltipContainer = styled.div`
    align-items: center;
`

const Caption = styled.div`
    font-size: 12px;
    color: rgb(100,100,100);
    margin-top: 4px;
`
const PhotoCaption = styled.div`
    font-size: 11px;
    color: rgb(150,150,150);
    margin-top: 4px;
`



const AutoPlayer = ({files,activeStep,handleStepChange}) => {

    return (
        <AutoPlaySwipeableViews
            axis={'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            interval={1500}
        >
            {files.map((step, index) => (
            <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                <ImgCss src={step.file} ></ImgCss>
                ) : null}
            </div>
            ))}
        </AutoPlaySwipeableViews>
    )
}

function ClusterTooltip({file,place,posX,posY,photoCount}){
    const [activeStep, setActiveStep] = React.useState(0);
    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    const files = Steps(file)
    return <ClusterTooltipCss posX={posX} posY={posY}>
       <TooltipContainer>
            <AutoPlayer files={files} activeStep={activeStep} handleStepChange={handleStepChange} />
            <Rating
                name="simple-controlled"
                value={3}
                style={{ marginLeft: 8 }}
            />
            <Caption>{place}</Caption>
            <PhotoCaption>{photoCount}개 사진</PhotoCaption>
        </TooltipContainer>
    </ClusterTooltipCss>
}

export default ClusterTooltip;