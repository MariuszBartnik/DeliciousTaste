import React from 'react';
import './styles.scss'

export default function Footer() {    
    return (
        <footer>
            <div className="container">
                <div className="copy">
                    Mariusz Bartnik &copy; 2020
                </div>
                <div className="author-info">
                    <div className="info-detail">
                        <h5>Website</h5>
                        <a href="mariusz-bartnik.firebaseapp.com">mariusz-bartnik@firebaseapp.com</a>
                    </div>
                    <div className="info-detail">
                        <h5>Email</h5>
                        <a href="mailto:mariuszbartnik@gmail.com">mariuszbartnik@gmail.com</a>
                    </div>
                    <div className="info-detail">
                        <h5>Phone</h5>
                        <a href="tel:+48531986590">+48 531 986 590</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}