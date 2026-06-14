#!/bin/bash

echo "Building frontend..."
npm run build

echo "Starting services..."
docker compose up -d --build

echo "Deployment completed."