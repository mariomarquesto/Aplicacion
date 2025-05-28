import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import type { Product } from "../../models/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card
      elevation={3}
      sx={{
        width: 280,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom sx={{ color: "secondary.main" }} variant="subtitle2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button size="small" variant="contained" color="primary">
          Add to cart
        </Button>
        <Button
          size="small"
          component={NavLink}
          to={`/catalog/${product.id}`}
          variant="outlined"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
