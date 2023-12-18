import * as React from "react";
import { useParams } from "react-router-dom";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    CssBaseline,
    TextField,
    Typography,
} from "@mui/material";
import AppAppBar from "./components/AppAppBar";

function AdminProductPage() {
    const [editedDescription, setEditedDescription] = React.useState("");
    const [editedPrice, setEditedPrice] = React.useState("");
    const [descriptionError, setDescriptionError] = React.useState(false);
    const [priceError, setPriceError] = React.useState(false);
    const [product, setProduct] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/products/${id}/`
            );
            if (response.ok) {
                const product = await response.json();
                setProduct(product);
                setEditedDescription(product.description);
                setEditedPrice(product.price);
            } else {
                setProduct(null);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDescriptionChange = (event) => {
        console.log(event.target.value);
        setEditedDescription(event.target.value);
        setDescriptionError(false);
    };

    const handlePriceChange = (event) => {
        setEditedPrice(event.target.value);
        setPriceError(false);
    };

    const saveChanges = async () => {
        if (editedDescription === "") {
            setDescriptionError(true);
            return;
        }
        if (isNaN(editedPrice) || editedPrice.trim() === "") {
            setPriceError(true);
            return;
        }
        try {
            const response = await fetch(
                `http://127.0.0.1:8000/api/products/${id}/`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: product.id,
                        name: product.name,
                        description: editedDescription,
                        price: editedPrice,
                        image: null
                    }),
                }
            );
            if (response.ok) {
                console.log("Product updated successfully!");
                console.log(await response.json());
            } else {
                console.error("Error updating product:", response.status);
            }
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppAppBar title="Welcome to Jack's Minimart" />
                <Typography variant="h2" sx={{mt:10}}>
                    Admin Product Page
                </Typography>
                {product ? (
                    <Card>
                        <CardContent>
                            <Typography
                                variant="h5"
                                component="div"
                                gutterBottom
                            >
                                {product.name}
                            </Typography>
                            <TextField
                                label="Description" 
                                value={editedDescription}
                                onChange={handleDescriptionChange}
                                error={descriptionError}
                                helperText={descriptionError && "Description is required"}
                            />
                            <TextField
                                label="Price" 
                                value={editedPrice}
                                onChange={handlePriceChange}
                                error={priceError}
                                helperText={priceError && "Price must be a number"}
                            />
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" onClick={saveChanges}>
                                Save Changes
                            </Button>
                        </CardActions>
                    </Card>
                ) : (
                    <Typography variant="body1">Product Not Found</Typography>
                )}
            </Container>
        </React.Fragment>
    );
}

export default AdminProductPage;
