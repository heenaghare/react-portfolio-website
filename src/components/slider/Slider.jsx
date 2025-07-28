import React from 'react';
import './slider.css';

const slides = [
    {
        eachSlide: '/iphone.jpg', // Relative path to the image in the public folder
        text: 'Welcome to our website', // Text for the first slide
    },
    {
        eachSlide: '/pen.jpg', // Relative path to the image in the public folder
        text: 'Discover our products', // Text for the second slide
    },
    {
        eachSlide: '/startup.jpg', // Relative path to the image in the public folder
        text: 'Join us and start your journey', // Text for the third slide
    },
    // Add more slides as needed
];

const Slider = () => {
    const [active, setActive] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(false);
    const max = slides.length;

    const intervalBetweenSlides = () => autoplay && setActive(active === max - 1 ? 0 : active + 1);

    React.useEffect(() => {
        const interval = setInterval(() => intervalBetweenSlides(), 3000);
        return () => clearInterval(interval);
    });

    const toggleAutoPlay = () => setAutoplay(!autoplay);

    const nextOne = () => active < max - 1 && setActive(active + 1);

    const prevOne = () => active > 0 && setActive(active - 1);

    const isActive = value => active === value && 'active';

    const setSliderStyles = () => {
        const transition = active * -100;
        return {
            width: `${slides.length * 100}vw`,
            transform: `translateX(${transition}vw)`
        };
    };

    const renderSlides = () => slides.map((item, index) => (
        <div
            className={`each-slide ${isActive(index)}`}
            key={index}
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${item.eachSlide})` }}>
            <div className="slide-text">{item.text}</div>
        </div>
    ));

    const renderDots = () => slides.map((_, index) => (
        <li
            className={`${isActive(index)} dots`}
            key={index}>
            <button onClick={() => setActive(index)}>
                <span>&#9679;</span>
            </button>
        </li>
    ));

    const renderPlayStop = () => (
        <button
            type='button'
            className='toggle-play'
            onClick={toggleAutoPlay}>
            {autoplay ? 'Pause' : 'Play'}
        </button>
    );

    const renderArrows = () => (
        <React.Fragment>
            <button
                type='button'
                className='arrows prev'
                onClick={() => prevOne()}>
                
            </button>
            <button
                type='button'
                className='arrows next'
                onClick={() => nextOne()}>
                
            </button>
        </React.Fragment>
    );

    return (
        <section className='slider'>
            <div
                className='wrapper'
                style={setSliderStyles()}>
                {renderSlides()}
            </div>
            {renderArrows()}
            <ul className='dots-container'>
                {renderDots()}
            </ul>
            {renderPlayStop()}
        </section>
    );
};

export default Slider;