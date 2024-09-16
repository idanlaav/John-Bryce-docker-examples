# OS + Framework
FROM node:18-alpine3.16

#  install 3rd party library ts-node(including typescript compiler)
RUN npm i -g ts-node

# Craete directory inside the image:
WORKDIR /app

# Copy only pacage json to image /app:
COPY package.json /app

# Run command line "npm i" inside the image:
RUN npm i

# Copy all files into image / app:
COPY . /app


