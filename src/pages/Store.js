import { AttachMoney } from '@mui/icons-material';
import { Grid, Table, TableContainer, TableHead, Paper, TableRow, TableCell, TableBody, IconButton } from '@mui/material'
import { Item } from '../components/GridItem';

const InventorPannel = (props) => {
    return (
        <TableContainer component={Paper} sx={props.sx}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Sale Price</TableCell>
            <TableCell align="right">Sell</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(props.rows).map((key) => (
            <TableRow
              key={props.rows[key].name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {props.rows[key].name}
              </TableCell>
              <TableCell align="right">{props.rows[key].description}</TableCell>
              <TableCell align="right">{props.rows[key].amount}</TableCell>
              <TableCell align="right">{props.rows[key].salePrice}</TableCell>
              <TableCell align="right"><IconButton onClick={() => props.rows[key].sell(-1)} aria-label="selloutlined"><AttachMoney/></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default function Store(props){
    return(
        <Grid container spacing={2} sx={props.sx}>
            <Item xs={8}>
                <InventorPannel rows={props.inventory}/>
            </Item>
        </Grid>
    );
}