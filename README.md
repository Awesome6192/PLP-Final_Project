HealthHaven

Introduction

HealthHaven is a web application designed to foster a community where users can share content, engage in discussions, and explore topics related to health and well-being. This MVP (Minimum Viable Product) focuses on providing users with a platform to interact, track health metrics, and access wellness resources.

Inspiration
As health and wellness become increasingly important, HealthHaven aims to create a space where users can connect, exchange knowledge, and support each other on their health journeys. The platform's goal is to provide a comprehensive solution for managing personal wellness and fostering community engagement.

Technical Challenge
Building a platform that not only enables content sharing and community discussions but also ensures the security of user data was a key challenge. Maintaining a seamless, responsive experience across devices while integrating real-time interactions required careful planning and development.

Features

- User Registration and Authentication: Users can create accounts, log in securely, and engage in discussions and content sharing.
- Discussion Forums: Users can participate in discussions, share experiences, and ask questions about health and well-being topics.
- Content Sharing: Post articles, tips, or personal stories to inspire and educate the community.
- Health Metrics Tracking: Track daily health data, including physical activity, sleep, and nutrition.
- Personalized Wellness Plans: Receive customized wellness suggestions based on user data.
- Responsive UI: The platform is designed for seamless access on both desktop and mobile devices.

Technology Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL (for user profiles, discussions, and shared content)

Setup Instructions

Prerequisites

Ensure that the following tools are installed on your machine:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)

Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/your-username/HealthHaven.git
   cd HealthHaven
   ```

2. Install Dependencies:

   ```bash
   npm install
   ```

3. Set Up MySQL Database:

   - Create a MySQL database (e.g., `healthhaven`).
   - Update the `.env` file with your database credentials:

     ```env
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=yourpassword
     DB_NAME=healthhaven
     ```

4. Migrate the Database (Optional):

   ```bash
   npx sequelize db:migrate
   ```

5. Set Up Environment Variables:

   - Create a `.env` file with your settings:

     ```env
     PORT=3000
     ```

6. Start the Server:

   ```bash
   npm start
   ```

   Your server should now be running at `http://localhost:3000`.

Usage

- Navigate to `http://localhost:3000` in your browser.
- Register for an account, share content, engage in discussions, and track your health metrics.

Testing

You can run automated tests with:

```bash
npm test
```

Contributing

We welcome contributions to HealthHaven! If you'd like to contribute, please follow these steps:

1. Fork the Repository: Create a personal copy of the repository on GitHub.
2. Clone Your Fork:

   ```bash
   git clone https://github.com/your-username/HealthHaven.git
   ```

3. Create a Branch:

   ```bash
   git checkout -b feature-branch-name
   ```

4. Make Changes: Implement your changes or new features.
5. Commit Your Changes:

   ```bash
   git commit -am 'Add new feature'
   ```

6. Push to Your Fork:

   ```bash
   git push origin feature-branch-name
   ```

7. Submit a Pull Request: Open a pull request on the original repository with a clear description of your changes.

License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Acknowledgements

- [GitHub](https://github.com/): For providing the platform to manage this project.

HealthHaven was built with care and dedication to creating a positive, health-focused community. We hope it inspires, educates, and fosters meaningful connections around well-being.

Personal Story

Building HealthHaven has been an exciting journey, particularly the challenge of integrating community features with health tracking. Seeing users share content and engage in discussions is a fulfilling experience.

Future Plans

In future iterations, HealthHaven will incorporate advanced features like health device integration and improved community tools such as live chat and real-time updates.

Thank you for exploring HealthHaven! Your feedback and participation are greatly appreciated.

Links

- Deployed Site: [HealthHaven Live]
- Author LinkedIn: [Christian Chibuike](https://www.linkedin.com/in/christian-chibuike)

Screenshots

Landing Page of HealthHaven
![Landing Page](public/images/Landing%20Page.png)

Login Page of HealthHaven
![Login Page](public/images/Login%20Page.png)

Home Page of HealthHaven
![Home Page](public/images/Home%20Page.png)

We hope you enjoy exploring HealthHaven and contributing to a healthier, more connected world!