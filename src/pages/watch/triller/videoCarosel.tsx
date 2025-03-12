import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style.css';
import { Slide } from 'react-awesome-reveal';

const VideoCarousel = ({ videos }: { videos: { triller: string; title?: string; subtitle?: string }[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
    const slidingRef = useRef(false);

    // Initialize video refs array
    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videos.length);
    }, [videos]);

    // Function to handle auto-slide
    const startAutoSlide = useCallback(() => {
        if (autoPlayTimerRef.current) {
            clearTimeout(autoPlayTimerRef.current);
        }

        if (!isPaused) {
            autoPlayTimerRef.current = setTimeout(() => {
                if (!slidingRef.current) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
                }
            }, 3000);
        }
    }, [isPaused, videos.length]);

    useEffect(() => {
        startAutoSlide();
        return () => {
            if (autoPlayTimerRef.current) {
                clearTimeout(autoPlayTimerRef.current);
            }
        };
    }, [currentIndex, startAutoSlide]);

    // Handle video playback when slide changes
    useEffect(() => {
        videoRefs.current.forEach((video) => video?.pause()); // Pause all videos before changing slides

        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) {
            currentVideo.currentTime = 0;
            if (!isPaused) {
                currentVideo.play().catch((error) => {
                    console.warn("Video play failed:", error);
                });
            }
        }

        slidingRef.current = true;
        setTimeout(() => (slidingRef.current = false), 600);
    }, [currentIndex, isPaused]);

    const nextSlide = useCallback(() => {
        if (!slidingRef.current) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }
    }, [videos.length]);

    const prevSlide = useCallback(() => {
        if (!slidingRef.current) {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
        }
    }, [videos.length]);

    const handleDotClick = useCallback(
        (index: number) => {
            if (index === currentIndex || slidingRef.current) return;
            setCurrentIndex(index);
        },
        [currentIndex]
    );

    // Handle mouse enter/leave to control video play/pause
    const handleMouseEnter = () => {
        setIsPaused(true);
        videoRefs.current[currentIndex]?.play().catch(() => {});
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
        videoRefs.current[currentIndex]?.pause();
    };

    return (
        <div className="video-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="carousel-container">
                {videos.map((videoItem, index) => (
                    <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}>
                        <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            src={videoItem.triller}
                            muted
                            loop
                            playsInline
                            className="carousel-video"
                        />
                        <div className="video-content">
                            <div className="container down-20">
                                <Slide direction="right">
                                    {videoItem.title && <h2 className="px20 upper-case lin-2 besley-bold my-col-5">{videoItem.title}</h2>}
                                </Slide>
                                <Slide direction="left">
                                    {videoItem.subtitle && <p className="video-subtitle down-2 px13 poppings-light my-col-12">{videoItem.subtitle}</p>}
                                </Slide>
                                <div className="my-mother down-5">
                                    <Slide direction="up">
                                        <a href="#more" className="button xs-px15 px12 alice besley-regular">Watch Video</a>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carousel-dots">
                {videos.map((_, index) => (
                    <button key={index} className={`carousel-dot ${index === currentIndex ? 'active' : ''}`} onClick={() => handleDotClick(index)} />
                ))}
            </div>

            <button className="carousel-nav prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-nav next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default VideoCarousel;
