import { useState } from "react"
import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id, setId] = useState('')
   
   function handleChange(evento){
      // console.log(evento.target.value);
      setId(evento.target.value)
   }

   const search = () => {
      props.onSearch(id)
      setId('')
   }

   const handleKeyPress = event => {
      if (event.key === "Enter") {
         search(); // Llamar a handleSearch cuando se presione la tecla Enter
      }
   }

      return (
         <div className={styles.container}>

         <div className={styles.searchBox}>
            <input 
               type='search'
               name='search'
               id='search' 
               placeholder='ID'
               onChange={handleChange}
               onKeyPress={handleKeyPress} // Agregar el evento onKeyPress
               value={id} // Asignar el valor del estado local al input
               />
            <button onClick={search}>Add+</button>
         </div>
         
      </div>
      )
}
