FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application source code
COPY . .

# Document the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]