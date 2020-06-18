import React from 'react'

import { Images } from '../../shared/Images';

import './styles.scss'; 

const PhotosGrid = () => {

    return (
        <div className="gallery-grid" data-test="GalleryGrid">
            {Images.map(img => (
                <div className="img-wrapper" key={img.id}>
                    <img src={img.src} alt={img.alt} />
                </div>
            ))}
        </div>
    )
}

export default PhotosGrid;
