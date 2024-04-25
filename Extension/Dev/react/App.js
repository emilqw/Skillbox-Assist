import React from 'react';
import {Button} from "@mui/material";

function App() {
    const onClick = () => {
        alert("Hello World!");
    }
    return <div>
        Привет мир
        <Button variant="text" onClick={onClick}>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </div>;
}

export default App;
