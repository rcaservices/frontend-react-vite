# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vite app
RUN npm run build

# Serve the app with a lightweight server
FROM node:18-alpine AS runtime
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve

# Expose port 5173 (default Vite dev port) or 3000 (for production)
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "dist", "-l", "3000"]
