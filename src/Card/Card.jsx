import React from "react";
import styles from "../Components/Components.module.css"

const Card = ({ nombre, musica, pais }) => {
  return (
    <div className={styles.confirmacion}>
      <h2>Hola tu nombre es {nombre} </h2>
      <h2>Hola tu musica es {musica} </h2>
      <h2>Hola tu pais es {pais} </h2>
    </div>
  );
};

export default Card;
