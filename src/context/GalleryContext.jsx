import { createContext, useEffect, useState } from "react";

export const GalleryContext = createContext();

const API_FOTOS = "/photos.json";

const GalleryProvider = ({ children }) => {
  
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch(API_FOTOS);

    const { photos: photosDB } = await response.json();

    setPhotos(photosDB.map((photo) => ({ ...photo, isFavorite: false })));
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <GalleryContext.Provider value={{ photos, setPhotos }}>
      {children}
    </GalleryContext.Provider>
  );
};

export default GalleryProvider;