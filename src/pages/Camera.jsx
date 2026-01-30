import React, { useState, useRef, useEffect, useCallback } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useLayout } from '../context/LayoutContext';

const Camera = () => {
    const webcamRef = useRef(null);
    const { selectedLayout, setPhotos } = useLayout();
    const navigate = useNavigate();

    const [countdown, setCountdown] = useState(null);
    const [capturedImages, setCapturedImages] = useState([]);
    const [flash, setFlash] = useState(false);
    const [isCapturing, setIsCapturing] = useState(false);

    const countdownRef = useRef(null);

    // Determine config based on layout
    // Determine config based on layout
    const config = {
        'classic': { shots: 1 },
        'wide': { shots: 1 },
        'polaroid': { shots: 1 },
        'strip3': { shots: 3 },
        'strip4': { shots: 4 },
        'grid2x2': { shots: 4 },
        'grid2x3': { shots: 6 },
        'duo': { shots: 2 }
    }[selectedLayout] || { shots: 1 };

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
            setFlash(true);
            setTimeout(() => setFlash(false), 100); // Quick flash

            // Add to local state first
            setCapturedImages(prev => {
                const newImages = [...prev, imageSrc];
                // Check if done
                if (newImages.length === config.shots) {
                    // Slight delay before moving to preview
                    setTimeout(() => {
                        setPhotos(newImages);
                        navigate('/preview');
                    }, 500);
                } else {
                    // Schedule next shot
                    setTimeout(() => startCountdown(), 1000);
                }
                return newImages;
            });
        }
    }, [config.shots, navigate, setPhotos]);

    const [delay, setDelay] = useState(3); // Default 3s

    const startCountdown = () => {
        setCountdown(delay);
    };

    const startSequence = () => {
        setCapturedImages([]); // Reset
        setIsCapturing(true);
        startCountdown();
    };

    // Countdown logic
    useEffect(() => {
        if (countdown === null) return;

        // Animate countdown number
        if (countdownRef.current) {
            gsap.fromTo(countdownRef.current,
                { scale: 0.5, opacity: 0 },
                { scale: 1.5, opacity: 1, duration: 0.5, ease: "back.out(2)" }
            );
        }

        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else if (countdown === 0) {
            capture();
            setCountdown(null);
        }
    }, [countdown, capture]);

    return (
        <div className="page-container" style={{ position: 'relative', overflow: 'hidden' }}>
            {flash && (
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'white', zIndex: 100, opacity: 0.8
                }} />
            )}

            <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '640px',
                aspectRatio: '4/3',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                border: '4px solid rgba(255,255,255,0.2)'
            }}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    videoConstraints={{ facingMode: "user", width: 1280, height: 720 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scaleX(-1)' }} // Mirror
                />

                {countdown !== null && (
                    <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '8rem', fontWeight: 'bold', color: 'white',
                        textShadow: '0 4px 10px rgba(0,0,0,0.5)',
                        zIndex: 10
                    }}>
                        <span ref={countdownRef}>{countdown === 0 ? 'SMILE!' : countdown}</span>
                    </div>
                )}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                {!isCapturing ? (
                    <>
                        {/* Delay Selection */}
                        <div style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,0.5)', padding: '0.5rem', borderRadius: '50px' }}>
                            {[3, 5, 10].map(s => (
                                <button
                                    key={s}
                                    onClick={() => setDelay(s)}
                                    style={{
                                        background: delay === s ? 'var(--primary)' : 'transparent',
                                        color: delay === s ? 'white' : 'var(--text-main)',
                                        border: 'none',
                                        padding: '0.5rem 1.2rem',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {s}s
                                </button>
                            ))}
                        </div>

                        <button className="btn" onClick={startSequence} style={{ fontSize: '1.5rem', padding: '1rem 3rem' }}>
                            Start Capture
                        </button>
                    </>
                ) : (
                    <div style={{ color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Capturing {capturedImages.length + 1} / {config.shots}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Camera;
