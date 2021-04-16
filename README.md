# Before Dark
A runner's companion app so you can beat the sunset.

### Overview

## Application Demo
[![](/screenshots/demo.png)](https://youtu.be/W5VZa5SV2lw)

## Getting Started
Fork and clone to your local machine.

Install npm packages:
```npm install```

Run Next.js in dev environment:
```npm run dev```

Or build production and start client-side server to run on localhost:3000:
```
npm run build
npm run start
```

Run server and access on localhost:8000:
```npm run server```

## Features & Challenges

### Google Maps Geolocation & Sunrise/Sunset API
This app uses to APIs to create the 'leave time' for runners. Google Maps finds the coordinates based on the user's zip code and Sunrise/Sunset returns the local sunset time based on those coordinates.

### Accurate Time Conversion
The sunset time coming back from the API is in military UTC. There's a fair amount of logic happening on the client side to render the time locally in a friendly format.

### Stored Queries in MongoDB
In future iterations, queries currently being stored in a MongoDB database can improve search results and give the user more insight.

## Tech Stack
- React
- Express
- MongoDB
- Mongoose
- Google Maps Geolocation API
- Sunrise/Sunset API
- React-Bootstrap
- AWS

### Refactoring Using Next.js
I'm currently refactoring this app to run using Next.js. Check out the 'Next' branch of this repo to see that progress.