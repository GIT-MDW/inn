import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectProducts } from "../../features/product/productSlice";
import { useAuth } from "../../hooks/useAuth";

const Shop = () => {
  const auth = useAuth();
  const { products } = useAppSelector(selectProducts);

  useEffect(() => {
    localStorage.setItem("authorized", "true");
  }, [auth]);

  return (
    <div>
      {auth && (
        <>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {products.slice(0, 5).map((product) => (
                <Grid item key={nanoid()} xs={12} sm={6} md={4}>
                  <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                    <CardMedia
                      component="img"
                      sx={{
                        pt: "1%",
                      }}
                      image="https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <Typography>
                        Price - {product.price} Weight - {product.weight}{" "}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default Shop;
