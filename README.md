# Jack's Minimart

## Description

A simple web application for an online store.

The web application consists of 2 pages which support CRUD functionalities:

1. Admin Landing Page
   - displays all the products in the minimart (READ).

     <img src="https://github.com/TracesOfNuts/minimart/assets/24549125/aad6604e-be09-431a-9d0d-b04aefa54858" width="600">
     
   - a form to add a new product (CREATE).
     
     <img src="https://github.com/TracesOfNuts/minimart/assets/24549125/b3a04fe1-7aba-4825-ab5a-7ddfe2d99499" width="600">
  
     After adding new product:
     
     <img src="https://github.com/TracesOfNuts/minimart/assets/24549125/6a8746ca-a8e5-44bd-a3ec-b12d285d61b4" width="600">


2. Admin Product Page
    - a form to edit the product's description and price (UPDATE).
      
    <img src="https://github.com/TracesOfNuts/minimart/assets/24549125/85ecfb2e-cc03-4894-b087-e6072844a261" width="600">

    - a button to delete the product (DELETE).
  
    <img src="https://github.com/TracesOfNuts/minimart/assets/24549125/fc9a5bd8-88a6-4463-803c-454bef7811c0" width="600">

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
  - [MinIO Client](https://docs.min.io/docs/minio-client-quickstart-guide.html) - CLI for interacting with MinIO
- Containerization
  - [Docker](https://www.docker.com/) - Containerization platform


## Prerequisites

- Docker

## Usage

1. Clone the repository.
2. Run `docker-compose up --build` to start the application.
3. Navigate to `http://localhost:3000/admin/products` to view the web application.

## Contact

If you have any questions or feedback, feel free to reach out to me at ahmadzahiri90@gmail.com.
