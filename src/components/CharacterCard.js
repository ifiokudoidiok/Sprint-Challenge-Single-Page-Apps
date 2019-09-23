import React from "react";
import styled from "styled-components";
const StyledCharacter = styled.div`
  .container {
    box-sizing: border-box;
    display: flex;
     flex-direction: row;
      /* width: 20%;  */
     margin: 0 auto;
     /* border: 2rem solid black; */
  }

`;

export default function CharacterCard(props) {
  const { name, gender, image, species } = props.data;
  return (
    <StyledCharacter>
      <div className="container">
        <div className="character">
          <figure>
            <img src={image} alt={name} />
            </figure>
          <div>Name: {name}</div>
          <div>Gender: {gender}</div>
          <div>Specie: {species}</div>
        </div>
      </div>
    </StyledCharacter>
  );
}
