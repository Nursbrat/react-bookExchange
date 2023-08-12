import '../Dropdowns/Dropdowns.scss';

import React from 'react';

import Dropdown from '../DropDown/DropDown';

const Dropdowns = () => {
    const genres = {
        options: ['Option 1A', 'Option 1B', 'Option 1C'],
        name: 'Жанр'
    };
    const languages = {
        options: ['Option 1A', 'Option 1B', 'Option 1C'],
        name: 'Язык'
    }
    const conditions = {
        options: ['Option 1A', 'Option 1B', 'Option 1C'],
        name: 'Состояние'
    }
    return (
        <div className="dropdowns">
            <div className="container">
                <div className="dropdowns__content">
                    <Dropdown options={genres} />
                    <Dropdown options={languages} />
                    <Dropdown options={conditions} />
                </div>
            </div>
        </div>

    );
}

export default Dropdowns
