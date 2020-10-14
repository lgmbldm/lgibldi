import React, { useState } from 'react';

import './App.css';

function App() {
    
    const [text, setText] = useState("let's go mills baby love da mills");
    
    const getInitialism = () => {
        return text.replace(/\n/g, " ").split(" ").map(word => word.match(/(^[\d\./]+\w?%?)|(^[\w])/g)).join("").toUpperCase();
    };
    
    return (
        <div>
            <textarea value={text} onChange={e => setText(e.target.value)} />
            <h1>{getInitialism()}</h1>
        </div>
        
    );
}

export default App;
