# FIRE Calculator Application

## Project Structure
```
fire-calculator/
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   └── InputForm.tsx
│   ├── pages/              # Next.js pages
│   │   ├── index.tsx       # Main calculator page
│   │   └── api/            # API routes
│   ├── styles/             # CSS and styling
│   └── utils/              # Utility functions
│
├── public/                 # Static assets
│
├── infrastructure/         # DevOps configurations
│   ├── terraform/          # Terraform IaC scripts
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   └── outputs.tf
│   ├── ansible/            # Ansible playbooks
│   │   └── deploy.yml
│   └── kubernetes/         # K8s manifests
│       ├── deployment.yaml
│       └── service.yaml
│
├── .github/                # GitHub Actions
│   └── workflows/
│       └── ci-cd.yml
│
├── docker/                 # Docker configurations
│   └── Dockerfile
│
├── tests/                  # Unit and integration tests
│   ├── calculator.test.ts
│   └── integration/
│
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Key Directories
- `src/`: Primary application source code
- `infrastructure/`: DevOps configuration files
- `.github/`: CI/CD workflow definitions
- `tests/`: Application testing suite

## Getting Started
1. Clone repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

## Deployment
- Infrastructure: Terraform
- Container: Docker
- Orchestration: Kubernetes
- CI/CD: GitHub Actions

## Technologies
- Frontend: Next.js, TypeScript
- Infrastructure: Azure, Terraform
- Containerization: Docker
- Orchestration: Kubernetes
- Configuration Management: Ansible

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push and create pull request
