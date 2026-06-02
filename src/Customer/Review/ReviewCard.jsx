import { Delete } from "@mui/icons-material";
import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReview } from "../../Redux/Review/action";

const ReviewCard = ({ item }) => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  const handleDelete = () => {
    dispatch(deleteReview({
      reviewId: item.id,
      jwt: localStorage.getItem("jwt"),
    }));
  };
  return (
    <div className="flex justify-between">
      <div className="w-[80%]">
        <Grid container>
          <Grid item size={{ xs: 3, lg: 1.5 }}>
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: 56, height: 56, bgcolor: "#9155FD" }}
              >
                {item.user.username.charAt(0)}
              </Avatar>
            </Box>
          </Grid>

          <Grid item size={9}>
            <div className="space-y-2">
              <p className="font-semibold text-lg">{item.user.username}</p>
              <p className="opacity-70">
                {new Date(item.createdAt).toLocaleDateString("vi-VN")}
              </p>
            </div>
            <div className="">
              <Rating
                readOnly
                value={item.rating}
                name="half-rating"
                defaultValue={4.5}
                precision={0.5}
              />
            </div>
            <p>{item.reviewContent}</p>
          </Grid>
        </Grid>
      </div>
        {auth.user && auth.user?.id === item.userId && (
          <IconButton onClick={handleDelete}>
            <Delete sx={{ color: red[700] }} />
          </IconButton>
        )}
    </div>
  );
};

export default ReviewCard;
