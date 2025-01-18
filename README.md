## Unique Character Finder API


This project includes a JavaScript function uniqueChar that finds the index of the first non-repeating character in a given string. Additionally, the function is exposed via a Node.js API endpoint.

## Features

Functionality:

The uniqueChar function identifies the index of the first unique character in a string.

Returns -1 if no unique character exists.

API Endpoint:

POST /first-unique-character

Accepts a JSON payload containing a string and returns the first unique character and its index, along with a timestamp.

**Input Validation:**

Ensures valid JSON input and returns appropriate error messages for invalid input.

Console Logging:

Logs endpoint hits with input data and timestamp.

## Installation

Clone the repository:
 ```bash
git clone https://github.com/your-username/unique-char-api.git
cd unique-char-api
```

Install dependencies:
```bash
npm install
```

Start the server:
```bash
npm start
```

## API Usage

Endpoint 

POST /first-unique-character

Request
Headers:
```bash
Content-Type: application/json
```
Body:
```bash
{
  "text_to_process": "your_string_here"
}
```
 Response 
Success Response:
```bash
{
  "first_unique_char": "k",
  "first_unique_char_index": 0,
  "timestamp": "2025-01-16T12:34:56Z"
}
```

## Tools Used

Node.js: Backend framework

Express: Web framework for Node.js


