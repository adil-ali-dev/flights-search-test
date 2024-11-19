### Flight SEarch APP

Flight Finder

### Prerequisites

- Node.js (version 18.20.4)
- npm (Node Package Manager)

### Versions of all libraries and dependencies

VS Code

```bash
    Node.js: 18.20.4
    Sandboxed: No
```

Dependencies

```bash
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.7",
    "moment": "^2.30.1",
    "postcss-cli": "^11.0.0",
    "react": "^18.2.0",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "tailwindcss": "^3.4.15",
    "web-vitals": "^2.1.4"
```

## Run Locally

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm  start
```

### Information on architecture and design

React used for frontend, and tailwind for styling while utilizing rapidApi flights endpoints .

### Environment Variables

To run this application, you need to set up some environment variables. Update the existing .env file in the root of the project and add the following:

REACT_APP_RAPID_API_KEY=
REACT_APP_RAPID_API_HOST=
REACT_APP_BASE_URL=
REACT_APP_DEFAULT_LAT=
REACT_APP_DEFAULT_LONG=
REACT_APP_GEOAPIFY_API_KEY=
REACT_APP_GEOAPIFY_BASE_URL_API_KEY=

### App/code structure explanation

Entry point

```
:.
|   .env
|   package-lock.json
|   package.json
|   README.md
|   tailwind.config.js
|
src
    ├───api
    ├───components
    │   ├───CardCompoment
    │   ├───DialogBox
    │   ├───FeaturesSection
    │   ├───FlightCard
    │   ├───HeroSection
    │   ├───Loader
    │   ├───MapSection.js
    │   ├───Navbar
    │   ├───NoDataComponent
    │   ├───SearchBox
    │   └───SelectFilter
    ├───configs
    ├───constants
    ├───fonts
    │   └───static
    ├───pages
    ├───routes
    │   └───PublicRoutes
    ├───services
    └───utils
```
