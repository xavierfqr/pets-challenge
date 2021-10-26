import React from 'react';
import { AxiosResponse } from 'axios';
import petsServices from './services/pets-services';
import PetList from './components/PetList';
import './App.css';

function App() {
  const [pets, setPets] = React.useState<any>([]);
  
  React.useEffect(() => {
    async function fetchData() {
      const response = await petsServices.getAll() as AxiosResponse;
      setPets(await response.data);
    }
    fetchData();
  }, [])


  return (
    <div className="App">
      <div>
        <PetList pets={pets}/>
      </div>
      {console.log(pets)}
    </div>
  );
}

export default App;
