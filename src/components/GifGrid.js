import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  return (
    <>
      <h3 className="card animate__animated animate__fadeIn">{category}</h3>
      {loading && (
        <p className="card animate__animated animate__flash">Loading</p>
      )}
      <div className="card-grid">
        {data.map((img) => (
          //<li key={id}>{title}</li>
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
