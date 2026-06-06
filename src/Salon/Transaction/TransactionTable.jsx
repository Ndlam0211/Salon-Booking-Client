import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSalonBookings } from "../../Redux/Booking/action";

export default function TransactionTable() {
  const { booking, salon } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    if (salon.salon) {
      dispatch(fetchSalonBookings(localStorage.getItem("jwt")));
    }
  }, [salon.salon]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Customer Details</TableCell>
            <TableCell align="right">Booking</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booking.bookings.map((item) => (
            <TableRow
              key={item.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {(() => {
                  const date = new Date(item.startTime);
                  const day = String(date.getDate()).padStart(2, "0");
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  const year = date.getFullYear();
                  const hours = date.getHours();
                  const minutes = String(date.getMinutes()).padStart(2, "0");
                  const ampm = hours >= 12 ? "PM" : "AM";
                  const formattedHour = String(hours % 12 || 12).padStart(2, "0");
                  return `${day}/${month}/${year} ${formattedHour}:${minutes} ${ampm}`;
                })()}
              </TableCell>
              <TableCell align="right">{item.customer.email}</TableCell>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
