import React from 'react';
import PetList from './components/PetList';
import SearchBar from './components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './actions/actions';
import './App.css';

function App() {
  // const [pets, setPets] = React.useState<IPet[]>([]);
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, [])


  return (
    <div className="App">
      <SearchBar/>
      <PetList/>
    </div>
  );
}

export default App;
