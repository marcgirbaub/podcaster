# **Podcaster**

Podcaster is a web application that allows users to listen to podcasts online. It is built with **React** and **Typescript**.

## **Description**

The app consumes data from the iTunes API and shows the top 100 podcasts in the US. Users can navigate to the detail page of a podcast, where they will also find a list of its episodes. If an episode is clicked, users will find a brief description and the episode itself. Users can also search podcasts by podcast name and artist name.

## **Tech Stack**

- **React**
- **Typescript**
- **Vite**
- **Redux Toolkit**
- **React Query**
- **Axios**
- **React Router**
- **Vitest & React Testing Library**
- **Cypress**
- **ESLint & Prettier**
- **Github Actions**

## **Getting started**

To start the project, first you need to **install** the dependencies with npm. Run the following command in the project root:

```
npm install
```

To start the app in **development mode**, run:

```
npm run dev
```

To start the app in **production mode**, first you need to run the build and then start the website by running the following commands:

```
npm run build

npm run preview
```

## **Running tests**

To run the **test** suite, use the following command:

```
npm test // npm run test:coverage
```

To run e2e tests, run the following command and run all specs on cypress:

```
npm run cypress
```

## **Additional information and comments**

- Developed following **SOLID** and **Clean Code** principles.
- The app has been tested using **Vitest** and **React Testing Library**, with a **test coverage up to ~80%**.
- **E2E testing** has been performed with **cypress**.
- API requests are **cached** for 24hours so that a new request to an already requested url is only done when the initial request was more than a day ago.
- The app is a **Single Page Application** so that it dynamically rewrites a current page with new data instead of loading the enitre page.
