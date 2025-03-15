# S3rcel - PR Preview System

<div align="center">
  <img src="src/assets/banner.png" alt="Banner">
  
  <h3>Blazing Fast PR Previews with S3 and CloudFront</h3>
  <p>Automatically deploy and preview your pull requests with AWS infrastructure</p>
</div>

## Overview

This project implements an automated PR preview system using GitHub Actions, AWS S3, and CloudFront. It allows you to automatically deploy a preview version of your React application for each pull request, making it easier for reviewers to see the changes in action.

### Key Features

- **Automated Deployments**: Automatically deploy preview environments for each PR
- **Fast Loading**: CloudFront CDN ensures blazing fast loading times
- **Cleanup Process**: Automatically clean up preview environments when PRs are closed
- **PR Comments**: Automatically adds preview URLs as comments on PRs

## Workflow

The system works through the following workflow:

1. **PR Creation/Update**: When a PR is created or updated, the GitHub Action is triggered
2. **Build Process**: The React application is built
3. **S3 Deployment**: Build artifacts are uploaded to S3 with a PR-specific prefix
4. **CloudFront Distribution**: CloudFront serves the static content with low latency
5. **PR Comment**: A comment with the preview URL is posted on the PR
6. **Cleanup**: When the PR is closed, the preview is automatically removed from S3

## Prerequisites

- AWS Account with S3 and CloudFront set up
- GitHub repository for your React application
- Proper IAM permissions for S3 and CloudFront operations

## GitHub Secrets Configuration

To use this PR preview system, you need to configure the following GitHub secrets:

| Secret Name | Description |
|-------------|-------------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key ID with permissions for S3 and CloudFront |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret access key |
| `AWS_REGION` | The AWS region where your S3 bucket is located (e.g., `us-east-1`) |
| `AWS_S3_BUCKET_NAME` | The name of your S3 bucket for storing the previews |
| `CLOUDFRONT_DISTRIBUTION_ID` | The ID of your CloudFront distribution |
| `CLOUDFRONT_DISTRIBUTION_DOMAIN_NAME` | The domain name of your CloudFront distribution |

<h3>
  <p align="center">
     Made with ❤️ by <a href="https://www.mrmehta.in">kartikmehta8</a>
  </p>
</h3>