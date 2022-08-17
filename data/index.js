import { v4 as uuid } from "uuid";

export const memories = {
  thirtyTwoGB: '32GB',
  sixtyFour: '64GB',
  oneTwentyEight: '128GB',
  twoFiftySixGB: '256GB',
  fiveTwelveGB: '512GB',
  oneTB: '1TB',
}

export const colors = {
  black: 'Black',
  white: 'White',
  red: 'Red',
  blue: 'Blue',
  orange: 'Orange',
  green: 'Green',
  purple: 'Purple',
  yellow: 'Yellow',
}

export const manufacturers = {
  apple: 'Apple',
  samsung: 'Samsung',
  google: 'Google'
}


export const LINE_TYPE = {
  SMARTPHONE: 'smartphone',
  TABLET: 'tablet',
  WATCH: 'watch',
  HOTSPOT: 'hotspot'
}

export const devices = [
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 13 Pro Max',
    colors: [colors.green],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 13 Pro',
    colors: [colors.blue],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 13',
    colors: [colors.black],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 's22 Ultra',
    colors: [colors.black],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 's22 +',
    colors: [colors.black],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 's22',
    colors: [colors.black],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
];