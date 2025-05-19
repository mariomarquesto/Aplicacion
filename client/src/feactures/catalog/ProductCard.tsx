import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../../models/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card elevation={3}
    sx={{ 
        width:280,
        borderRadius: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
     }}
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: 'cover' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom sx={{ color: 'secondary.main' }} variant="subtitle2">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
        <CardActions 
        sx={{ justifyContent: 'space-between' }}>
            <Button>Add to cart</Button>
            <Button>View</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
