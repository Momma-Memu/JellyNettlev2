import { useRef, useEffect } from 'react';

const About = () => {
    const ref = useRef(document.getElementById('root'))
    // const [scrollValue, setScrollValue] = useState(0);

    const slide = () => {
        console.log(ref.current.scrollTop)
    }

    useEffect(() => {
        console.log(ref.current)
        console.log(ref.current.scrollTop)
        ref.current.onscroll = slide;
    }, [])


    return (
        <div className='any-system'>
            <i className="fab fa-steam steam"></i>
            <i className="fab fa-xbox xbox"></i>
            <i className="fab fa-playstation ps"></i>
        </div>
    )
}

export default About;