import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) {
  // console.log(props);
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation()

   useEffect(()=>{
      myFavorites.forEach(charFav => {
         charFav.id === id && setIsFav(true)
      })
   },[myFavorites])

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
      });
    }
  };

  return (
    <div className={styles.container}>

      <div className={styles.topContainer}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        { pathname === '/home' && <button onClick={() => onClose(id)}>X</button> }
      </div>

      <div className={styles.mainContainer}>

        <h1>{name}</h1>
               
        <Link to={`/detail/${id}`}>
           <img className={styles.imagen} src={image} alt={name} />
        </Link>

        <h2>Id: {id}</h2>

      </div>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state){
   return {
      myFavorites:state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
