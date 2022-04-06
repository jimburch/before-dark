# Before Dark

A runner's companion app so you can beat the sunset.

### Overview

I was tasked with turning around a full-stack application in less than two business days and wanted to create a service that could tell runners what time to leave, based on their desired distance, pace, and zip code, to finish their run and be home before the sunset. This application is a minimum viable product and met all my goals in the given time frame: access both APIs, return the accurate info, and render the app in a fast, easy-to-use UI.

## Application Demo

[![](/screenshots/demo.png)](https://youtu.be/W5VZa5SV2lw)

## Getting Started

Fork and clone to your local machine.

Install npm packages:
`npm install`

Run Next.js in dev environment:
`npm run dev`

Or build production and start client-side server to run on localhost:3000:

```
npm run build
npm run start
```

## Features & Challenges

### Google Maps Geolocation & Sunrise/Sunset API

This app uses to APIs to create the 'leave time' for runners. Google Maps finds the coordinates based on the user's zip code and Sunrise/Sunset returns the local sunset time based on those coordinates.

### Accurate Time Conversion

The sunset time coming back from the API is in military UTC. There's a fair amount of logic happening on the client side to render the time locally in a friendly format.

## Tech Stack

- Next JS
- Google Maps Geolocation API
- Sunrise/Sunset API
