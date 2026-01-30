import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
    const [selectedLayout, setSelectedLayout] = useState('grid');
    const [photos, setPhotos] = useState([]);

    // Layouts: 'single', 'strip', 'grid'

    return (
        <LayoutContext.Provider value={{ selectedLayout, setSelectedLayout, photos, setPhotos }}>
            {children}
        </LayoutContext.Provider>
    );
};
