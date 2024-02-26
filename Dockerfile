# Use an official Node.js Alpine image as a base image
FROM node:lts-alpine3.18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle your app source code inside the Docker image
COPY . .

# Expose the port your app will run on
EXPOSE 8080

# Command to run your application
CMD ["npm", "start"]
