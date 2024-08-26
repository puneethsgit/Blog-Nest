# BlogNest

BlogNest is a full-stack blogging application built using the MERN stack. It provides a platform for users to create, read, update, and delete blog posts. The project includes authentication features like sign-up and login and utilizes Tailwind CSS for a responsive and modern user interface.

## Disclaimer

Please do not use the deployed link at this time. The frontend is working fine, but there is an issue with the backend due to a CORS policy origin error on Vercel.

## Technologies & Packages Used

- **MongoDB:** NoSQL database for flexible and scalable data storage.
- **Express.js:** Web application framework for Node.js, providing robust features for web and mobile applications.
- **Node.js:** JavaScript runtime for server-side development.
- **React.js:** A JavaScript library for building reusable UI components and efficient single-page application views.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.


## How to Install

Follow these steps to set up and run the project locally:

### Clone the Repository

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/puneethsgit/Blog-Nest.git
    cd Chat_App
    ```
    
2.  **Install Dependencies:**
    Frontend Folder :

    ```bash
    cd frontend
    npm install
    ```

    Backend Folder :

    ```bash
    cd backend
    npm install
    ```

3.  **Set Up Environment Variables:**

    Configure the following environment variables by creating a .env file in the root of Forntend and Backend Folder:

    CD to Frontend Folder change the below code in url.js:

    ```url.js
    export const URL = "http://localhost:8080";
    ```

    Backend Folder :

    ```bash
       FRONTEND_URL=http://localhost:5173
       mongoUrl="mongodb+srv://puneethblognest:princepuneeth@cluster0.cojpe.mongodb.net/"
       port=8080
       SECRET="mysuperpassword"

    ```

    Replace the values with your specific configurations.
  
4.  **Run the Application:**

    Frontend Folder :

    ```bash
    npm run dev
    ```

    Backend Folder :

    ```bash
    nodemon index.js
    ```

5.  **Open in Your Browser:**

Open `http://localhost:5173` in your web browser.

## Author

Puneeth S \
Email: puneethspunii@gmail.com \
LinkedIn : https://www.linkedin.com/in/puneeth-s-186078260/

