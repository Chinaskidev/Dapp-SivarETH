import React from 'react';
import { ResponsiveNavbar, MainContent } from './components/smile';

function App() {
    return (
        <div style={{ padding: '2rem',background: '#f0f0f0'}}>
            <ResponsiveNavbar />
            <MainContent />
        </div>
    );
}

export default App;