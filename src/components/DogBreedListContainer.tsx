import React from "react";
import { DogBreedList } from "../datamodels";
import DogBreedContainer from "./DogBreedContainer";

type DogBreedListContainerProps = {
  value: DogBreedList;
}

function DogBreedListContainer({ value }: DogBreedListContainerProps) {
    return (
      <>
        {Object.keys(value).map((item, index) => {
          return <DogBreedContainer
            key={index}
            name={item}
            value={value[item]
            } />
        })}
      </>
    )
  }

  export default DogBreedListContainer;