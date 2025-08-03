# 📁 HandsOn - Startup Name Matcher

## Overview
This project is a simple AWS-based Startup Name Matcher exercise that:
- Accepts startup name input and optional description
- Checks DynamoDB for similar or taken names
- Uses Amazon Comprehend for key phrase extraction and sentiment analysis
- Returns a JSON result via API Gateway and Lambda

## Architecture
- **API Gateway:** REST API endpoint for POST /match
- **Lambda:** Backend logic including Comprehend calls and DynamoDB queries
- **DynamoDB:** Table storing existing startup names
- **S3:** Hosting for simple frontend HTML page

## Deployment Steps

### Prerequisites
- AWS CLI configured
- AWS CDK installed (`npm install -g aws-cdk`)
- Python 3.11+ installed

### 1. Bootstrap CDK (one-time)
```bash
cdk bootstrap aws://{ACCOUNT_NAME}/{REGION} --cloudformation-execution-policies "arn:aws:iam::{ACCOUNT_NAME}:policy/{IAM_POLICY_NAME}" --no-public-access-block-configuration --force 
```

### 2. Deploy Stack
```bash
cdk deploy --all --require-approval never
```

## Test the API

Send a POST request to the deployed API Gateway endpoint `/match` with JSON body:
```json
{
  "startup_name": "CloudHero",
  "description": "An AI-powered cloud management platform."
}
```

## DynamoDB Sample Data

Insert sample startup names into the DynamoDB table manually or by script, e.g.:
- CloudHero
- FinNest
- QuickShip
- PayPilot

## 🚀 Frontend Usage

After deployment, you will get a **CloudFront URL** to access the frontend.

Open the `index.html` page through the **CloudFront link** (after updating the **API Gateway URL**) to test name matching interactively.




# Keep it up team! 

![GhostedvpnHackerCatGIF](https://github.com/user-attachments/assets/e0e66e11-fc25-4977-b96d-5c54e8e05aa4)


