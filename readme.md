# CRM and Content Management System for Service-Oriented Businesses

**Table of Contents**

- [Introduction](#introduction)
- [Features Overview](#features-overview)
- [Requirements](#requirements)
- [Configuration and Setup Instructions](#configuration-and-setup-instructions)
- [Usage](#usage)

## Introduction

Welcome to the CRM and Content Management System! This project is a comprehensive solution tailored for service-oriented businesses. It combines Customer Relationship Management (CRM) functionalities with content management capabilities to empower businesses in managing their clients, services, and content effectively. This project is designed to support multiple businesses (tenants) and provides a centralized platform for customer engagement and service delivery.

## Features Overview

- **Customer Management:** Efficiently manage customer information, including profiles, contact details, service history, and interactions.
- **Service Catalog:** Create and maintain a catalog of services offered by the business, complete with descriptions, pricing, and availability.
- **Appointment Scheduling:** Enable clients to schedule appointments online, with integrated calendar functionality for easy booking and management.
- **Content Management:** Create, edit, and publish content such as articles, blogs, and announcements to engage with clients and promote services.
- **Multi-Tenancy Support:** Seamlessly support multiple businesses (tenants) on a single platform, with isolated data and configurations for each tenant.
- **User Authentication and Authorization:** Securely authenticate users and enforce role-based access control to ensure data privacy and confidentiality.

## Requirements

Before setting up the project, ensure you have the following prerequisites installed:

- [Node.js v20.x.x](https://nodejs.org/en/blog/release/v20.9.0) and npm (installed with node.js)
- [Angular CLI](https://angular.io/cli)
- [Git](https://git-scm.com/downloads)
- [MySQL](https://www.mysql.com/downloads/) and [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Configuration and Setup Instructions

To set up the project locally, follow these steps:

1. **Backend (Node.js):**
   - Navigate to the `server` directory.
   - Run `npm install` to install dependencies.
   - Modify database configurations, API endpoints, and other settings as needed in `.env` file.
   - Run `npm start` to start the backend server.

2. **Frontend (Angular):**
   - Navigate to the `client` directory.
   - Run `npm install` to install dependencies.
   - Update API endpoints and other configurations in environment files (`environment.ts`, `environment.prod.ts`) located in the `client/src/environments` directory.
   - Run `ng serve` to start the frontend development server.

## Usage
To be Determined

