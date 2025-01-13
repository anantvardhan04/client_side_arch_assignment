# Microfrontends Setup

This document provides instructions to run the three microfrontends using `yarn` and `yarn start` commands.

## Microfrontends

1. **Container App**
    - Runs on: `localhost:3002`
2. **getPremium**
    - Runs on: `localhost:3000`
3. **payPremium**
    - Runs on: `localhost:3001`

## Prerequisites

- Ensure you have `yarn` installed. If not, you can install it from [here](https://classic.yarnpkg.com/en/docs/install).

## Running the Microfrontends

### Step 1: Install Dependencies

Navigate to each microfrontend directory and install the dependencies and start the server using `yarn && yarn start`.


```bash
# Open a New terminal and enter below command:
cd client_side_arch_assignment/home && yarn && yarn start
```
```bash
# Open a New terminal and enter below command:
cd client_side_arch_assignment/getPremium && yarn && yarn start
```
```bash
# Open a New terminal and enter below command:
cd client_side_arch_assignment/payPremium && yarn && yarn start
```

### Accessing the Applications

- **Container App**: [http://localhost:3002](http://localhost:3002)
- **getPremium**: [http://localhost:3000](http://localhost:3000)
- **payPremium**: [http://localhost:3001](http://localhost:3001)

Now you should be able to access and interact with each microfrontend on their respective ports.
