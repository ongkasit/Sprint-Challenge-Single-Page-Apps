import React from "react";
import styled from 'styled-components';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const StyledCard = styled(Card)`
  font-size: 1.5 rem;
  width: 30%;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

export default function CharacterCard(props) {
  return(
  <StyledCard>
    <img src={props.image} />
    <Title>{props.name}</Title>
    <CardSubtitle><p style={{color: 'silver'}}>{props.status}</p></CardSubtitle>
    Species: {props.species}<br/>
    Location: {props.location.name}<br/>
    Origin: {props.origin.name}
  </StyledCard>
  ) 
}
