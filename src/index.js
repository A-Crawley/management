import { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline, createTheme, Paper, Typography } from '@mui/material'
import { ClippedDrawer } from './components/ClippedDraw.js'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import './pages/Overview.js'
import Overview from './pages/Overview.js';
import DashboardIcon from '@mui/icons-material/Dashboard';

const theme = createTheme();

const pageTwo = () => {
    return (
        <Paper><Typography>Two</Typography></Paper>
    )
}
const pageThree = () => {
    return (
        <Paper><Typography>Three</Typography></Paper>
    )
}

const pages = [
    {title: 'Overview', page: Overview, icon: () => (< DashboardIcon/>)},
    {title: 'Page Two', page: pageTwo, icon: () => (< AccessibilityNewIcon/>)},
    {title: 'Page Three', page: pageThree, icon: () => (< AccessibilityNewIcon/>)},
]

function App() {

    const [page, changePage] = useState(Overview);

    const pageChangeHandle = (page) => {
        //console.log('changeing page:', page);
        changePage(page);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClippedDrawer title="Management Sim" page={page} pages={pages} pageClick={(page) => {pageChangeHandle(page)}}/>            
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));