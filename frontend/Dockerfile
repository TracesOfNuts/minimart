# pull base image
FROM node:20-alpine

# Set work directory
WORKDIR /app/frontend

# Install dependencies
COPY ./package*.json /app/frontend/
RUN npm install

# Copy project
COPY . /app/frontend/

# Run the app
CMD ["npm", "start"]