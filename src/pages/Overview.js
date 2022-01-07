import { Grid, Typography } from '@mui/material'
import { Item } from '../components/GridItem.js'
import Typo from '../components/NoClickTypo.js';

const formatter = Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD'
})

export default function Overview(props){
    return (
        <Grid container spacing={2} sx={props.sx}>
            <Item xs={12}>
                <Typo textAlign={"left"} variant={'h6'}>Current Balance:&nbsp;{formatter.format(props.balance)}</Typo>
            </Item>
            <Item xs={4} sx={{display: 'none'}}/>
            <Item xs={4}>
                <Typography>Overview</Typography>
            </Item>
            <Item xs={2} sx={{display: 'none'}}/>
            <Item xs={12}>
                <Typography>Overview</Typography>
            </Item>
        </Grid>        
    );
}