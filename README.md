## About This Repository

This repo was created for completing frontend engineering test from Prodigi

In general, this application can help a user (Guest) to be able to browse catalog for Insurance of **Asuransi Jiwa Tanpa Pengembalian Premi**

## Design Review Document

### Asuransi Jiwa Page

- [x] It have path `/asuransi/jiwa`
- [x] I can see two types of products of asuransi jiwa, they are _tanpa pengembalian premi_ and _dengan pengembalian premi_.
- [x] I only can choose a product _tanpa pengembalian premi_ by clicking that element but if i choose another product it will nothing happened.
- [x] if I choose that product I will be navigated to the page _Asuransi Jiwa Tanpa Pengembalian Premi_

## Development Guide

### Running in development mode

First, install the dependencies:

```bash
yarn
```

Second, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Stack

- Next.js (framework server-side rendering and static web applications for ReactJS)
- Typescript (programming language)
- Tailwind (styling)
- Axios (library used to make HTTP requests)
- React Query (library to used managed server state)
- Cypress (testing framework)
