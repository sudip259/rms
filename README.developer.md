# Getting Started with RMS App

## Available Scripts

### To Clone the project in local server

> `git clone https://github.com/sudip259/rms.git`

### Go to root directory and run:

> `npm install`
> or, `npm install --force`

### There are only one stage and two modes in which app can run:

> modes: development | production

### different stages may have different envs

> staging:

1. REACT_APP_BASE_URL=https://destifyfunc-api-dev.azurewebsites.net/api

### To run the app in develompment mode using staging API:

> `npm run start:staging`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### To create a build of app using staging API:

> `npm run build:staging`

### Project Structure

1. src->routes->index.tsx - all routing are defined inside it
2. src->App.tsx - dashboard layout
3. src->pages - available pages in spell listing app
4. src->components - reusable components
5. src->app->store.ts - redux store
6. src->app->services - rtk queries(query & mutation)
7. src->app->features - state management
8. src->domain->axiosBaseQuery.ts - custom axios baseQuery
9. root->.env.staging - staging environment

### Used tools and libraries

1. node v18.7.0
2. react v18.2.0
3. antd "antd": "^5.1.0",
4. axios v1.2.1
5. env-cmd v10.1.0
6. lodash: v4.17.21
7. @mui/material v5.11.1
8. react-redux v8.0.5
9. react-router-dom v6.6.0
10. @reduxjs/toolkit v1.9.1
11. redux-persist v6.0.0

### Code Hosting Platform

1. Github
