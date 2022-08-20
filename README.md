# Member Quote Comparison

This app allows wireless salesmen to efficiently create multiple quotes for a member/customer with any carrier.

## Table of Contents:

- [Key Features](https://github.com/alexismarroquin7/mpg#key-features)
- [Installation Guide](https://github.com/alexismarroquin7/mpg#installation-guide)
- [Feature Roadmap](https://github.com/alexismarroquin7/mpg#feature-roadmap)
- [Design Roadmap](https://github.com/alexismarroquin7/mpg#design-roadmap)

## Key Features

- Automatically sums due costs for today and monthly
    - includes plans (individual/shared), devices, and protection plans (individual/shared)
- Export quote
    - generates a spreadsheet with all of the provided info and due costs
    - exports a .html file
    - can be saved as a pdf to email or print
- Quick Actions
    - Duplicate quote
    - Duplicate line
    - Set plan for all devices of the same type

## Installation Guide

```bash
git clone https://github.com/alexismarroquin7/mpg
cd mpg
npm i
npm run dev
```

## Feature Roadmap

User can:

- [x]  create a quote with selected carrier
- [x]  delete a quote
- [x]  select or input an account plan
- [x]  select or input an account protection plan
- [x]  expand/collapse account details
- [x]  adds up due today costs
- [x]  adds up due monthly costs
- [x]  export selected quote as .html
- [x]  add a line (smartphone, tablet, watch, or hotspot)
- [x]  delete a line
- [x]  expand/collapse line details
- [x]  select or input line device
- [x]  select or input line plan
- [x]  select or input line protection plan
- [x]  add multiple lines at once
- [x]  toggle between quotes using tabs
- [x]  select device from menu
- [x]  show/hide quote tabs
- [x]  select plan for all lines of the same type
- [x]  select protection plan for all lines of the same type
- [x]  select device for all lines of the same type
- [ ]  export multiple quotes
- [ ]  delete multiple quotes
- [ ]  copy/paste line
- [ ]  undo
- [ ]  redo
- [ ]  add/remove custom account features
- [ ]  add/remove custom line features

## Design Roadmap

- [x]  Use color palette/theme
- [ ]  Mobile First Design
    - [x]  Portait Mode
    - [ ]  Landscape Mode
- [ ]  Tablet View
    - [ ]  Portait Mode
    - [ ]  Landscape Mode
- [ ]  Desktop View
