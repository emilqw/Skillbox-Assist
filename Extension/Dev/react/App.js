import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

const messages = [
    {
        id: 1,
        primary: 'Функция',
        secondary: "Здесь будет описание функции",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Функция',
        secondary: `Здесь будет описание функции`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Функция',
        secondary: 'Здесь будет описание функции',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Функция',
        secondary: 'Здесь будет описание функции',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Функция",
        secondary: 'Здесь будет описание функции',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Функция',
        secondary: `Здесь будет описание функции`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Функция',
        secondary: `Здесь будет описание функции`,
        person: '/static/images/avatar/1.jpg',
    },
];

export default function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper square sx={{pb: '50px'}}>
                <Typography variant="h5" gutterBottom component="div" sx={{p: 2, pb: 0}}>
                    Skillbox Assistent
                </Typography>
                <List sx={{mb: 2}}>
                    {messages.map(({id, primary, secondary, person}) => (
                        <React.Fragment key={id}>
                            {id === 1 && (
                                <ListSubheader sx={{bgcolor: 'background.paper'}}>
                                    Today
                                </ListSubheader>
                            )}

                            {id === 3 && (
                                <ListSubheader sx={{bgcolor: 'background.paper'}}>
                                    Yesterday
                                </ListSubheader>
                            )}

                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt="Profile Picture" src={person}/>
                                </ListItemAvatar>
                                <ListItemText primary={primary} secondary={secondary}/>
                            </ListItemButton>
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
            <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}/>
                    <IconButton color="inherit">
                        <SearchIcon/>
                    </IconButton>
                    <IconButton color="inherit">
                        <MoreIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}