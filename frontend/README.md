# Real-Time Dashboard with Advanced Features

A responsive, real-time dashboard application built with **React**, **TypeScript**, **Redux Toolkit**, and **Node.js**. It efficiently handles sorting and filtering capabilities, and ensures optimal performance through memoization and state management best practices.

## Table of Contents

1. [Features](#features)
2. [Project Structure](#project-structure)
3. [Prerequisites](#prerequisites)
4. [Setup Instructions](#setup-instructions)
   - [1. Clone the Repository](#1-clone-the-repository)
   - [2. Setup Backend](#2-setup-backend)
     - [2.1. Install Dependencies](#21-install-dependencies)
     - [2.2. Run the Backend Server](#22-run-the-backend-server)
   - [3. Setup Frontend](#3-setup-frontend)
     - [3.1. Install Dependencies](#31-install-dependencies)
     - [3.2. Run the Frontend Development Server](#33-run-the-frontend-development-server)
   - [4. Run Tests](#4-run-tests)
   
---

## Features

- **Responsive Design:** Adapts seamlessly to various device sizes.
- **Sorting & Filtering:** Users can sort and filter patient data based on multiple criteria.
- **Real-Time Updates:** Integrates WebSockets for live data updates.
- **Performance Optimization:** Utilizes memoization and optimized state management to ensure smooth performance.
- **Code Quality:** Maintains high code standards with TypeScript, ESLint, and unit tests.
- **User Preferences Persistence:** Saves user settings like sorting and filtering options using local storage.

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js** (v14 or later)  
  [Download Node.js](https://nodejs.org/en/download/)
  

## Setup Instructions

Follow the steps below to set up and run the **Real-Time Dashboard** application.

### 1. Clone the Repository

```bash
git clone https://github.com/secret-point/real-time-dashboard.git
cd real-time-dashboard
```
### 2. Setup Backend
#### 2.1 Install Dependencies

```bash
cd backend
npm install
```

#### 2.2. Run the Backend Server
```bash
npm start
```

### 3. Setup Frontend
#### 3.1 Install Dependencies

```bash
cd frontend
npm install
```

#### 3.2. Run the Backend Server
```bash
npm run dev
```