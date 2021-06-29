import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass, faLaugh, faMap, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import Piccard from './piccard';
import CardContent from "@material-ui/core/CardContent";
const PopupCss = styled.div`
  z-index:10000;
  position: fixed;
  top:60px;
  right:0;
  background-color:rgba(0,0,0,0.1);
  width : 350px;
  height : 100%;
`;

function DetailPopup(){
    return(
      <PopupCss>
     
        <Piccard />
        <Piccard />
        <Piccard />
 
      </PopupCss>
    )
}

export default DetailPopup;