import React, {useEffect} from 'react'
import { Images } from '../../shared/Images';

import { animate }  from '../../shared/scripts/animation';
import './styles.scss'; 

const PhotosGrid = () => {

    useEffect(() => {
        animate('.img-wrapper', '.gallery-grid');
    })
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
