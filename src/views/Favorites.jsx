import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";

const Favorites = () => {
  const { photos, setPhotos } = useContext(GalleryContext);

  const removeFavorite = (id) => {
    // eliminacion de favoritos
    const newPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          liked: false,
        };
      }
 
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos
          .filter((foto) => foto.liked)
          .map((foto, i) => (
            <img
              key={i}
              src={foto.src.tiny}
              alt={foto.alt}
              onClick={() => removeFavorite(foto.id)}
            />
          ))}
      </div>
    </div>
  );
};
export default Favorites;