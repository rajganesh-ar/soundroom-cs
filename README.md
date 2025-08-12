# Coming Soon Page

This project is a simple "Coming Soon" page built with Node.js and Express. It features a video background and is designed to inform visitors that the website is under construction.

## Project Structure

```
coming-soon-app
├── src
│   ├── server.js        # Entry point of the application
│   └── views
│       └── index.ejs    # EJS template for the coming soon page
├── public
│   ├── styles.css       # CSS styles for the coming soon page
│   └── video
│       └── background.mp4 # Video file for the background
├── package.json         # NPM configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd coming-soon-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the server:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` to view the coming soon page.

## Usage

The application serves a simple coming soon page with a video background. You can customize the message and styles by editing the `src/views/index.ejs` and `public/styles.css` files respectively.

## License

This project is licensed under the MIT License.