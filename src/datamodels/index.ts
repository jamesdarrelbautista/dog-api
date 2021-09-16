export type DogBreedResponse = {
    message: DogBreedList;
    status: string;
  }
  
export type DogBreedList = {
    [key: string]: string[]
  }
  