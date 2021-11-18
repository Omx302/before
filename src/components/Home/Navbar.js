import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthContext } from "../../Context/auth";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "yellow",
    },
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const total = useSelector((state) => state.Cart.total);
  const context = useContext(AuthContext);

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Before
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/cart" className={classes.link}>
            Cart
          </Link>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
          <Link to="/products" className={classes.link}>
            (
            {context.loggedIn ? (
              <button onClick={() => context.logout()}>LogOut</button>
            ) : (
              <button onClick={() => context.login()}>LogIn</button>
            )}
            )
          </Link>
          <div className={classes.link}>{total}🛒</div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
