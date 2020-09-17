import React, {useEffect} from 'react'
import { gsap } from 'gsap';

import './styles.scss';

const Loader = ({ theme }) => {

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to('.loading', {
            height: 50, 
            marginTop: 0, 
            duration: .5, 
            backgroundColor: '#37ECCB', 
            ease: 'none', 
            stagger: .1
        });
        tl.to('.loading', {
            height: 0, 
            marginTop: 50, 
            duration: .5, 
            backgroundColor: (theme === 'dark-theme') ? '#FFF' : '#37ECCB', 
            ease: 'none', 
            stagger: .1
        }, "-=.5");
    })

    return (
        <div className="loader-wrapper">
            <div className={`loading ${theme}`} />
            <div className={`loading ${theme}`} />
            <div className={`loading ${theme}`} />
            <div className={`loading ${theme}`} />
            <div className={`loading ${theme}`} />
            <div className={`loading ${theme}`} />

        </div>
    )
}

export default Loader
