import React from "react";

const Home = () => {
  return (
    <div className=" bg-slate-400">
      <h1>Este archivo index funcionara como un Layout</h1>
      <p>Instrucciones:</p>
      <p>Para añadir una nueva pagina se debera crear su carpeta, si es general debera tener un index dentro, caso contrario sera [id].tsx </p>
      <p>Ejemplo:</p>
      <p>Product</p>
      <p>-index.tsx</p>
      <p>-[id].tsx o [productId].tsx</p>
    </div>
  );
};

export default Home;
