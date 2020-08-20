import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch", "Samurai Dragon", "Gragon Ball"];
  // No podemos inicializar un elemento que va a cambiar como una constante como en la linea anterior comentada
  // hay que hacerlo con useState
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    //enviamos a nuestro componente AddCategory setCategories que es lo que nos permite cambiar
    // nuestro array inicial.
    // en el listado ol recorremos en array con map es importante poner una key que debe ser unica
    <>
      <h2>GifExpertApp</h2>

      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
