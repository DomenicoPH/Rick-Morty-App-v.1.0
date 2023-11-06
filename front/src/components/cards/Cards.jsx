import Card from '../card/Card'
import styles from './Cards.module.css'

export default function Cards(props) {
   // console.log(props)
   const { characters, onClose } = props;
   // console.log(characters);
   return (
      <div className={styles.container}>
         {characters.map(char => (
         <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            gender={char.gender}
            origin={char.origin.name}
            species={char.species}
            image={char.image}
            onClose={onClose}
         /> 
      ))}
      </div>
   )
}
