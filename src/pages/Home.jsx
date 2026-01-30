import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';

const Home = () => {
    const containerRef = useRef(null);
    const headlineRef = useRef(null);
    const subheadRef = useRef(null);
    const ctaRef = useRef(null);
    const decorationsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(headlineRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            })
                .from(subheadRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=0.8");


            // Floating decorations
            decorationsRef.current.forEach((el, i) => {
                gsap.to(el, {
                    y: -20,
                    rotation: i % 2 === 0 ? 10 : -10,
                    duration: 2 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.5
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="page-container" style={{ justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Background Decorations */}
            <div ref={el => decorationsRef.current[0] = el} style={{ position: 'absolute', top: '20%', left: '10%', fontSize: '4rem', opacity: 0.2 }}>🍓</div>
            <div ref={el => decorationsRef.current[1] = el} style={{ position: 'absolute', top: '15%', right: '15%', fontSize: '5rem', opacity: 0.2 }}>☁️</div>
            <div ref={el => decorationsRef.current[2] = el} style={{ position: 'absolute', bottom: '20%', left: '15%', fontSize: '3rem', opacity: 0.2 }}>✨</div>
            <div ref={el => decorationsRef.current[3] = el} style={{ position: 'absolute', bottom: '25%', right: '10%', fontSize: '4rem', opacity: 0.2 }}>📸</div>

            <h1 ref={headlineRef} style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>
                Welcome to <span style={{ color: 'var(--accent)' }}>HelloBit</span>
            </h1>
            <p ref={subheadRef} style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', color: 'var(--text-soft)' }}>
                The cutest way to capture your moments.
                Snap, customize, and share the magic instantly!
            </p>

            <MagneticButton>
                <Link
                    to="/frame"
                    ref={ctaRef}
                    className="btn"
                    style={{
                        fontSize: '1.5rem',
                        padding: '1.2rem 3.5rem',
                        borderRadius: '60px',
                        boxShadow: '0 10px 30px rgba(255, 111, 145, 0.5)'
                    }}
                >
                    Mulai Sekarang
                </Link>
            </MagneticButton>
        </div>
    );
};

export default Home;
