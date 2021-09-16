import React from 'react';

type DogBreedContainerProps = {
    name: string;
    value: string[];
  }

function DogBreedContainer({ name, value }: DogBreedContainerProps) {
    return (
      <div style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "gray",
        borderRadius: "5px",
      }}>
        <div>Dog Breed: {name}</div>
        <div style={{ marginTop: "10px", }}>
          {value}
        </div>
      </div>
    )
  }

export default DogBreedContainer;