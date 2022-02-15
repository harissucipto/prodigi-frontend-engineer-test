## About This Repository

This repo was created for completing frontend engineering test from Prodigi

In general, this application can help a user (Guest) to be able to browse catalog for Insurance of **Asuransi Jiwa Tanpa Pengembalian Premi**

## Design Review Document

### Asuransi Jiwa Page

- [x] It have path `/asuransi/jiwa`
- [x] I can see two types of products of asuransi jiwa, they are _tanpa pengembalian premi_ and _dengan pengembalian premi_.
- [x] I only can choose a product _tanpa pengembalian premi_ by clicking that element but if i choose another product it will nothing happened.
- [x] if I choose that product I will be navigated to the page _Asuransi Jiwa Tanpa Pengembalian Premi_

### Asuransi Jiwa Tanpa Pengembalian Premi page

- [x] it have path `/asuransi/jiwa/tanpa-pengembalian-premi`
- [x] i can see a form of cari produk
- [x] it have required field of birth of date with typeof date with label Tanggal lahir
- [x] it have required field of gender with typeof radio button with values PRIA dan WANITA
- [x] it have button cari produk with label cari produk
- [x] if i not fill that form the button disabled
- [x] if i fill that form then i can click the button and it will navigate me to page _Asuransi Jiwa List Product Page_ to see of the list of insurances

### Asuransi Jiwa List Product Page

- [x] it have path `/asuransi/jiwa/info/produk`
- [x] it will displays no data if the data is not match with the filter
- [x] it will displays error if the backend of api error or connection error
- [x] it will display list of product insurances of asuransi jiwa tanpa pengembalian premi with requried params of birth of date and gender from user
- [x] the list can be sort with menu sort button
- [x] the list can be filter by Fitur with menu filter button
- [x] i can click detail of product item by click button detail and it will navigate me to page _Asuransi Jiwa Detail Produk_

### Asuransi Jiwa Detail Prouct Page

- [ ] it have path `/asuransi/jiwa/info/produk/:id`
- [ ] it will displays no data if the data is not match with the filter
- [ ] it will displays error if the backend of api error or connection error
- [ ] it will display detail of product if the data is match with the query

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
