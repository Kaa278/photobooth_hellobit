import React from 'react';

const About = () => {
    return (
        <div className="page-container" style={{ justifyContent: 'flex-start', paddingTop: '2rem', height: 'auto', minHeight: '100%' }}>
            <div style={{
                width: '100%',
                maxWidth: '800px',
                textAlign: 'left',
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(10px)',
                padding: '2rem 1.5rem', // Responsive padding
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                marginBottom: '4rem' // Space for bottom scrolling
            }}>
                <h1 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2.5rem' }}>About HelloBit ✨</h1>

                <h3 style={{ color: 'var(--accent)', fontSize: '1.4rem' }}>What is HelloBit?</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-soft)', fontSize: '1rem' }}>
                    HelloBit is a modern web-based photobooth designed to bring the fun of instant photography to your browser.
                    No app download needed—just smile, snap, and share!
                </p>

                <h3 style={{ color: 'var(--accent)', fontSize: '1.4rem' }}>Meet the Developer</h3>
                <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', color: 'var(--text-soft)', fontSize: '1rem' }}>
                    Hi! I'm the developer behind HelloBit. I built this to share my love for fun, interactive web experiences.
                    Hope you enjoy snapping some pics!
                </p>

                <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--accent)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>Let's Connect! 💖</h3>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://instagram.com/errdhikaa" target="_blank" rel="noreferrer" className="btn" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', boxShadow: '0 4px 15px rgba(220, 39, 67, 0.4)', fontSize: '1rem', padding: '0.8rem 1.5rem' }}>
                            📸 @errdhikaa
                        </a>
                        <a href="https://tiktok.com/@hellobit__" target="_blank" rel="noreferrer" className="btn" style={{ background: 'black', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', fontSize: '1rem', padding: '0.8rem 1.5rem' }}>
                            🎵 @hellobit__
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
