import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import html2canvas from 'html2canvas';
import { useLayout } from '../context/LayoutContext';

const Preview = () => {
    const { photos, selectedLayout } = useLayout();
    const resultRef = useRef(null);
    const containerRef = useRef(null);
    const [customText, setCustomText] = useState('HelloBit');
    const [selectedTemplate, setSelectedTemplate] = useState('default');
    const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 600);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
        );
    }, []);

    const handleDownload = async () => {
        if (!resultRef.current) return;

        try {
            const canvas = await html2canvas(resultRef.current, { scale: 2, useCORS: true });
            const link = document.createElement('a');
            link.download = `photobooth-${Date.now()}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (err) {
            console.error("Download failed", err);
        }
    };

    const templates = {
        'default': {
            name: 'Default',
            bg: '#FFFFFF',
            border: '#FFB7C5',
            shadow: '0 25px 80px rgba(255, 183, 197, 0.35)',
            text: '#333',
            font: 'monospace',
            filter: 'none'
        },
        'midnight': {
            name: 'Midnight',
            bg: '#1A1A2E',
            border: '#F4D03F', // Gold
            shadow: '0 25px 80px rgba(26, 26, 46, 0.5)',
            text: '#F4D03F',
            font: 'Times New Roman, serif',
            filter: 'contrast(1.1) brightness(1.1)'
        },
        'bw': {
            name: 'Classic B&W',
            bg: '#111',
            border: '#FFF',
            shadow: '0 25px 80px rgba(0,0,0,0.5)',
            text: '#FFF',
            font: 'Courier New, monospace',
            filter: 'grayscale(100%) contrast(1.2)'
        },
        'vintage': {
            name: 'Vintage',
            bg: '#F4E1D2', // Sepia
            border: '#8D6E63', // Brown
            shadow: '0 25px 80px rgba(141, 110, 99, 0.4)',
            text: '#5D4037',
            font: 'Courier New, monospace',
            filter: 'sepia(0.6) contrast(1.1) brightness(0.9)'
        },
        'golden': {
            name: 'Golden',
            bg: '#FFF8E1',
            border: '#FFD54F',
            shadow: '0 25px 80px rgba(255, 213, 79, 0.4)',
            text: '#FF6F00',
            font: 'Georgia, serif',
            filter: 'saturate(1.5) contrast(1.1) brightness(1.05)'
        },
        'cool': {
            name: 'Cool Mint',
            bg: '#E0F7FA',
            border: '#4DD0E1',
            shadow: '0 25px 80px rgba(77, 208, 225, 0.4)',
            text: '#006064',
            font: 'Verdana, sans-serif',
            filter: 'hue-rotate(180deg) opacity(0.9)' // Funky cool effect
        },
        'cyber': {
            name: 'Cyber',
            bg: '#000',
            border: '#00FF00', // Neon Green
            shadow: '0 0 30px #00FF00',
            text: '#00FF00',
            font: 'Courier New, monospace',
            filter: 'contrast(1.5) saturate(1.5)'
        }
    };

    // Layout configuration for rendering
    const getContinuousStyle = () => {
        const template = templates[selectedTemplate];
        const base = {
            background: template.bg,
            padding: '20px',
            borderRadius: '16px',
            border: `4px solid ${template.border}`,
            boxShadow: template.shadow,
            transform: 'translateZ(0)' // Force GPU rendering
        };

        switch (selectedLayout) {
            case 'classic':
                return { ...base, width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '10px' };
            case 'wide':
                return { ...base, width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '10px' };
            case 'polaroid':
                return {
                    ...base,
                    width: '100%',
                    maxWidth: isMobile ? '240px' : '400px', // Smaller on mobile to fit height
                    paddingBottom: isMobile ? '40px' : '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '0.5rem' : '1rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                };
            case 'strip3':
                return {
                    ...base,
                    width: '100%',
                    maxWidth: isMobile ? '160px' : '300px', // Drastically reduced for mobile height fit
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                };
            case 'strip4':
                return {
                    ...base,
                    width: '100%',
                    maxWidth: isMobile ? '160px' : '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                };
            case 'grid2x2':
                return {
                    ...base,
                    width: '100%',
                    maxWidth: '600px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    aspectRatio: '1/1'
                };
            case 'grid2x3':
                return {
                    ...base,
                    width: '100%',
                    maxWidth: '600px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    aspectRatio: '2/3'
                };
            case 'duo':
                return {
                    ...base,
                    width: '100%',
                    maxWidth: '600px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px'
                };
            default:
                return { ...base, width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '10px' };
        }
    };

    const continuousStyle = getContinuousStyle();
    const currentTemplate = templates[selectedTemplate];

    if (photos.length === 0) {
        return (
            <div className="page-container">
                <h2>No photos taken</h2>
                <Link to="/frame" className="btn">Start Over</Link>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="page-container" style={{ justifyContent: 'flex-start', paddingTop: '2rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Your Photos</h2>

            {/* Customization Controls */}
            <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '600px' }}>
                <input
                    type="text"
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    placeholder="Enter custom text..."
                    style={{
                        padding: '0.8rem 1.5rem',
                        borderRadius: '30px',
                        border: '2px solid var(--secondary)',
                        fontSize: '1rem',
                        width: '100%',
                        textAlign: 'center',
                        outline: 'none'
                    }}
                />
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {Object.entries(templates).map(([key, t]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedTemplate(key)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                border: selectedTemplate === key ? `2px solid ${t.border}` : '1px solid #ddd',
                                background: t.bg,
                                color: t.text,
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                boxShadow: selectedTemplate === key ? '0 4px 10px rgba(0,0,0,0.1)' : 'none',
                                transform: selectedTemplate === key ? 'scale(1.05)' : 'scale(1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            {t.name}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ overflow: 'auto', maxHeight: '70vh', padding: '1rem', marginBottom: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div ref={resultRef} style={{ ...continuousStyle, opacity: 1, filter: 'none' }}>
                    {photos.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Shot ${idx + 1}`}
                            style={{
                                width: '100%',
                                height: (selectedLayout === 'grid2x2' || selectedLayout === 'grid2x3') ? '100%' : 'auto',
                                objectFit: 'cover',
                                display: 'block',
                                filter: currentTemplate.filter || 'none'
                            }}
                        />
                    ))}
                    <div style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        fontFamily: currentTemplate.font,
                        color: currentTemplate.text,
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        gridColumn: (selectedLayout === 'grid2x2' || selectedLayout === 'grid2x3' || selectedLayout === 'duo') ? 'span 2' : 'auto'
                    }}>
                        {customText}
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button className="btn" onClick={handleDownload}>Download</button>
                <Link to="/" className="btn" style={{ background: '#444' }}>Home</Link>
            </div>
        </div>
    );
};

export default Preview;
