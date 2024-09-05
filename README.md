# Catalog Task Frontend

This task is designed to provide a frontend interface for displaying and interacting with stock price data.

## Overview

This task includes a React component that simulates fetching stock price data and displays it in a chart. The application features a tab interface to switch between different views and a time frame selector to adjust the displayed data.

## Project Structure

```
catalog-frontend/
│
├── public/
│   └── index.html       # Main HTML file for the application
│
├── src/
│   ├── components/      # Contains reusable components like RangeSwitcher
│   │   └── RangeSwitcher.js
│   ├── constants/       # Constants for tabs, timeframes, and dummy data
│   │   ├── HeaderConstants.js
│   │   └── StocksDataOverTime.js
    ├── fonts/           # Contains custom font files
│   │   └── circular-std-medium-500.ttf
│   │
│   ├── fonts.css        # Font styles used in the application
│   ├── App.css          # Application-wide styles
│   ├── App.js           # Main application component
│   └── index.js         # Entry point for the application
│
├── .gitignore           # Git ignore file
├── package.json         # Project metadata and dependencies
└── README.md            # This README file
```

## Features

- **Price Display:** Shows the current price, change, and percentage change. (from dummy data)
- **Tab Navigation:** Switch between different tabs (e.g., "Chart").
- **Timeframe Selector:** Choose between different timeframes (e.g., "1d", "1w", "1m", "1y") to update the chart data.
- **Chart Visualization:** Displays stock price data in a chart format.

## Usage

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/X0rD3v1L/catalog-frontend.git
   cd catalog-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm start
   ```

   This will start a development server and open the application in your default web browser.

## Data Handling

The application uses dummy data for demonstration purposes. To integrate real data:

- **API Integration:** Modify the `fetchData` function in `App.js` to make an API call for fetching live data.
- **WebSocket Integration:** Set up WebSocket logic in `App.js` or the `services` folder to receive real-time updates.