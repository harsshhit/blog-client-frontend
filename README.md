

# Blog App - Frontend

This is the frontend of the Blog App, built using modern technologies to provide a responsive and user-friendly interface for users to explore and manage posts.

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [Code Structure](#code-structure)
6. [User Interface](#user-interface)
7. [Error Handling](#error-handling)
8. [Version Control](#version-control)
9. [Deployment](#deployment)
10. [Additional Notes](#additional-notes)

## Features
- User authentication (login/register).
- Add, update, and delete posts.
- Search functionality with real-time results.
- Responsive design with navigation and content sections.

## Technologies Used
- **React**: For building the user interface.
- **Zustand**: For state management.
- **Tailwind CSS**: For styling components.
- **Axios**: For making API requests.
- **Heroicons**: For icons in the UI.

## Installation

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-app-frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd blog-app-frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application
Start the development server:
```bash
npm start
```
The application will be available at `http://localhost:3000`.

## Code Structure

```
src/
│
├── api/              # Axios instance for API calls
├── components/       # Reusable UI components (Navbar, Post, FlashcardArticle)
├── pages/            # Page components (Home, Login, Register)
├── store/            # Zustand store for state management
├── App.js            # Main application component
└── index.js          # Entry point for React
```

## User Interface
The application is designed to be responsive across various screen sizes. Key components include:
- **Navbar**: Top navigation bar with authentication controls and a button to add posts.
- **FlashcardArticle**: Displays featured content.
- **Post**: Displays individual blog posts with title, excerpt, and content.

## Error Handling
- **API Errors**: Error messages are displayed to the user when API requests fail.
- **Form Validation**: Proper validation is implemented for login and registration forms.

## Version Control
The project is managed using Git. Make sure to commit changes regularly and follow best practices for commit messages. You can check the repository at:
[GitHub Repository](https://github.com/yourusername/blog-app-frontend)

## Deployment
To deploy the application:
1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy the `build` directory to your hosting service of choice (e.g., Vercel, Netlify).

### Example:
To deploy using Vercel:
```bash
npm install -g vercel
vercel
```

## Additional Notes
- Make sure the backend is running to interact with the API.
- Environment variables should be configured for production builds.
- Deployment documentation is included in the backend repository.
