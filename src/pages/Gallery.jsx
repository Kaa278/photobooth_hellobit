import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <div className="page-container">
            <div style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '24px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                maxWidth: '500px'
            }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>Gallery Access</h2>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔒</div>
                <p style={{ color: 'var(--text-soft)', marginBottom: '2rem' }}>
                    To view your photo history and the public gallery, please log in or create an account.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button className="btn" style={{ padding: '0.8rem 2rem' }}>Log In</button>
                    <button className="btn" style={{ background: '#eee', color: '#333' }}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
