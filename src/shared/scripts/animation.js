import { gsap } from 'gsap';

export const animate = (imageDiv, galleryDiv) => {
    const tl = gsap.timeline();
    tl.from(imageDiv, {
        opacity: 0,
        translateX: -100,
        duration: 1.5,
        stagger: .4,
        ease: 'back'
    });
    tl.to(galleryDiv, {
        translateX: 100,
        rotateZ: -10, 
        rotateX: 10, 
        rotateY: 5,
        scale: .9,
        transformPerspective: 900,
        duration: 1.5,
        ease: 'power1'
    }, '-=.1');
    tl.to(galleryDiv, {
        translateX: 0,
        rotateZ: -20, 
        rotateX: 20, 
        rotateY: 10,
        scale: .8,
        transformPerspective: 800,
        duration: 2,
        ease: 'none'
    }, '-=.1');
}
