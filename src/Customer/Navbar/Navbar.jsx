import { AccountCircle, NotificationsActive } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, logout } from "../../Redux/Auth/action";
import { useEffect } from "react";

const Navbar = () => {
  const [anchorEl, setAnchoEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleClick = (event) => {
    setAnchoEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchoEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
  };

  useEffect(() => {
    dispatch(fetchUser(localStorage.getItem("jwt")));
  }, [auth?.jwt]);

  return (
    <div className="z-50 px-6 flex items-center justify-between py-2">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="cursor-pointer font-bold text-2xl"
        >
          Salon Service
        </h1>
        <div className="flex items-center gap-5">
          <h1>Home</h1>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <Button variant="outlined">Become Partner</Button>

        <IconButton onClick={() => navigate("/notifications")}>
          <Badge badgeContent={5}>
            <NotificationsActive color="primary" />
          </Badge>
        </IconButton>

        {auth.user?.id ? (
          <div className="flex gap-1 items-center">
            <h1 className="text-lg font-semibold">{auth.user.username}</h1>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ bgcolor: "green" }}>
                {auth.user.username.charAt(0)}
              </Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/bookings");
                  handleClose();
                }}
              >
                My Bookings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div>
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircle sx={{ fontSize: "45px", color: "green" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/login");
                  handleClose();
                }}
              >
                Login
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("/register");
                  handleClose();
                }}
              >
                Signup
              </MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
