import React, { useEffect, useState, useRef } from 'react'

const Carousel = () => {
    const [images, setImages] = useState([])
    const arrowRef1 = useRef();
    const arrowRef2 = useRef();

    useEffect(() => {
        const startingImages = [
            <div className='div-image1' key={1}></div>,
            <div className='div-image2' key={2}></div>
        ]
        setImages(startingImages);
    }, [])

    const slideInArrows = () => {
        const arrow1 = arrowRef1.current;
        const arrow2 = arrowRef2.current;
        arrow1.classList.remove('next-button-hidden');
        arrow2.classList.remove('prev-button-hidden');
        arrow1.classList.add('next-button');
        arrow2.classList.add('prev-button');

    }

    const hideSlideArrows = () => {
        const arrow1 = arrowRef1.current;
        const arrow2 = arrowRef2.current;
        arrow1.classList.remove('next-button');
        arrow2.classList.remove('prev-button');
        arrow1.classList.add('next-button-hidden');
        arrow2.classList.add('prev-button-hidden');
    }

    return (
        <div className='carousel-wrapper'>
            <div className='carousel-container' onMouseOver={slideInArrows} onMouseLeave={hideSlideArrows}>
                {images}
                <i className="far fa-caret-square-right next-button-hidden" ref={arrowRef1}></i>
                <i className="far fa-caret-square-right prev-button-hidden" ref={arrowRef2}></i>
            </div>
        </div>
    )
}

export default Carousel;