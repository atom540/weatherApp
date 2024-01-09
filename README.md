# Weather Forecast App

## Overview

This mobile application provides a 5-day or more days weather forecast for a chosen location. Users can enter a location, and the app will retrieve the temperature and weather details for the current day and the upcoming four days.

## Features

- **Location Input**: Users can input the desired location for which they want to check the weather forecast.

- **Temperature Display**: The app displays the current temperature along with a detailed forecast for the next five days.

- **Weather Details**: Users can view additional weather details such as humidity, wind speed, and weather conditions for each day.

## Tech Stack

- **React Native**: The app is built using React Native, allowing for cross-platform compatibility.

- **REST API**: A mock REST API is used to simulate fetching weather data for the specified location.

## Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/atom540/weatherApp.git

2. Run the App:
     ```bash
     npx react-native run-android
     npx react-native run-ios
   


## Usage

1. Launch the app on your device or emulator.

2. Enter the desired location in the provided input field.

3. Press the "Get Forecast" button.

4. View the temperature and weather details for the next five days.




 ## Mock API

The app uses a mock REST API to simulate fetching weather data. The API is available at https://openweathermap.org/guide.

### Example API Endpoint

For testing purposes, you can use the following example API endpoint:
    ```bash
      api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.






   
