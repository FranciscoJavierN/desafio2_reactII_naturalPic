import { useContext } from "react";
import { GalleryContext } from "../context/GalleryContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(GalleryContext);

  const addFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
    
      
      if (photo.id == id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (

    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo, i) => (
        <div
          onClick={() => addFavorite(photo.id)}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.tiny})` }}
          key={i}
        >
          <IconHeart filled={photo.liked} />

          {}
          <p style={{ fontWeight: "600", textTransform: "uppercase" }}> {photo.alt} </p>
        </div>
      ))}
    </div>
  )

};
export default Gallery;