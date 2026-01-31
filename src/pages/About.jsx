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
                        <a href="https://instagram.com/errdhikaa" target="_blank" rel="noreferrer" className="btn" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', boxShadow: '0 4px 15px rgba(220, 39, 67, 0.4)', fontSize: '1rem', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            @errdhikaa
                        </a>
                        <a href="https://tiktok.com/@hellobit__" target="_blank" rel="noreferrer" className="btn" style={{ background: 'black', boxShadow: '0 4px 15px rgba(0,0,0,0.3)', fontSize: '1rem', padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                            </svg>
                            @hellobit__
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
