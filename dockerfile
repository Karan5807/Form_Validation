
# Step 1: Use a Node.js base image
FROM node:20-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Expose the application port (e.g., 3000)
EXPOSE 6545

# Step 7: Define the command to run the application
CMD [ "npm", "run", "dev" ]
