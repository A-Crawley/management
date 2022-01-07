import { useState } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { ClippedDrawer } from './components/ClippedDraw.js'
import Work from './pages/Work.js'
import Overview from './pages/Overview.js';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Store from './pages/Store.js';
import { useStateRef } from './util/reference.js'

const theme = createTheme();

const pages = [
    {title: 'Overview', page: Overview, icon: () => (< DashboardIcon/>)},
    {title: 'Work', page: Work, icon: () => (< WorkIcon/>)},
    {title: 'Store', page: Store, icon: () => (< ShoppingCartIcon/>)},
]

function App() {

    const [page, changePage] = useState(localStorage.getItem('page') === null ? 'Overview' : localStorage.getItem('page'));
    const [collectingCans, setCollectingCans] = useState(false);
    const [balance, updateBalance, balanceRef] = useStateRef(0);
    
    const [inventory, updateInventory, ref] = useStateRef({
        cans: {
            name: "Cans",
            description: "Some old cans you picked up",
            amount: 0,
            salePrice: 0.5,
            sell: (value) => {
                if (ref.current.cans.amount <= 0)
                    return;
                updateInventory({ cans: { ...inventory.cans, amount: ref.current.cans.amount + value}})
                updateBalance(balanceRef.current + (Math.abs(value) * ref.current.cans.salePrice));
            }

        }
    });
    
    const pageChangeHandle = (page) => {
        changePage(page);
        localStorage.setItem('page', page);
    }

    const updateCansHandle = () => {
        setCollectingCans(true);
        setTimeout(() => {
            updateInventory({ cans: { ...inventory.cans, amount: inventory.cans.amount + 1 }});
            setCollectingCans(false);
        },500);        
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ClippedDrawer title="Management Sim" page={page} pages={pages} pageClick={(page) => {pageChangeHandle(page)}}>
                <Overview sx={{display: page === 'Overview' ? '' : 'none'}} balance={balance}/>
                <Work sx={{display: page === 'Work' ? '' : 'none'}} 
                      collectCans={() => updateCansHandle()} inventory={inventory}
                      collectingCans={collectingCans}/>
                <Store sx={{display: page === 'Store' ? '' : 'none'}} 
                       inventory={inventory}/>
            </ClippedDrawer>            
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#app'));