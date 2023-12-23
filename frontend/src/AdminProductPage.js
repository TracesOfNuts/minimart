import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import AppAppBar from "./components/AppAppBar";

function AdminProductPage() {
    // props
    const { id } = useParams();
    const navigate = useNavigate();

    // states
    const [product, setProduct] = React.useState(null);
    const [editedDescription, setEditedDescription] = React.useState("");
    const [editedPrice, setEditedPrice] = React.useState("");
    const [descriptionError, setDescriptionError] = React.useState(false);
    const [priceError, setPriceError] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
    

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
            const formData = new FormData();
            formData.append('id', product.id);
            formData.append('name', product.name);
            formData.append('description', editedDescription);
            formData.append('price', editedPrice);
            formData.append('image', product.image);
            const response = await fetch(
                `http://127.0.0.1:8000/api/products/${id}/`,
                {
                    method: "PUT",
                    body: formData
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

    const openDeleteDialog = () => {
        setIsDeleteDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    };

    const confirmDeleteProduct = async () => {
        try {
            setIsDeleting(true);
            const response = await fetch(
                `http://127.0.0.1:8000/api/products/${id}/`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                console.log("Product deleted successfully!");
            } else {    
                console.error("Error deleting product:", response.status);
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        } finally {
            setIsDeleting(false);
            closeDeleteDialog();
            navigate("/admin/products/");
        }
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppAppBar title="Welcome to Jack's Minimart" />
                <Container sx={{mt:10}}>
                    {product ? (
                        <>
                        <Card elevation={3}>
                            <CardMedia
                                component="img"
                                sx={{
                                height:'300px',
                                objectFit:'contain',
                                }}
                                image={product.image}
                            />
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
                                    fullWidth
                                />
                                <Box mt={2} />
                                <TextField
                                    label="Price" 
                                    value={editedPrice}
                                    onChange={handlePriceChange}
                                    error={priceError}
                                    helperText={priceError && "Price must be a number"}
                                />
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" onClick={saveChanges} endIcon={<SaveIcon />}>
                                    Save Changes
                                </Button>
                                <Button
                                    aria-label="delete" 
                                    onClick={openDeleteDialog} 
                                    disabled={isDeleting}
                                    variant="outlined"
                                    endIcon={<DeleteIcon />}
                                    color="error"
                                >
                                    delete
                                </Button>
                            </CardActions>
                        </Card>
                        <Dialog open={isDeleteDialogOpen} onClose={closeDeleteDialog}>
                            <DialogTitle>Confirm Delete</DialogTitle>
                            <DialogContent>
                                <Typography>
                                    Are you sure you want to delete this product?
                                </Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={closeDeleteDialog}>Cancel</Button>
                                <Button onClick={confirmDeleteProduct} disabled={isDeleting}>Delete</Button>    
                            </DialogActions>
                        </Dialog>
                        </>
                    ) : (
                        <Typography variant="body1">Product Not Found</Typography>
                    )}
                    
                </Container>
            </Container>
        </React.Fragment>
    );
}

export default AdminProductPage;
