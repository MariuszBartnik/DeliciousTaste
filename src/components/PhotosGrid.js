import React from 'react'

import styled, {keyframes} from 'styled-components';
import { Images } from '../shared/Images';

// const animate = keyframes`
//     0%{
//         opacity: 0;
//     }

//     50%{
//         opacity: .5;
//         transform: translateX(100px)
//             rotateZ(-10deg) 
//             rotateX(10deg) 
//             rotateY(5deg)
//             perspective(200px);
//     }

//     100%{
//         opacity 1;
//         transform: perspective(400px) 
//                    rotateZ(-20deg) 
//                    rotateX(20deg) 
//                    rotateY(10deg);
//     }
// `;

const GalleryGrid = styled.div`
    height: 80%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
`;

const ImgWrapper = styled.div`
    flex: 1 0 30%;
    margin: 1%;
`;

const Image = styled.img`
    width: 100%;
`;

const PhotosGrid = () => {

    return (
        <GalleryGrid>
            {Images.map(img => (
                <ImgWrapper key={img.id}>
                    <Image src={img.src} alt={img.alt} />
                </ImgWrapper>
            ))}
        </GalleryGrid>
    )
}

export default PhotosGrid
