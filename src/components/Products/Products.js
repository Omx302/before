import React from "react";
import Product from "./Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Box, margin } from "@mui/system";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    setLoading(true);
    let products = await axios.get("https://fakestoreapi.com/products");
    setProducts(
      products.data.map((product) => (
        <Product key={product.id} product={product} />
      ))
    );
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <Grid
      container
      spacing={2}
      rowSpacing={2}
      style={{ margin: "20px auto", width: "100%" }}
    >
      {products.map((product, index) => (
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
            {product}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
