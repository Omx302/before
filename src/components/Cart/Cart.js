import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../Redux/Cart";
import Product from "../Products/Product";

function Cart(props) {
  return (
    <Grid
      container
      spacing={2}
      rowSpacing={2}
      style={{ margin: "20px auto", width: "100%" }}
    >
      {props.products.map((product, index) => {
        return (
          <Grid item xs={2} md={3} key={index}>
            <Box
              sx={{
                width: 300,
                height: "fit-content",
                border: "1px solid black",
                overflow: "hidden",
                marginBottom: 5,
              }}
            >
              <Product key={product.id} product={product} />
            </Box>
            ;
          </Grid>
        );
      })}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.Cart.products,
    total: state.Cart.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clear: dispatch(clearCart()),
  };
};
export default connect(mapStateToProps)(Cart);
