# OfficeBanao Assignment

This repository is a solution to the OfficeBanao frontend assignment. It showcases an interactive image cropping and rotating tool built with React, providing users with the ability to crop and rotate images before uploading them. The project demonstrates expertise in using React, Redux, Material-UI, and various JavaScript features to handle image processing efficiently.

---

## Features

1. **Image Upload and Preview**  
   Users can upload an image and preview it on the screen before any modifications.

2. **Image Cropping**  
   The app provides a cropping tool where users can adjust the selection area.

3. **Image Rotation**  
   Users can rotate the image to their desired orientation using a rotation handler.

4. **State Management with Redux**  
   The application uses Redux to manage state and dispatch actions for image updates.

---

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management, including actions for updating the edited images.
- **React Image Crop**: For implementing the cropping functionality.
- **Material-UI**: For UI styling and components.
- **JavaScript (ES6+)**: For the core application logic.
- **HTML5 Canvas API**: For image manipulation (cropping and rotating).
- **CSS**: For additional styling.

---

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Rishurp/OfficeBanao-Assignment.git
   cd OfficeBanao-Assignment
   ```

2. **Install dependencies**  
   Make sure you have `Node.js` installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server**  
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

---

## Usage

1. **Upload Image**  
   Click on the "Upload" button to select an image from your system.

2. **Edit Image**  
   - Use the crop tool to adjust the area you want to keep.
   - Rotate the image using the rotation functionality.

3. **Save and Dispatch**  
   - After editing, the cropped or rotated image will be processed and displayed.
   - The final image URL is dispatched to the Redux store.

---

