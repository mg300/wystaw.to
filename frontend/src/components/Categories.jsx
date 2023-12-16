// components/Categories.jsx
import React from 'react';
import { Button } from '@mui/material';
import motoryzacjaIcon from '../images/motoryzacja.png';
import nieruchomosciIcon from '../images/nieruchomosci.png';
import elektronikaIcon from '../images/elektronika.png';
import modaIcon from '../images/moda.png';
import zwierzetaIcon from '../images/zwierzeta.png';

import './Categories.css'; // Zaimportuj plik ze stylami CSS

const Categories = ({ handleCategoryClick }) => {
    const categories = [
        { name: 'Motoryzacja', icon: motoryzacjaIcon },
        { name: 'Nieruchomości', icon: nieruchomosciIcon },
        { name: 'Elektronika', icon: elektronikaIcon },
        { name: 'Moda', icon: modaIcon },
        { name: 'Zwierzęta', icon: zwierzetaIcon },
    ];

    return (
        <div id="categories">
            {categories.map((category, index) => (
                <Button
                    key={index}
                    variant="contained"
                    color="primary"
                    onClick={() => handleCategoryClick(category.name)}
                >
                    <img
                        src={category.icon}
                        alt={category.name}
                        className="category-icon"
                    />
                    {category.name}
                </Button>
            ))}
        </div>
    );
};

export default Categories;
