# GitHub Search

Github search app allows an authenticated Github user to search Github repositories and users, using their search parameters.  

On landing on the app, the user is greeted with a button that reads “Login to Github”. Once logged in, the user is then redirected to a search page, where they can search Github, for
repositories or users.  

On the search results page, the search results should be categorised into two sections - Repositories and Users. Repositories should be the default results when searching.
Search results are paginated, with 10 results per page.

## How to run

### Install

Installs the dependencies from your terminal
```sh
yarn
```

### Start

Runs the app from your terminal
```sh
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to test

Launches the test runner in the terminal.

```sh
yarn test
```

## To Do: ADD MORE TEST!

The tests have only covered:
- Avatar
- GitHubButton
- LoginWithGitHubButton
- Pagination
- RepoResultTab
- UserResultTab
- ResultButton