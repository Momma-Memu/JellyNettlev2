import React, { useEffect, useState, useRef } from 'react'

const Carousel = () => {
    const [images, setImages] = useState([])
    const [position, setPosition] = useState(0)
    const arrowRef1 = useRef();
    const arrowRef2 = useRef();
    const imageRef1 = useRef();
    const imageRef2 = useRef();
    const imageRef3 = useRef();


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

    console.log(images)

    useEffect(() => {
        const startingImages = [
            <div className='div-image1' key={1} ref={imageRef1}>
                <div className='image-banner'>Build your own teams.</div></div>,
            <div className='div-image2' key={2} ref={imageRef2}>
                <div className='image-banner2'>Join groups related to your interests.</div></div>,
            <div className='div-image3' key={3} ref={imageRef3}>
                <div className='image-banner2'>Create a commmunity for your system.</div></div>
        ]
        setImages(startingImages);
    }, [])

    const rotateRight = () => {
        const image1 = imageRef1.current;
        const image2 = imageRef2.current;
        const image3 = imageRef3.current;

        [image1, image2, image3].forEach((el) => {
            const left = el.style.left;
            if(!left || left === '0px') el.style.left = '-100%';
            if(left === '-100%') el.style.left = '-200%'
            if(left === '-200%') el.style.left = '0px'
        })

    }

    const rotateLeft = () => {
        const image1 = imageRef1.current;
        const image2 = imageRef2.current;
        const image3 = imageRef3.current;

        [image1, image2, image3].forEach((el) => {
            const left = el.style.left;
            if(!left || left === '0px') el.style.left = '-200%';
            if(left === '-100%') el.style.left = '0px';
            if(left === '-200%') el.style.left = '-100%';
        })

    }

    return (
        <div className='carousel-wrapper' onMouseOver={slideInArrows} onMouseLeave={hideSlideArrows}>
            <i className="far fa-caret-square-right prev-button-hidden" ref={arrowRef2} onClick={rotateLeft}></i>
                <div className='carousel-container'>
                    {images}
                </div>
            <i className="far fa-caret-square-left next-button-hidden" ref={arrowRef1} onClick={rotateRight}></i>
        </div>
    )
}

export default Carousel;
