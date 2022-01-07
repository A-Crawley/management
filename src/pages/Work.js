import {
  Card,
  CardContent,
  Grid,
  Typography,
  Backdrop,
  Stack,
  CardActionArea,
  Paper,
  CircularProgress,
} from "@mui/material";
import Typo from "../components/NoClickTypo";

export default function Work(props) {
  return (
    <Grid container spacing={2} sx={props.sx}>
      <Grid item xs={3}>
        <Card elevation={props.elevation ?? 2} sx={{position: 'relative'}}>
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, position: 'absolute'}}
            open={props.collectingCans}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
          <CardActionArea onClick={() => props.collectCans()}>
            <Paper>
                <Typography variant={'h4'} textAlign={'center'} sx={{pt: 7,backgroundColor: 'rgb(0 150 200)', height: '150px'}}>CANS</Typography>
            </Paper>
          </CardActionArea>
          <CardContent>
            <Stack
              direction={"row"}
              sx={{ pt: 2 }}
              spacing={12}
              width={"100%"}
              justifyContent="space-between"
            >
              <Typo variant={"h6"}>Cans Collected:</Typo>
              <Typo variant={"h6"} textAlign={"right"}>
                {props.inventory.cans.amount}
              </Typo>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
