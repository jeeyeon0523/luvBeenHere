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
  left:5%;
  background-color:white;
  width : 400px;
  height : 80%;
`;


function ListPopup(){
    return(
      <PopupCss>
          <p>처음 한강 간 날</p>
          <p>에버랜드!!</p>
      </PopupCss>
    )
}

export default ListPopup;