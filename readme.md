# Question Paper Generator

This is a Node.js application that generates a randomized question paper based on difficulty distribution.


## Introduction

The Question Paper Generator is a Node.js application designed to generate question papers with a specified difficulty distribution. It utilizes a simple algorithm to randomly select questions from different difficulty levels, creating diverse and unpredictable question papers.

## Features

- Randomized question paper generation.
- Flexible difficulty distribution configuration.
- Modular code structure.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

Install dependencies:

npm install

## Usage

Run the application using:

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">node index.js
</code></div></div></pre>

it prompts the data having the desired percentage and marks.

## Project Structure

<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>diff</span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-diff">- node_modules/
- src/
  - questionStore.js
  - questionPaperGenerator.js
- index.js
README.md
</code></div></div></pre>

* `src/`: Contains source code modules.
  * `questionStore.js`: Module to manage the question store and having the demo data.
  * `questionPaperGenerator.js`: Module to generate question papers.
* `index.js`: Entry point for running the application.

## Data

There is a `questionStore.js` file in the root/src directory, which contains sample questions.

## Modules

### questionStore.js

* `getAllQuestions()`: Returns an array of all questions.

### questionPaperGenerator.js

* `generateQuestionPaper(totalMarks, distribution)`: Generates a question paper based on total marks and difficulty distribution.


<pre><div class="bg-black rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 gizmo:dark:bg-token-surface-primary px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>Last but not Least!</span></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-vbnet">
Again, make sure to replace `<repository-url>` with the actual URL of your GitHub </code></div></div></pre>
