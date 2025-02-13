# ReactJS-ToDoList (Forked & Extended)

## Introduction

This project is a **forked and extended** version of a Front-End To-Do List web application, originally created by [Matheus Cavini](https://github.com/MatheusCavini). 

I am integrating this front-end with my own **NestJS + GraphQL + PostgreSQL backend**, adding authentication and persistent task management.

The original project was a **Front-End study only**, without authentication or a database. My goal is to **extend it into a full-stack application** while keeping the clean UI design intact.

## Original Repository

The original version of this project can be found at:  
🔗 [Original Repo](https://github.com/MatheusCavini/ReactJS-ToDoList)

## Features (Updated)

✅ **Full-Stack Integration:** Connected to a NestJS GraphQL backend with PostgreSQL.  
✅ **Authentication:** Users can sign up, log in, and manage their tasks securely.  
✅ **Persistent Task Storage:** Tasks are stored in a PostgreSQL database instead of temporary local state.  
✅ **Existing Frontend Features:**  
- Login page with authentication.  
- To-Do list UI with sidebar navigation.  
- Task creation, completion, deletion, and filtering.  

## Installation & Usage

### **Frontend**
1. Install [Node.js](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/lang/en/), and [Git](https://git-scm.com/downloads).  
2. Clone this repository:
   ```sh
   git clone https://github.com/your-username/ReactJS-ToDoList.git
   cd ReactJS-ToDoList
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```
4. Start the frontend:
   ```sh
   yarn start
   ```

### **Backend** (Separate Repository)
1. Clone the backend repository:
   ```sh
   git clone https://github.com/your-username/backend-repo.git
   cd backend-repo
   ```
2. Run the backend with Docker:
   ```sh
   docker-compose up --build
   ```

## Keeping Your Fork Updated
To fetch updates from the original repository and keep your fork in sync:
```sh
git fetch upstream
git merge upstream/main
git push origin main
```

## Acknowledgments

- **Original Frontend Author:** [Matheus Cavini](https://github.com/MatheusCavini)  
- **UI Inspiration:**  
  - [Login Page by Jordan Hughes](https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI/attachments/12710737?mode=media)  
  - [Home Page by Mik Skuza](https://dribbble.com/shots/14440819-KosmoTime-Task-Manager/attachments/6121947?mode=media)  

---

