import { Grid, Paper, Typography } from '@mui/material'


export default function Overview(){
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}> 
                <Paper>
                    <Typography>Overview</Typography>
                </Paper>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={8}>
                <Paper>
                    <Typography>Overview</Typography>
                </Paper>
            </Grid>
        </Grid>        
    );
}