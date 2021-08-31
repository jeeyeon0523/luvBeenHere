import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCompass, faLaugh, faMap, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import Piccard from './piccard';
import CardContent from "@material-ui/core/CardContent";
import { useQuery } from '@apollo/client';
import { SEE_VISITS_QUERY } from '../graphql/visits';
const PopupCss = styled.div`
  z-index:10000;
  position: fixed;
  top:60px;
  right:0;
  background-color:rgba(0,0,0,0.1);
  width : 350px;
  height : 100%;
  margin-top:55px;
`;

function DetailPopup(){
  const { loading, error, data } = useQuery(SEE_VISITS_QUERY, {
    variables: { 
      xRngFrom: 0,
      xRngTo: 999,
      yRngFrom: 0,
      yRngTo: 999,
     },
  });
  if(!loading){
    console.log(data);
  }
  return (<PopupCss>
      {
        loading ? null :
        data?.seeVisits?.map(e=> 
          (<Piccard 
            key={e.id} 
            name={e.name} 
            place={e.place} 
            yyyymmdd={e.date.yyyymmdd} 
            dateName={e.date.name} 
            file={e.photos[0].file} 
            rating = {e.rating.rating}
          />)
        )
      }
    </PopupCss>)
}

export default DetailPopup;