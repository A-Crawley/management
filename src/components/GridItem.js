import { Grid, Card, CardContent } from '@mui/material'

export function Item(props){
    return (
        <Grid item xs={props.xs} >
            <Card elevation={props.elevation ?? 2} sx={props.sx}>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
        </Grid>
    );
}