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
  ALPINE_GREEN: 'Alpine Green',
  SILVER: 'Silver',
  GRAPHITE: 'Graphite',
  GOLD: 'Gold',
  SIERRA_BLUE: 'Sierra Blue',
  PRODUCT_RED: 'Red',
  GREEN: 'Green',
  PINK: 'Pink',
  BLUE: 'Blue',
  MIDNIGHT: 'Midnight',
  STARLIGHT: 'Starlight',
  PHANTOM_BLACK: 'Phantom Black',
  PHANTOM_WHITE: 'Phantom White',
  BURGUNDY: 'Burgundy',
  PINK_GOLD: 'Pink Gold',
  BORA_PURPLE: 'Bora Purple',
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
    colors: [colors.ALPINE_GREEN, colors.GRAPHITE, colors.GOLD, colors.SIERRA_BLUE],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 13 Pro',
    colors: [colors.ALPINE_GREEN, colors.GRAPHITE, colors.GOLD, colors.SIERRA_BLUE],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 13',
    colors: [colors.GREEN, colors.PINK, colors.BLUE, colors.MIDNIGHT, colors.STARLIGHT, colors.PRODUCT_RED],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 13 mini',
    colors: [colors.GREEN, colors.PINK, colors.BLUE, colors.MIDNIGHT, colors.STARLIGHT, colors.PRODUCT_RED],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 's22 Ultra',
    colors: [colors.PHANTOM_BLACK, colors.PHANTOM_WHITE, colors.GREEN, colors.BURGUNDY],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 's22 +',
    colors: [colors.PHANTOM_BLACK, colors.PHANTOM_WHITE, colors.GREEN, colors.PINK_GOLD],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 's22',
    colors: [colors.BORA_PURPLE, colors.PHANTOM_BLACK, colors.PHANTOM_WHITE, colors.PINK_GOLD, colors.GREEN],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB]
  },
];