import React from 'react';
import PetList from '../components/PetList';
import SearchBar from '../components/SearchBar';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/actions';
import styled from 'styled-components';




function Home() {
    const dispatch = useDispatch()

    React.useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch])
    //dispatch dependency to remove eslint warning...
  
    return (
      <div>
        <SearchBar/>
        <PetList/>
      </div>
    );
}

export default Home
