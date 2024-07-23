# IndigoLearn ACCA App Preparation Website

This project is a web application designed to help users prepare for ACCA certification with a range of features including user registration, course enrollment, and placement assistance.

## Technologies Used

- **Frontend**: React
- **Styling**: React Bootstrap, CSS Modules
- **Icons**: React Icons

## Installation

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Steps

To run the project locally:
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/indigo-learn-app.git
2. **Navigate to the Project Directory**
    ```bash
    cd indigo-learn-app
3. **Install Dependencies**
    ```bash
    npm install

## Running the Application

To start the application, run:
1. **Start the Application**
    ```bash
    npm start
2. **Open in Browser**
    The application will be running at http://localhost:3000.

## Components

The application is divided into several key components:

### 1. `Header`

This component provides the navigation bar for the website, including links to different sections and a login/signup button. It supports both desktop and mobile views with a responsive design.

- **Description**: The `Header` component includes both desktop and mobile views for navigation and user interaction.

### 2. `BecomeACCA`

This component highlights the key benefits and statistics of becoming an ACCA in 18 months. It includes icons and statistics about registered users, courses enrolled, minutes watched, and faculty.

- **Description**: Displays statistics using icons and descriptive text. Includes a form for user contact.

### 3. `ChooseUs`

This component explains why users should choose this platform, focusing on expert faculty, a complete success package, and placement opportunities. It uses icons to visually represent each point.

- **Description**: Features cards with icons and descriptions outlining the benefits of choosing IndigoLearn.

### 4. `Eligibility`

This component details the eligibility criteria and structure of the ACCA certification, including levels, duration, exams, and exemptions.

- **Description**: Uses cards to display information about levels, duration, exams, and exemptions.

### 5. `Form`

This component is a contact form for users to get in touch with the platform for more information about ACCA. It includes fields for phone number, email ID, current qualification, and preferred method of communication. Upon submission, a modal confirms the request.

- **Description**: Collects user phone number, email, current qualification, and preferred contact method. Displays a success modal upon form submission.

### 6. `LearnInACCA`

This component outlines the different levels and subjects covered in the ACCA certification, including knowledge level, skill level, and professional level.

- **Description**: Uses cards to list subjects at different levels of ACCA certification.

### 7. `Placement`

This component highlights the placement assistance provided by the platform, including resume building, career counseling, and job opportunities.

- **Description**: Lists the services provided by the placement cell with descriptions.

### 8. `PrepJourney`

This component encourages users to start their ACCA prep journey with the platform, offering instant access to free courses upon signing in. It includes a form for requesting further information.

- **Description**: Includes a promotional message and a form for users to sign up and get access to free courses.

## App.js
The `App.js` file serves as the main entry point of the application. It imports and renders all the key components (Header, BecomeACCA, ChooseUs, Eligibility, LearnInACCA, Placement, PrepJourney) to build the complete web page.


## Dependencies

The project uses the following main dependencies:

- React
- React Icons
- React Bootstrap

## Styling

The project is styled using CSS, with classes defined in individual CSS files for each component. The `App.css` file contains global styles.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
