import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass, faLaugh, faMap, faTimesCircle } from "@fortawesome/free-regular-svg-icons";

const SNavi = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: ${(props) => props.theme.accent_intense};
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.theme.accent_intense};
  display: flex;
  flex-direction: row;
  height: 60px;
  position: fixed;
  width: 100%;
  justify-content: space-around;
  top:0;
  z-index:9000;
`;

const Logo = styled.img`
  height:35px
`
const LogoContainer = styled.div`

`
const Icon = styled.a`
  font-size: 30px;
  color: ${(props) => props.theme.bg_intense};
  padding-left: 20px;

`

function Navi(){

    const history = useHistory();

    const handleLogoClick= () => {
        history.push({
            pathname : "/"
        })
    }

    const handleMapClick= () => {
        history.push({
            pathname : "/map"
        })
    }
    
    return(
      <SNavi>
        <LogoContainer onClick={handleLogoClick}>
          <Logo src="/images/logo_small.png"></Logo>
          <Logo src="/images/lbh_small.png"></Logo>
        </LogoContainer>
        <div>
        <Icon><FontAwesomeIcon icon={faCompass} onClick={handleMapClick}/></Icon>
        <Icon><FontAwesomeIcon icon={faClock} /></Icon>
        <Icon><FontAwesomeIcon icon={faLaugh} /></Icon>
        </div>
      </SNavi>
    )
}

export default Navi;