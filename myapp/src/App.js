import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Test from './components/Test'


// Update VUE
const App = () => {
const [myVar, setMyVar] = useState('Hello World');
const [movies, setMovies] = useState([]);

function fetchMoviesHandler() {
  fetch('https://swapi.dev/api/films/')
  .then(response => {
    console.log(response);
    return response.json()
  }).then(data => {
    console.log(data);
    setMovies(data.results);
  })
}

 useEffect(() => {
    fetchMoviesHandler();
 },[]);

const onClickHandler = () => {
  setMyVar('Hello World updated');
 
  //2ème méthode
  setMyVar((prevState) => {
     return prevState + ' updated';
  })
 }

const  childToParentUpdater = (data) => {
  console.log('childToParentUpdater',data);
}


return (
  <div className="App">
    <button onClick={onClickHandler}>ClickMe</button>
    {myVar}
    {/* <Test myProps='hello' /> */}
    <Test myProps={myVar} updater={childToParentUpdater}/>
    <h1>
      <ul>
      {movies.map(movie => <li>{movie.title}</li>)}
      </ul>
    </h1>
  </div>
  
);
}


export default App;