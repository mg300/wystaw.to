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
                <div id="advertisingBar">
                    <p>Specjalna oferta! Kup teraz i oszczędź!</p>
                    <button id="closeAdvertisingBar" onClick={handleCloseBanner}>
                        Zamknij
                    </button>
                </div>
            )}
        </>
    );
};

export default AdvertisingBar;
