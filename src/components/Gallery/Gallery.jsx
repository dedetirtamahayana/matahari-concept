import React from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

const Gallery = ({ images }) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className='container mx-auto text-center px-0 py-16'>
      <h2 className='text-center text-4xl mb-5'>Gallery</h2>
      <div className='mx-auto flex justify-center items-center'>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          {images.map((image, index) => (
            <a
              key={index}
              href={image.src}
              className='img-gallery w-auto inline-block relative overflow-hidden'
            >
              <img
                className='lg:w-[283px] md:w-[283px] inline-block m-1 rounded-lg'
                src={image.src}
                alt={`Image ${index + 1}`}
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </div>
  );
};

export default Gallery;
