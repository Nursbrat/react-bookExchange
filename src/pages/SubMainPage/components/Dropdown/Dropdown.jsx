import '../Dropdown/DropDown.scss';

import React, { useState } from 'react';

import images from '../../../../constants/images';

const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown__toggle__btn" onClick={handleToggleDropdown}>
                {options.name}
                <img src={images.caret} alt="" className={`${isOpen ? 'rotated' : ''}`} />
            </div>
            <div className="dropdown__list">
                <ul className={`dropdown__items ${isOpen ? 'open' : ''}`}>
                    {options.options.map((option, index) => (
                        <li
                            key={index}
                            className={`dropdown__item ${selectedOption === option ? 'active' : ''} `}
                            onClick={() => handleOptionSelect(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
