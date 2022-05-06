# Relay React Concurrency Example

[Relay](https://relay.dev/) is designed for high performance at any scale. Relay keeps management of data-fetching easy, whether your app has tens, hundreds, or thousands of components. And thanks to Relay’s incremental compiler, it keeps your iteration speed fast even as your app grows.. Relay Modern accomplishes this with static queries and ahead-of-time code generation.

This example only demonstrates the GrahQL consumption.
The data is provided by an existing [countries graphql api](https://github.com/trevorblades/countries).

## How to use

Run Relay ahead-of-time compilation (should be re-run after any edits to components that query data with Relay)

```bash
npm run relay
# or
yarn relay
```

Run the project

```bash
npm run dev
# or
yarn dev
```
