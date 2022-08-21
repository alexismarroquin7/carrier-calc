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
  PACIFIC_BLUE: 'Pacific Blue',
  BLACK: "Black",
  WHITE: "White",
  PURPLE: "Purple",
  GRAYGREEN: "Graygreen",
  BEIGE: "Beige",
  ROSE_GOLD: "Rose Gold",
  BLACK_ONYX: "Black Onyx",
  GOLD_PLATINUM: "Gold Platinum",
  SILVER_TITANIUM: "Silver Titanium"
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
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 12 Pro Max',
    colors: [colors.SILVER, colors.GRAPHITE, colors.GOLD, colors.PACIFIC_BLUE],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 12 Pro',
    colors: [colors.SILVER, colors.GRAPHITE, colors.GOLD, colors.PACIFIC_BLUE],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 12',
    colors: [colors.BLUE, colors.GREEN, colors.BLACK, colors.WHITE, colors.PURPLE],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 12 mini',
    colors: [colors.BLUE, colors.GREEN, colors.BLACK, colors.WHITE, colors.PURPLE],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 11 Pro Max',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 11 Pro',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 11',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone Xs Max',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone Xs',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone Xr',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone X',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone SE (2022)',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone SE (2020)',
    colors: [],
    memories: [memories.thirtyTwoGB, memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone SE (2016)',
    colors: [],
    memories: [memories.thirtyTwoGB, memories.sixtyFour, memories.oneTwentyEight]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 8 Plus',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.apple,
    model: 'iPhone 8',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Z Fold 4',
    colors: [colors.GRAYGREEN, colors.PHANTOM_BLACK, colors.BEIGE],
    memories: [memories.twoFiftySixGB, memories.fiveTwelveGB, memories.oneTB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Z Flip 4',
    colors: [colors.BORA_PURPLE, colors.GRAPHITE, colors.PINK_GOLD, colors.BLUE],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s22 Ultra',
    colors: [colors.PHANTOM_BLACK, colors.PHANTOM_WHITE, colors.GREEN, colors.BURGUNDY],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB, memories.fiveTwelveGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s22 +',
    colors: [colors.PHANTOM_BLACK, colors.PHANTOM_WHITE, colors.GREEN, colors.PINK_GOLD],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s22',
    colors: [colors.BORA_PURPLE, colors.PHANTOM_BLACK, colors.PHANTOM_WHITE, colors.PINK_GOLD, colors.GREEN],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s21 Ultra',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s21 +',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s21',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s20 Ultra',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s20 +',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s20',
    colors: [],
    memories: [memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s10 +',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s10',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s9 +',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s9',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s8 +',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s8',
    colors: [],
    memories: [memories.sixtyFour, memories.oneTwentyEight, memories.twoFiftySixGB]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s7 Edge',
    colors: [colors.BLACK_ONYX, colors.GOLD_PLATINUM, colors.SILVER_TITANIUM],
    memories: [memories.thirtyTwoGB, memories.sixtyFour, memories.oneTwentyEight]
  },
  {
    id: uuid(),
    type: LINE_TYPE.SMARTPHONE,
    manufacturer: manufacturers.samsung,
    model: 'Galaxy s7',
    colors: [colors.BLACK, colors.GOLD, colors.ROSE_GOLD, colors.SILVER, colors.WHITE],
    memories: [memories.thirtyTwoGB, memories.sixtyFour, memories.oneTwentyEight]
  },
];