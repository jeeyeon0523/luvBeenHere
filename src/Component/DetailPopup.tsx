import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass, faLaugh, faMap, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const PopupCss = styled.div`
  z-index:10000;
  position: fixed;
  top:10%;
  left:calc(6% + 400px);
  background-color:white;
  width : 1200px;
  height : 80%;
`;


function DetailPopup(){
    return(
      <PopupCss>
          <p>제목</p>
          <p>별점 5개</p>
          <p>사진1</p>
          <p>너무 재밌었다</p>
          <p>사진2</p>
          <p>너무 맛있었다</p>
      </PopupCss>
    )
}

export default DetailPopup;