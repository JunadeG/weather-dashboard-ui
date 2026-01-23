# Weather Dashboard UI (React)

This is the frontend for the Full-Stack Weather Dashboard application, built with React. It provides a simple user interface to search for a city and displays the current weather conditions fetched from its companion backend API.

## Features

*   Built with a modern, component-based architecture (`SearchBar`, `WeatherDisplay`).
*   Demonstrates core React concepts like `useState` for state management and props for parent-child communication.
*   Handles asynchronous API calls with `axios` to fetch data from its backend service.
*   Implements conditional rendering to display loading, error, and success states.
*   Styled with plain CSS for a clean, user-friendly presentation.

## Companion Backend API

This frontend requires its companion Spring Boot backend to be running. The backend is responsible for securely handling the external API key and proxying requests to the OpenWeatherMap service.

**You can find the backend project and its setup instructions here:**
### [https://github.com/JunadeG/weather-dashboard-api](https://github.com/JunadeG/weather-dashboard-api)

## Getting Started

To run this frontend application locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JunadeG/weather-dashboard-ui.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd weather-dashboard-ui
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Important:** Make sure the backend API is running before you start the frontend.
5.  **Run the application:**
    ```bash
    npm start
    ```