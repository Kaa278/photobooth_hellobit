import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useLayout } from '../context/LayoutContext';

const LayoutIcon = ({ type }) => {
    const style = {
        width: '80px',
        height: '80px',
        border: '2px solid var(--text-main)',
        borderRadius: '8px',
        background: '#fff',
        margin: '0 auto 1.5rem auto',
        display: 'flex',
        overflow: 'hidden',
    };

    const blockStyle = { background: 'var(--bg-soft)', borderRadius: '2px' };

    switch (type) {
        case 'classic': // Single
            return (
                <div style={{ ...style, padding: '8px' }}>
                    <div style={{ ...blockStyle, width: '100%', height: '100%' }}></div>
                </div>
            );
        case 'wide': // 16:9
            return (
                <div style={{ ...style, padding: '15px 4px', alignItems: 'center' }}>
                    <div style={{ ...blockStyle, width: '100%', height: '40px' }}></div>
                </div>
            );
        case 'polaroid': // Square + Bottom
            return (
                <div style={{ ...style, flexDirection: 'column', padding: '6px' }}>
                    <div style={{ ...blockStyle, width: '100%', height: '55px', marginBottom: '8px' }}></div>
                    <div style={{ width: '100%', height: '10px' }}></div>
                </div>
            );
        case 'strip3': // 3 Vertical
            return (
                <div style={{ ...style, width: '40px', flexDirection: 'column', padding: '4px', gap: '4px' }}>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                </div>
            );
        case 'strip4': // 4 Vertical
            return (
                <div style={{ ...style, width: '35px', flexDirection: 'column', padding: '3px', gap: '3px' }}>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                    <div style={{ ...blockStyle, flex: 1 }}></div>
                </div>
            );
        case 'grid2x2': // 4 Grid
            return (
                <div style={{ ...style, flexWrap: 'wrap', padding: '4px', gap: '4px', alignContent: 'center' }}>
                    <div style={{ ...blockStyle, width: 'calc(50% - 2px)', height: 'calc(50% - 2px)' }}></div>
                    <div style={{ ...blockStyle, width: 'calc(50% - 2px)', height: 'calc(50% - 2px)' }}></div>
                    <div style={{ ...blockStyle, width: 'calc(50% - 2px)', height: 'calc(50% - 2px)' }}></div>
                    <div style={{ ...blockStyle, width: 'calc(50% - 2px)', height: 'calc(50% - 2px)' }}></div>
                </div>
            );
        case 'grid2x3': // 6 Grid
            return (
                <div style={{ ...style, flexWrap: 'wrap', padding: '3px', gap: '3px', alignContent: 'center' }}>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} style={{ ...blockStyle, width: 'calc(50% - 2px)', height: 'calc(33.3% - 2px)' }}></div>
                    ))}
                </div>
            );
        case 'duo': // 2 Horizontal
            return (
                <div style={{ ...style, padding: '4px', gap: '4px', alignItems: 'center' }}>
                    <div style={{ ...blockStyle, flex: 1, height: '60px' }}></div>
                    <div style={{ ...blockStyle, flex: 1, height: '60px' }}></div>
                </div>
            );
        default:
            return null;
    }
};

const frames = [
    { id: 'classic', label: 'Classic', type: 'classic', desc: 'Single Shot (4:3)' },
    { id: 'wide', label: 'Cinematic', type: 'wide', desc: 'Wide Angle (16:9)' },
    { id: 'polaroid', label: 'Polaroid', type: 'polaroid', desc: 'Retro Icon' },
    { id: 'strip3', label: 'Strip (3)', type: 'strip3', desc: 'Classic Trio' },
    { id: 'strip4', label: 'Strip (4)', type: 'strip4', desc: 'Long Story' },
    { id: 'grid2x2', label: 'Grid 2x2', type: 'grid2x2', desc: 'Four Square' },
    { id: 'grid2x3', label: 'Grid 2x3', type: 'grid2x3', desc: 'Six Pack' },
    { id: 'duo', label: 'Duo', type: 'duo', desc: 'Double Trouble' },
];

const SelectLayout = () => {
    const { setSelectedLayout } = useLayout();
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        // Removed animation to ensure instant visibility
    }, []);

    const handleSelect = (frameId) => {
        setSelectedLayout(frameId);
        // Navigate immediately without animation to prevent stuck states
        navigate('/camera');
    };

    return (
        <div ref={containerRef} className="page-container">
            <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>Choose Your Frame</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(145px, 1fr))', // Smaller min-width for 2 cols on mobile
                gap: '1rem', // Smaller gap
                width: '100%',
                maxWidth: '1000px', // Slightly narrower max-width for focus
                padding: '1rem', // Responsive padding
                justifyItems: 'center'
            }}>
                {frames.map((frame, index) => (
                    <div
                        key={frame.id}
                        onClick={() => handleSelect(frame.id)}
                        className="frame-card"
                        style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '24px',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // HIGH CONTRAST STYLE
                            border: '3px solid #ffb7c5', // Pink border ALWAYS visible
                            boxShadow: '0 10px 25px rgba(255, 183, 197, 0.3)', // Pink shadow to match
                            transition: 'all 0.2s ease-out',
                            transform: 'translateZ(0)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 183, 197, 0.5)';
                            // Border color remains the same
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 183, 197, 0.3)';
                        }}
                    >
                        <LayoutIcon type={frame.type} />
                        <h3 style={{ color: 'var(--text-main)', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>{frame.label}</h3>
                        <p style={{ margin: 0, color: 'var(--text-soft)', fontSize: '0.85rem' }}>{frame.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectLayout;
