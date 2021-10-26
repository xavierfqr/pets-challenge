import React from 'react';
import { AxiosResponse } from 'axios';
import petsServices from './services/pets-services';
import './App.css';

function App() {
  const [pets, setPets] = React.useState<any>([]);
  
  React.useEffect(() => {
    async function fetchData() {
      let response = await petsServices.getAll() as AxiosResponse;
      setPets(await response.data);
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <div>
      </div>
      {console.log(pets)}
    </div>
  );
}

export default App;
