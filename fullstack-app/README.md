# Fullstack App (Vite + React, Node.js + Express, DynamoDB)

This project is a full-stack application scaffolded for AWS Copilot/App Runner deployment.

- Frontend: Vite + React
- Backend: Node.js + Express (AWS SDK v3 for DynamoDB)
- Infrastructure: AWS Copilot manifests
- Shared config: `/shared/config/env.js`

## Deployment Steps
1. Set Up Project Structure: Create the directory structure as outlined above.
2. Create Frontend Application: Navigate to the `frontend` directory and initialize a Vite + React project using `npm init vite@latest`. Install necessary dependencies with `npm install`.
3. Create Backend Application: Navigate to the `backend` directory and initialize a Node.js project using `npm init -y`. Install Express and AWS SDK v3 with `npm install express @aws-sdk/client-dynamodb`.
4. Create Shared Config: In the `shared/config` directory, create `env.js` to hold environment variables.
5. Build Docker Images: Navigate to the `frontend` directory and build the Docker image using `docker build -t frontend .`. Then navigate to the `backend` directory and build the Docker image using `docker build -t backend .`.
6. Deploy with AWS Copilot: Initialize AWS Copilot in the root directory with `copilot init`. Follow the prompts to set up the application and services. Deploy the application using `copilot deploy`.
7. Monitor Deployment: Check the output of the Copilot CLI for any errors. If errors occur, capture the error message and format a new prompt for the LLM to update only the necessary files.
8. Iterate Until Successful: Repeat the deployment process until all services are successfully deployed.
9. Access Public URLs: Once deployed, retrieve the public URLs and service metadata from the Copilot output.

This workflow enables a highly automated, LLM-assisted method for generating and deploying full-stack applications with AWS Copilot. By including feedback loops, version tracking, and modular generation, it enables developers to move quickly from idea to production.