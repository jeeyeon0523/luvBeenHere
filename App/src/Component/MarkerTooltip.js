import styled from "styled-components";
import React, { useState } from 'react';
import Rating from "@material-ui/lab/Rating";

const Container = styled.div`
    background-color:rgba(255,255,255,1);
    width : 200px;
    height : 270px;
    border-radius: 15px;
    padding: 0;
`;
const ImgCss = styled.img`
    object-fit: cover;
    width: 200px;
    height: 140px;
    border-radius: 0px 0px 0 0;

`;
const TooltipContainer = styled.div`
    align-items: center;
`
const Caption = styled.div`
    font-size: 13px;
    color: rgb(50,50,50);
    margin-top: -2px;
`
const PhotoCaption = styled.div`
    font-size: 11px;
    color: rgb(150,150,150);
    margin-top: -1px;
`
const DateCaption = styled.div`
    font-size: 11px;
    color: rgb(50,50,50);
    margin-top: -1px;
`
const LocationCaption = styled.div`
    font-size: 11px;
    color: rgb(100,100,100);
    margin-top: 3px;
`
const Title = styled.div`
    font-size: 20px;
    color: rgb(50,50,50);
    margin-top: -2px;
    font-weight: 600;
`
const Topper = styled.div`
    position: absolute;
    background-color: rgba(255,255,255,0.7);
    width : 200px;
    border-radius: 15px 15px 0 0;
    top:0;
`
const Bottom = styled.div`
    position: absolute;
    background-color: rgba(255,255,255,0.7);
    width : 200px;
    border-radius: 0 0 15px 15px;
    bottom:0;
`
function MarkerTooltip({datetime, datename, file, rating, caption, location, photoCount}){

    return(
    <Container>
        <TooltipContainer>

            <DateCaption>{datetime}</DateCaption>
            <Title>
                {datename}
            </Title>
      
            <ImgCss src={file} ></ImgCss>
            <Rating
                name="simple-controlled"
                value={rating}
                style={{ marginTop: -4 }}
            />
            <Caption>{caption}</Caption>
            <LocationCaption>{location}</LocationCaption>
            <PhotoCaption>{photoCount}개 사진</PhotoCaption>
            </TooltipContainer>
    </Container>
    )
}

export default MarkerTooltip;