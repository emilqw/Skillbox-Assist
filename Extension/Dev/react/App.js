import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import {useState} from "react";

export default function App() {
    const [theme, setTheme] = useState(undefined);

    React.useEffect(() => {
        chrome.storage.sync.get("theme", (data) => {
            setTheme(data.theme);
        });
    }, []);

    const saveOption = (option, value) => {
        chrome.storage.sync.set({ [option]: value }, () => {
            console.log(`Опция ${option} сохранена со значением ${value}`);
        });
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper square sx={{pb: '50px'}}>
                <Typography variant="h5" gutterBottom component="div" sx={{p: 2, pb: 0}}>
                    Skillbox Assistent
                </Typography>
            </Paper>
            <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}/>
                    <IconButton color="inherit" onClick={()=>saveOption("theme", Date.now())}>
                        <MoreIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}