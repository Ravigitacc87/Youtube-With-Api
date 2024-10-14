# YouTube Clone

This is a YouTube clone built using **HTML**, **CSS**, **JavaScript**, and **YouTube Data API v3**. The project allows users to view popular videos and fetch details from the YouTube API. Users can also scroll to load more videos dynamically, with a loader displayed after every 8 videos.

## Features

- Displays popular YouTube videos using the **YouTube Data API**.
- Infinite scrolling: Loads 8 videos at a time as the user scrolls down.
- Fully responsive layout.
- Sidebar toggle functionality for improved user experience.
- Dynamic fetching of channel icons and video thumbnails.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**
- **YouTube Data API v3**

## Screenshots

Here are some screenshots of the project:

- **Home Page with Video Cards**
  ![Screenshot of Home Page](./Images/Screenshot(Home).png)

- **Sidebar Expanded**
  ![Screenshot of Sidebar](./Images/Screenshot(Sidebar).png)


## Project Preview

You can check out a live preview of the project [here](https://ravigitacc87.github.io/Youtube-With-Api/).

**Main Features**:
- View most popular videos.
- Sidebar toggle with animation.
- Scroll to load more videos with a loader.

*(Make sure to replace the link with your live demo URL if applicable)*

## Installation

To run this project locally, follow these steps:

### Prerequisites

1. **API Key**: You need a Google API Key to fetch data from the YouTube API.
   - Create a project in [Google Cloud Console](https://console.cloud.google.com/).
   - Enable the **YouTube Data API v3** for your project.
   - Create credentials to get your **API Key**.

2. **XAMPP/WAMP**: If you're using PHP in the project for serving static files, make sure to run it on **XAMPP** or any local server tool.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Ravigitacc87/youtube-clone.git
   ```

2. Navigate into the project directory:

   ```bash
   cd youtube-clone
   ```

3. Open the `index.html` file in your browser or run the project using a local server like XAMPP or WAMP.

4. Replace the placeholder `API_KEY` in the JavaScript code with your actual API Key:

   ```javascript
   let api_key = "YOUR_API_KEY";
   ```

## Usage

### Sidebar Toggle

The sidebar can be toggled using the menu icon. The sidebar will resize, and the main container will adjust accordingly.

### Infinite Scroll

As you scroll to the bottom of the page, the app loads more video cards (8 at a time) dynamically, simulating an infinite scroll feature.

### Video Display

Each video card contains:
- A video thumbnail.
- Channel logo.
- Video title and channel name.

You can click on the video card to navigate directly to the video on YouTube.

## API Integration

This project integrates with the **YouTube Data API v3** to fetch popular videos and channel details. The following endpoints are used:

1. **Videos Endpoint**: Retrieves the most popular videos.
   ```javascript
   https://www.googleapis.com/youtube/v3/videos
   ```

2. **Channels Endpoint**: Retrieves channel information such as the channel's logo.
   ```javascript
   https://www.googleapis.com/youtube/v3/channels
   ```

### Example API Call

Fetching popular videos:

```javascript
fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 20,
    regionCode: 'US'
}))
```

## Project Structure

```
youtube-clone/
├── index.html          # Main HTML file
├── style.css           # Stylesheet for the project
├── script.js           # JavaScript file with API logic
├── README.md           # Project documentation
└── assets/             # Images, fonts, etc.
```

## Future Enhancements

- Add search functionality to allow users to search for videos.
- Implement video categories and filtering.
- Improve styling and UI responsiveness.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Acknowledgments

- [Google Developers - YouTube Data API v3](https://developers.google.com/youtube/v3)
- [FontAwesome](https://fontawesome.com/) for the icons used in the project.

---
