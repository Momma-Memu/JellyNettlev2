import React, { useEffect, useState, useRef } from 'react'

const Carousel = () => {
    const [images, setImages] = useState([])
    const arrowRef1 = useRef();
    const arrowRef2 = useRef();


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

    useEffect(() => {
        const startingImages = [
            <div className='div-image1' key={1}>
                <div className='image-banner'>Build your own teams.</div></div>,
            <div className='div-image2' key={2} onMouseOver={slideInArrows} onMouseLeave={hideSlideArrows}>
                <div className='image-banner2'>Find people on your system.</div></div>
        ]
        setImages(startingImages);
    }, [])

    // const rotateRight = () => {
        //     const copy = images.slice();
    //     const removed = copy.shift();
    //     copy.push(removed);
    //     setImages(copy);

    // }

    return (
        <div className='carousel-wrapper' onMouseOver={slideInArrows} onMouseLeave={hideSlideArrows}>
            <i className="far fa-caret-square-right prev-button-hidden" ref={arrowRef2}></i>
                <div className='carousel-container'>
                    {images}
                </div>
            <i className="far fa-caret-square-left next-button-hidden" ref={arrowRef1}></i>
        </div>
    )
}

export default Carousel;
