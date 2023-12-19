# Jack's Minimart

## Description

A simple web application for an online store.

The web application consists of 2 pages:
1. Admin Landing Page
   - displays all the products in the minimart.
   - a form to add a new product.
2. Admin Product Page
    - displays the details of a product.
    - a form to edit the product's description and price.
    - a button to delete the product.

## Technologies

- Backend
  - [Django](https://www.djangoproject.com/) - Python web framework
  - [Django REST Framework](https://www.django-rest-framework.org/) - REST API framework for Django
- Frontend
  - [React](https://reactjs.org/) - JavaScript library for building UIs
  - [React Router](https://reactrouter.com/) - Routing library for React
  - [Material-UI](https://material-ui.com/) - React component library that implements Google's Material Design
- Storage
  - [PostgreSQL](https://www.postgresql.org/) - Relational DB for storing product information
  - [MinIO](https://min.io/)  - S3-compatible object storage for storing product images
- Containerization
  - [Docker](https://www.docker.com/) - Containerization platform


## Prerequisites

- Docker

## Usage

1. Clone the repository.
2. Run `docker-compose up --build` to start the application.
3. Navigate to `http://localhost:3000` to view the web application.

## Contact

If you have any questions or feedback, feel free to reach out to me at ahmadzahiri90@gmail.com.
