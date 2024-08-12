# README for Setting Up Node.js, NPM, and Modifying a Playwright Script

## Overview

This README will guide you through setting up Node.js, NPM, and running a Playwright script. The script interacts with a website by launching a browser, sending an HTTP POST request, and taking screenshots before and after the interaction.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installing Node.js and NPM](#installing-nodejs-and-npm)
3. [Setting Up Playwright](#setting-up-playwright)
4. [Modifying the Playwright Script](#modifying-the-playwright-script)
5. [Running the Script](#running-the-script)

## Prerequisites

Ensure you have the following:

- A machine running Windows, macOS, or Linux.
- Administrator or root access to install software.

## Installing Node.js and NPM

1. **Download and Install Node.js:**
   - Visit the [Node.js official website](https://nodejs.org/) and download the latest LTS version for your operating system.
   - Run the installer and follow the prompts.

2. **Verify Installation:**
   - Open your terminal or command prompt and run:
     ```bash
     node -v
     npm -v
     ```
   - You should see the version numbers for Node.js and npm.

## Setting Up Playwright

1. **Clone the git repo**

2. **Install node modules**
   - cd actuation-testing-script
   - npm install

## Modifying the Playwright Script
   - Change the WEBISTE_URL with your own domain
   - Change the SESSION_COOKIE_API_URL with your own
   - Change the ACCESS_TOKEN with your own

## Running the Script
   - npm start
