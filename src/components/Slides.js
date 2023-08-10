import React, { useState } from 'react';

function Slides({ slides }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const currentSlide = slides[currentSlideIndex];

    const goToPrevSlide = () => {
        setCurrentSlideIndex(Math.max(currentSlideIndex - 1, 0));
    };

    const goToNextSlide = () => {
        setCurrentSlideIndex(Math.min(currentSlideIndex + 1, slides.length - 1));
    };

    const restartSlideshow = () => {
        setCurrentSlideIndex(0);
    };

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={restartSlideshow} className="small outlined" data-testid="button-restart" disabled={currentSlideIndex === 0}>Restart</button>
                <button onClick={goToPrevSlide} className="small" data-testid="button-prev" disabled={currentSlideIndex === 0}>Prev</button>
                <button onClick={goToNextSlide} className="small" data-testid="button-next" disabled={currentSlideIndex === slides.length - 1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{currentSlide.title}</h1>
                <p data-testid="text">{currentSlide.text}</p>
            </div>
        </div>
    );
}

export default Slides;
