# environment-variables-action

This repository is a simple template for creating and testing GitHub Actions using TypeScript. It demonstrates how to build, package, and use a custom action that greets a user by name.

You can test different examples and workflows over separate branches. This allows you to experiment with changes and scenarios without affecting the main branch.

## Features

- Written in TypeScript
- Uses [@actions/core](https://github.com/actions/toolkit/tree/main/packages/core) for GitHub Actions integration
- Includes a sample workflow for testing the action
- Pre-configured with a dev container for easy development

## Usage

### Inputs

| Name | Description | Required | Default |
|------|-------------|----------|---------|
| name | The name of the person to greet | true | World |

### Example Workflow

See [.github/workflows/action.yml](.github/workflows/action.yml):

```yaml
name: Say Hello

on:
  workflow_dispatch:

jobs:
  run-my-action:
    name: Checks if this action works
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: ./
        with:
          name: 'LTomer'
```

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (pre-installed in the dev container)
- [npm](https://www.npmjs.com/) (pre-installed in the dev container)

### Build

To build the project, run:

```sh
npm run build
```

This compiles the TypeScript source in [`src/index.ts`](src/index.ts) to JavaScript in the `lib/` directory and bundles it for GitHub Actions.

### Project Structure

- [`src/index.ts`](src/index.ts): Main action source code.
- [`action.yml`](action.yml): Action metadata and input definitions.
- [`package.json`](package.json): Project dependencies and scripts.
- [`tsconfig.json`](tsconfig.json): TypeScript configuration.
- [`.github/workflows/action.yml`](.github/workflows/action.yml): Example workflow for testing the action.


## Customization

Use this template as a starting point for your own GitHub Actions. Modify the source code and inputs as needed for your use case.

## Roadmap

- In the future, support for unit tests will be added to help ensure code quality and reliability.
- Output example support will also be added, allowing you to see and test expected outputs from your action.
- Pre and post process handling will be supported, enabling you to run setup and cleanup steps around your main action logic.

## License

[ISC](LICENSE)