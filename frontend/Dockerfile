# pull base image
FROM node:20-alpine

# Set work directory
WORKDIR /app/frontend

# Install dependencies
COPY ./package*.json .
RUN npm install

# Copy project
COPY . .

# Run the app
CMD ["npm", "start"]