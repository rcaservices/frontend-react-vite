# frontend-react-vite
Frontend React + Vite site

# Structure
```
frontend/
│── Dockerfile
│── docker-compose.yml
│── .dockerignore
│── .env
│── package.json
│── vite.config.js
│── index.html
│── src/
│   ├── assets/          # Static assets (images, logos, icons)
│   ├── components/      # Reusable components (buttons, forms, modals)
│   ├── pages/           # Pages (Login, Dashboard, Home)
│   ├── styles/          # Global styles (CSS, SCSS, Tailwind)
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # React entry point
│   ├── hooks/           # Custom hooks (if needed)
│   ├── context/         # Context API for state management
│── public/
│   ├── favicon.ico
│   ├── robots.txt
│── README.md
```
# Project Structure Update
```
src/
│── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Button.jsx
│── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│── App.jsx
│── main.jsx
│── styles/global.css
```

# Install Dependencies
Before proceeding, ensure you have Tailwind CSS installed:

``` sh
cd frontend
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```



# Running the App
After adding all these files, start your app:

``` sh
npm run dev
```
If you're using Docker:

```sh
docker build -t my-frontend .
docker run -p 3000:3000 my-frontend
```
