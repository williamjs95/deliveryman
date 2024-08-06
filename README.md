# Deliveryman Project

## Overview
The Deliveryman project is a backend service for managing deliveries, deliverymen, and clients. The project is built with TypeScript, Express, and Prisma, and includes features for user authentication, delivery management, and more.

## Technologies
- **Prisma**
- **TypeScript**
- **Bcrypt**
- **JsonWebToken**
- **Express**
- **ts-node-dev**

## Project Setup
1. **Project Structure**
   - Set up the project structure with necessary folders and files.
   - Install required dependencies:
     ```bash
     yarn install
     ```

2. **Prisma Setup**
   - Initialize Prisma:
     ```bash
     yarn prisma init
     ```
   - Configure the Prisma schema and generate the client:
     ```bash
     yarn prisma generate
     ```

3. **Database Tables**
   - Create tables for:
     - `deliveryman`
     - `client`
     - `deliveries`
   - Run Prisma migrations to create the tables:
     ```bash
     yarn prisma migrate dev
     ```

4. **Express Configuration**
   - Set up Express server in `src/server.ts`.
   - Add necessary middlewares and routes.

## Features
- **Client Registration**
  - Endpoint to register a new client.
- **Authentication**
  - Implement authentication using JsonWebToken.
- **Deliveryman Registration**
  - Endpoint to register a new deliveryman.
- **Deliveryman Authentication**
  - Implement authentication for deliverymen.
- **Delivery Management**
  - Create and manage deliveries.
  - Search for deliveries without an assigned deliveryman.
  - Update delivery statuses.
  - Search deliveries by client.
  - Search deliveries by deliveryman.

## Development Scripts
- **Start development server**
  ```bash
  yarn dev
