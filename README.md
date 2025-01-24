# FIRE Calculator Application

## Project Overview
Full-stack TypeScript application for FIRE (Financial Independence, Retire Early) calculations with comprehensive infrastructure management.

## Project Structure
```
fire-calculator/
│
├── src/                   # Application source code
│   ├── components/
│   ├── pages/
│   └── utils/
│
├── docker/                # Docker configurations
│   ├── Dockerfile
│   └── docker-compose.yml
│
├── kubernetes/            # Kubernetes manifests
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
│
├── terraform/             # Cloud Infrastructure
│   ├── environments/
│   └── modules/
│
├── ansible/               # Configuration Management
│   ├── inventories/
│   └── playbooks/
│
└── .github/               # CI/CD Workflows
    └── workflows/
```

## Technology Stack
- Frontend: Next.js, TypeScript
- Backend: Node.js
- Infrastructure: 
  - Docker
  - Kubernetes
  - Terraform
  - Ansible
- Cloud: Azure

## Prerequisites
- Node.js 18+
- Docker
- Kubernetes Cluster
- Terraform 1.0+
- Ansible 2.10+
- Azure CLI

## Local Development
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Docker Deployment
```bash
# Build Docker image
docker build -t fire-calculator .

# Run container
docker-compose up
```

## Kubernetes Deployment
```bash
# Deploy to Kubernetes
kubectl apply -f kubernetes/

# Check deployment status
kubectl get deployments
kubectl get services
```

## Terraform Infrastructure
```bash
# Initialize Terraform
terraform init \
  -backend-config=environments/production/backend.tfvars

# Plan infrastructure
terraform plan \
  -var-file=environments/production/terraform.tfvars
```

## Ansible Configuration
```bash
# Deploy infrastructure
ansible-playbook -i inventories/production playbooks/deploy.yml
```

## CI/CD
- GitHub Actions workflows
- Automated testing
- Infrastructure validation
- Deployment to Azure Kubernetes Service

## Environment Configuration
Create `.env` file with:
- `TRADING_ECONOMICS_API_KEY`
- `AZURE_SUBSCRIPTION_ID`
- `AZURE_CLIENT_ID`
- `AZURE_CLIENT_SECRET`

## Security Considerations
- Encrypted credentials
- Minimal privilege principles
- Infrastructure as Code (IaC)

## Scaling
- Horizontal Pod Autoscaler
- Multi-replica deployments
- Microservices architecture

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request
