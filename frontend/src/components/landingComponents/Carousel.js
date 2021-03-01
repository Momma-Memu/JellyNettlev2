import React, { useEffect, useState } from 'react'
// import img1 from '../../images/desk-stuff.jpg';

const Carousel = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        const startingImages = [
            <div className='div-image1'></div>,
            <div className='div-image2'></div>
        ]
        setImages(startingImages);
    }, [])

    return (
        <div className='carousel-wrapper'>
            <div className='carousel-container'>
                {images}
                <i className="fas fa-arrow-circle-right next-button"></i>
                <i className="fas fa-arrow-circle-right prev-button"></i>
            </div>
        </div>
    )
}

export default Carousel;