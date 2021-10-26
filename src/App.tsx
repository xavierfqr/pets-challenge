import React from 'react';
import { AxiosResponse } from 'axios';
import petsServices from './services/pets-services';
import Pet from './components/Pet';
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
        {pets[0] ? 
        <Pet created={pets[0].created}
            description={pets[0].description}
            title={pets[0].title}
            url={pets[0].url}/> : null
        }
      </div>
      {console.log(pets)}
    </div>
  );
}

export default App;
