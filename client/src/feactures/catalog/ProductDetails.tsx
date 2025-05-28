import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../models/product";
import {
  Typography,
  CircularProgress,
  Box,
  Grid,
  Divider,
  TableContainer,
  Table,
  TableBody,
  TextField,
  Button,
  TableCell,
  TableRow,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5086/api/products/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Error al cargar el producto");
          return res.json();
        })
        .then((data: Product) => setProduct(data))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" color="error" align="center">
        Error: {error}
      </Typography>
    );
  }

  if (!product) {
    return (
      <Typography variant="h6" color="error" align="center">
        Producto no encontrado
      </Typography>
    );
  }


const productDetails =[
  {label: 'Name', value: product.name},
  {label: 'Description', value: product.description},
  {label: 'type', value: product.type},
  {label: 'Brand', value: product.brand},
  {label: 'Quantity in Stock', value: product.quantityInStock},
]





  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          px: 2,
        }}
      >
        <Grid
          container
          spacing={6}
          maxWidth="lg"
          sx={{ mx: "auto" }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid size={6} sx={{ width: { xs: "100%", md: "50%" } }}>
            <img
              src={product?.pictureUrl}
              alt={product.name}
              style={{ width: "50%", borderRadius: 8 }}
            />
          </Grid>
          <Grid size={6}>
            <Typography variant="h3" sx={{ width: { xs: "100%", md: "50%" } }}>
              {product.name}
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h4" color="secondary">
              {" "}
              ${(product.price / 100).toFixed(2)}
            </Typography>
            <TableContainer>
               <Table>
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {detail.label}
                    </TableCell>
                    <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </TableContainer>
            <Grid container spacing={2} marginTop={3}>
              <Grid size={6}>
                <TextField
                  variant="outlined"
                  type="number"
                  label="Quantity in basket"
                  fullWidth
                  defaultValue={1}
                ></TextField>
              </Grid>
              <Grid>
                <Button
                sx={{ height:'55px' }}
                  color="primary"
                  size="large"
                  variant="contained"
                  fullWidth
                >
                  Add too basket
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
