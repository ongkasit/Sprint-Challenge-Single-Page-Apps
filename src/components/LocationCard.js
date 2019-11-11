import React from "react";
import styled from 'styled-components';
import { Card, Button } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {

  const StyledCard = styled(Card) `
    font-size: 1.5rem;
    width: 30%;
  `

  return (
  <StyledCard>
    <h2>{name}</h2>
    <p>{dimension}</p>
    <p>{type}</p>
    <Button>Residents: {residents}</Button>
  </StyledCard>
  )
}
