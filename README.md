# genie-playground

## Monorepo Structure

This monorepo is organized to support scalable development for a modern SaaS application.

- **apps/**  
  Contains deployable applications for the project.
  - **apps/frontend/**  
    The web frontend for the e-commerce SaaS platform, where users can browse and buy vintage keychains.
  - **apps/backend/**  
    The backend API and business logic, handling products, orders, payments, and administration.

- **shared/**  
  Contains code and resources shared between frontend and backend, such as types, utilities, and configuration.

This structure enables clear separation of concerns and efficient code sharing between different parts of the SaaS platform.
