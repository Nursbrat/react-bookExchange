import '../Books/Books.scss';

import images from '../../../../constants/images';
import { useSelector } from '@reduxjs/toolkit'


const Books = () => {

    // const dispatch = useDispatch()
    const isDarkMode = useSelector(state => state.darkMode)

    const books = [
        { img: images.book, title: 'Book Title 1' },
        { img: images.book, title: 'Book Title 2' },

    ]
    return (

        <div className="books">
            <div className="container">
                <div className={`'books__genere--text'${isDarkMode ? 'dark-mode' : ''}`}>Поэзия</div>
                <div className="books__content">
                    <div className="books__items">
                        {books.map((book, index) => (
                            <div key={index} className="books__item">
                                <img src={book.img} alt="" />
                                <p className={`'${isDarkMode ? 'dark-mode' : ''}`}>{book.title}</p>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books