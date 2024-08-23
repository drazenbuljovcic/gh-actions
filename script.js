import { Octokit } from "octokit";

// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: process.env.KEY,
});

octokit.request(
  "POST /repos/drazenbuljovcic/gh-actions/actions/workflows/113836501/dispatches",
  {
    ref: "main",
    inputs: {
      message: "Hello from script!",
    },
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }
);
