import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCategoriesBySalon } from "../../Redux/Category/action";
import IconButton from "@mui/material/IconButton";
import { Edit } from "@mui/icons-material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CategoryTable() {
  // const dispatch = useDispatch()
  const {salon, category} = useSelector(store => store)

  // useEffect(() => {
  //   if(salon.salon) {
  //     dispatch(getCategoriesBySalon({
  //       jwt: localStorage.getItem("jwt"),
  //       salonId: salon.salon?.id
  //     }));
  //   }
  // },[salon.salon])
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell align="right">Category Name</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.categories.map((item) => (
              <StyledTableRow key={item.name}>
                <StyledTableCell component="th" scope="row">
                  <div className="flex gap-1 flex-wrap">
                    <img className="w-20 rounded-md" src={item.image} alt="" />
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{item.name}</StyledTableCell>
                <StyledTableCell align="right" className="space-y-2">
                  <IconButton>
                    <Edit/>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
