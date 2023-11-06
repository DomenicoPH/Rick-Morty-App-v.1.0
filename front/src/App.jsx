import "./App.css";
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Cards from "./components/cards/Cards";
import Nav from './components/nav/Nav';
import About from "./components/about/About";
import Detail from "./components/detail/Detail";
import Error404 from './components/error404/Error404';
import Form from "./components/form/Form";
import Favorites from "./components/favorites/Favorites";

function App() {
  const URL_BASE = 'http://localhost:3001/rickandmorty/'

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

  // console.log(location);

  const login = async ({email, password}) => {
    try {
      const { data } = await axios(`${URL_BASE}/login?email=${email}&password=${password}`)

      // console.log(data);
      const { access } = data
      setAccess(access)
      access && navigate('/home')

    } catch ({response}) {
        const { data } = response
        // console.log(data);
        alert(data.message)
    }
    
  }

  async function onSearch(id){
    // console.log(id);
    if(!id) return alert('Ingresa un Id numérico')
    if(characters.some(char => char.id === id)){
      alert(`Ya existe el personaje con el id ${id}`)
      return
    }

   try {
     const { data } = await axios(`${URL_BASE}character/${id}`)
     setCharacters(oldChars => [...oldChars, data])
   } catch (error) {
      // console.log(error.response.data);
      alert(error.response.data)
   }
    
  }

  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id))
  }

  useEffect(()=>{
    !access && navigate('/')
  },[access])

  return (
    <div className="App">
      { pathname !== '/' && <Nav onSearch={onSearch}/> }
      <Routes>
        <Route path="/" element={<Form login={login}/>}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
      
    </div>
  );
}

export default App;
