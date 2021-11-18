import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../Redux/Cart/index";
import { Cart } from "../../Redux/";
import { connect } from "react-redux";

function Product(props) {
  const { title, price, image, description } = props.product;
  // const buy = useSelector(selectBuy);
  // const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="250" src={image} alt={title} />
      <CardContent>
        <Typography
          style={{ overflow: "hidden", height: "30px" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography size="small">{price} $</Typography>

        <Typography
          style={{ overflow: "hidden", height: "100px" }}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => props.buy(props.product)}>
          Buy
        </Button>

        <Button size="small" onClick={() => props.remove(props.product)}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    total: state.Cart.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy: (product) => dispatch(addToCart(product)),
    remove: (product) => dispatch(removeFromCart(product)),
    clear: () => dispatch(clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
