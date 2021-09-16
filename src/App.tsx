import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DogBreedContainer from './components/DogBreedContainer'
import DogBreedListContainer from './components/DogBreedListContainer';
import { DogBreedList, DogBreedResponse } from './datamodels';


function App() {

  const [breedList, setBreedList] = useState<DogBreedList>({});

  useEffect(() => {
    document.title = "Dog API";
    fetchBreedList();
  }, [])

  async function fetchBreedList() {
    const response = await axios.get<DogBreedResponse>("https://dog.ceo/api/breeds/list/all");

    setBreedList(response.data.message);

    console.log(response);
  }

  return (
    <>
      <h1>Breed List</h1>
      {/* {JSON.stringify(breedList)} */}
      <DogBreedListContainer value={breedList} />
    </>
  )
}

export default App
