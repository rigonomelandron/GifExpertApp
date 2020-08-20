import React, { useState } from "react";
import PropTypes from "prop-types";
// Recibimos setCategories que es el elemento setState de modificacion del array inicial
export const AddCategory = ({ setCategories }) => {
  // con el useState estamos definiendo que puede cambiar de estado parte de un estado inicial
  const [inputValue, setInputValue] = useState("");

  // capturar el evento del input
  const handleInputChange = (e) => {
    //console.log(e.target.value);

    setInputValue(e.target.value);
  };
  // capturamos el evento submit cuando presionamos enter
  const handleSubmit = (e) => {
    e.preventDefault(); // es importante ponerlo para prevenir el refresco del formulario por defecto
    // validamos que no metemos un campo vacio con el sguiente if antes de hacer la inserción
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

// con los propTypes hacemos que un elemento sea obligatorio por ejemplo la funcion setCategories
// que es donde nos pasan el array para su actualizacion con los nuevo elemento añadidos en el submit
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
