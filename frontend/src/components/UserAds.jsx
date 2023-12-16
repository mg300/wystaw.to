// components/UserAds.jsx
import React, { useState } from 'react';
import './UserAds.css';

const UserAds = () => {
    const [userAds, setUserAds] = useState([
        { id: 1, title: 'nr ogłoszenia 77788917', description: 'Suszarka Panasonic' },
        { id: 2, title: 'nr ogłoszenia 77788918', description: 'IPhone 13 pro' },
        { id: 3, title: 'nr ogłoszenia 77788919', description: 'IPhone 12' },
    ]);

    const handleDelete = (id) => {
        // Logika usuwania ogłoszenia
        setUserAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
    };

    const handleEdit = (id) => {
        // Logika edycji ogłoszenia
        console.log(`Edytuj ogłoszenie o id: ${id}`);
    };

    return (
        <div className="user-ads-container">
            <h2>Twoje Ogłoszenia</h2>
            {userAds.length > 0 ? (
                userAds.map((ad) => (
                    <div key={ad.id} className="ad-container">
                        <h3 className="ad-title">{ad.title}</h3>
                        <p className="ad-description">{ad.description}</p>
                        <button className="edit-button" onClick={() => handleEdit(ad.id)}>
                            Edytuj
                        </button>
                        <button className="delete-button" onClick={() => handleDelete(ad.id)}>
                            Usuń
                        </button>
                    </div>
                ))
            ) : (
                <p>Nie masz żadnych aktywnych ogłoszeń.</p>
            )}
        </div>
    );
};

export default UserAds;
