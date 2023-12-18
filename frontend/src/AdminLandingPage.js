import * as React from "react";
import { Link } from "react-router-dom";
import { 
  Button,
  Card, 
  CardActionArea,
  CardContent, 
  CardMedia, 
  Container, 
  CssBaseline, 
  Dialog,
  DialogActions,
  DialogContent, 
  DialogTitle, 
  Grid, 
  Paper, 
  TextField,
  Typography 
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import AppAppBar from "./components/AppAppBar";
import banner from './banner.jpg';

function AdminLandingPage() {
  const [products, setProducts] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [newProduct, setNewProduct] = React.useState({
    name: "",
    description: "",
    price: 0
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
      });
      const createdProduct = await response.json();
      setProducts((prevProducts) => [...prevProducts, createdProduct]);
      handleClose();
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/products/");
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar title="Welcome to Jack's Minimart" />
        <Paper 
          elevation={3} 
          sx={{ 
            height:550,
            position:'relative', 
            mt: 10, 
            mb:6,
            backgroundImage: `url(${banner})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
          }}
        >
        </Paper>
        <Button variant="contained" onClick={handleOpen} sx={{mb:4}} startIcon={<AddIcon />}>
          Add Product
        </Button>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card elevation={3} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardActionArea component={Link} to={`/admin/products/${product.id}`}>
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image='https://source.unsplash.com/random?fruit,vegetable'
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Product</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="dialog_product_name"
              label="Product Name"
              fullWidth
              variant="standard"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="dialog_product_description"
              label="Product Description"
              fullWidth
              variant="standard"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="dialog_product_price"
              label="Product Price"
              fullWidth
              variant="standard"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddProduct}>Add</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </React.Fragment>
  );
}

export default AdminLandingPage;