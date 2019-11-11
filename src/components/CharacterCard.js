import React from "react";
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

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
    <p style={{color: 'silver'}}>{props.status}</p>
    Species: {props.species}<br/>
    Location: {props.location.name}<br/>
    Origin: {props.origin.name}
  </StyledCard>
  ) 
}
