import React, { useState } from 'react';
import './AdvertisingBar.css';

const AdvertisingBar = () => {
    const [isBannerVisible, setIsBannerVisible] = useState(true);

    const handleCloseBanner = () => {
        setIsBannerVisible(false);
    };

    return (
        <>
            {isBannerVisible && (
                <div id="advertisingBar" className="fade-in">
                    <p>Specjalna oferta! Dodanie ogłoszenia za darmo do końca roku!</p>
                    <button id="closeAdvertisingBar" onClick={handleCloseBanner} className="close-button">
                        Zamknij
                    </button>
                </div>
            )}
        </>
    );
};

export default AdvertisingBar;
