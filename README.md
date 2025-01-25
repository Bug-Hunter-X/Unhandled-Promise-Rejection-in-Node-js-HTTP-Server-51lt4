# Unhandled Promise Rejection in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications where an unhandled promise rejection within an asynchronous operation inside an HTTP server leads to unexpected behavior. The server might continue running, but it could fail to correctly process subsequent requests after encountering an error.

## The Bug

The `bug.js` file contains a Node.js HTTP server that performs an asynchronous operation. This operation has a 50% chance of throwing an error.  If an error occurs, the current implementation only logs it to the console.  The absence of proper error handling within the server's response handling mechanism can lead to unexpected behavior or crashes.  The server will remain responsive in most cases but subsequent requests may not be handled correctly.

## The Solution

The `bugSolution.js` file shows the corrected version.  It handles the promise rejection within the asynchronous operation, ensuring that an appropriate HTTP status code (500 Internal Server Error) and a corresponding error message are sent to the client. This guarantees a consistent and predictable response, irrespective of whether the asynchronous operation is successful or not.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Send multiple requests to `http://localhost:3000/`. Observe that errors are logged to the console, but the server remains responsive, yet may not properly handle subsequent requests.
5. Run `node bugSolution.js`. Now, even if errors occur, the server will gracefully respond with a 500 status code, ensuring clients receive appropriate feedback.