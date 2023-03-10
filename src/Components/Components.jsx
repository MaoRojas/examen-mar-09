import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Components.module.css";

const Components = () => {
  const [user, setUser] = useState({
    nombre: "",
    musica: "",
    pais: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const nombreIsValid = user.nombre.length > 3;
  const musicaIsValid = user.musica.length > 6;

 
  const handleChange = (e, property) => {
    setUser({ ...user, [property]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombreIsValid || !musicaIsValid) {
      setError(true);

      if (!nombreIsValid && !musicaIsValid) {
        setErrorMessage(
          "Nombre ingrese mas de 3 caracteres, Musica ingrese mas de 6 caracteres"
        );
      } else if (!nombreIsValid) {
        setErrorMessage("Nombre invalido ingrese mas de 3 caracteres");
      } else {
        setErrorMessage("Musica invalida ingrese mas de 6 caracteres");
      }
      return;
    }

    setIsLogged(true);
    console.log("data: ", user);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Que musica le gusta ?</h1>
      <form className={styles.datos} onSubmit={handleSubmit}>
        <input
          type=" text "
          name="nombre"
          onChange={(e) => handleChange(e, "nombre")}
        />
        {error &&
          errorMessage.includes(
            "Nombre ingrese mas de 3 caracteres, Musica ingrese mas de 6 caracteres"
          ) && (
            <span style={{ color: "red", fontSize: "1rem" }}>
              {" "}
              {errorMessage}{" "}
            </span>
          )}
        <input
          type=" text "
          name="musica"
          onChange={(e) => handleChange(e, "musica")}
        />
        {error &&
          errorMessage.includes(
            "Musica invalida ingrese mas de 6 caracteres"
          ) && (
            <span style={{ color: "red", fontSize: "1rem" }}>
              {" "}
              {errorMessage}{" "}
            </span>
          )}
        <select
          style={{
            width: "100%",
            height: "30px",
            fontSize: "0.9rem",
          }}
          onChange={(e) => handleChange(e, "pais")}
        >
          <option value="" default>
            Seleccione una opcion
          </option>
          <option value="Argentina">Argentina</option>
          <option value="Colombia">Colombia</option>
          <option value="Peru">Peru</option>
          <option value="Mexico">Mexico</option>
        </select>
        <button type="submit">Ingresar</button>
      </form>
      {isLogged && (
        <Card pais={user.pais} nombre={user.nombre} musica={user.musica} />
      )}
    </div>
  );
};

export default Components;
