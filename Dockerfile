# Stage 1: Build
FROM node:14.18.3 AS builder
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./ 
# Cache dependencies by separating package installation
RUN npm install 

# Copy the rest of the application files
COPY . .

# Build the application (if necessary)
# RUN npm run build (uncomment if you have a build step)

# Stage 2: Production
FROM node:14.18.3 AS production
ENV NODE_ENV=production

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
