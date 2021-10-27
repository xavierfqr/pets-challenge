import React from 'react';
import { AxiosResponse } from 'axios';
import petsServices from './services/pets-services';
import PetList from './components/PetList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [pets, setPets] = React.useState<IPet[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await petsServices.getAll() as AxiosResponse;
      const fetchedPets = await response.data;
      setPets(fetchedPets.map((pet: IPet, index: number) => ({...pet, id: index})));
      window.localStorage.setItem("petList", JSON.stringify(fetchedPets));
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <SearchBar setPets={setPets}/>
      <PetList pets={pets}/>
    </div>
  );
}

export default App;
