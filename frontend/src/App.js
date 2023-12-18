import * as React from "react";
import { Container, CssBaseline, Paper } from "@mui/material";
import AppAppBar from "./components/AppAppBar";
import banner from './banner.jpg';

function App() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/products");
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
            marginTop: 10, 
            backgroundImage: `url(${banner})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat', 
          }}
        >
          {/* {<img style={{ display: 'none'}} src={banner} alt="banner" />} */}
        </Paper>



        <div className="App">
          <div className="product-list">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
