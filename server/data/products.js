require('dotenv').config();

const products = [
  {
    name: "Hong My Nhan #1",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mynhan.png`,
    description:
      "The Hong My Nhan has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 199,
    type: 'hong my nhan',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "Hong My Nhan #2",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mynhan.png`,
    description:
      "The Hong My Nhan has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 299,
    type: 'hong my nhan',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "Hong My Nhan #3",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mynhan.png`,
    description:
      "The Hong My Nhan has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 399,
    type: 'hong my nhan',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "Hong My Nhan #4",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mynhan.png`,
    description:
      "The Hong My Nhan has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 599,
    type: 'hong my nhan',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "Hong My Nhan #5",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mynhan.png`,
    description:
      "The Hong My Nhan has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 699,
    type: 'hong my nhan',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "phu tho #6",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/phutho.png`,
    description:
      "The phu tho has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 799,
    type: 'phu tho',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "phu tho #7",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/phutho.png`,
    description:
      "The phu tho has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 899,
    type: 'phu tho',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "phu tho #8",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/phutho.png`,
    description:
      "The phu tho has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 999,
    type: 'phu tho',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "phu tho #9",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/phutho.png`,
    description:
      "The phu tho has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 449,
    type: 'phu tho',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "phu tho #10",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/phutho.png`,
    description:
      "The phu tho has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 479,
    type: 'phu tho',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bao duy #11",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/baoduy.png`,
    description:
      "The bao duy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 419,
    type: 'bao duy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bao duy #12",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/baoduy.png`,
    description:
      "The bao duy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 219,
    type: 'bao duy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bao duy #13",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/baoduy.png`,
    description:
      "The bao duy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 319,
    type: 'bao duy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bao duy #14",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/baoduy.png`,
    description:
      "The bao duy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 419,
    type: 'bao duy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bao duy #15",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/baoduy.png`,
    description:
      "The bao duy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 519,
    type: 'bao duy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bach tuyet #16",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/bachtuyet.png`,
    description:
      "The bach tuyet has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 619,
    type: 'bach tuyet',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bach tuyet #17",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/bachtuyet.png`,
    description:
      "The bach tuyet has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 719,
    type: 'bach tuyet',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bach tuyet #18",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/bachtuyet.png`,
    description:
      "The bach tuyet has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 819,
    type: 'bach tuyet',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bach tuyet #19",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/bachtuyet.png`,
    description:
      "The bach tuyet has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 229,
    type: 'bach tuyet',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "bach tuyet #20",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/bachtuyet.png`,
    description:
      "The bach tuyet has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 329,
    type: 'bach tuyet',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "hong yen thuy #21",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/hongyenthuy.png`,
    description:
      "The hong yen thuy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 199,
    type: 'hong yen thuy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "hong yen thuy #22",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/hongyenthuy.png`,
    description:
      "The hong yen thuy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 299,
    type: 'hong yen thuy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "hong yen thuy #23",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/hongyenthuy.png`,
    description:
      "The hong yen thuy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 399,
    type: 'hong yen thuy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "hong yen thuy #24",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/hongyenthuy.png`,
    description:
      "The hong yen thuy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 599,
    type: 'hong yen thuy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "hong yen thuy #25",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/hongyenthuy.png`,
    description:
      "The hong yen thuy has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 699,
    type: 'hong yen thuy',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "co do #26",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/codo.png`,
    description:
      "The co do has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 799,
    type: 'co do',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "co do #27",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/codo.png`,
    description:
      "The co do has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 899,
    type: 'co do',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "co do #28",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/codo.png`,
    description:
      "The co do has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 999,
    type: 'co do',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "co do #29",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/codo.png`,
    description:
      "The co do has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 449,
    type: 'co do',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "co do #30",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/codo.png`,
    description:
      "The co do has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 479,
    type: 'co do',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "a hau #31",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/ahau.png`,
    description:
      "The a hau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 419,
    type: 'a hau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "a hau #32",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/ahau.png`,
    description:
      "The a hau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 219,
    type: 'a hau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "a hau #33",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/ahau.png`,
    description:
      "The a hau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 319,
    type: 'a hau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "a hau #34",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/ahau.png`,
    description:
      "The a hau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 419,
    type: 'a hau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "a hau #35",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/ahau.png`,
    description:
      "The a hau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 519,
    type: 'a hau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "mat trau #36",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mattrau.png`,
    description:
      "The mat trau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 619,
    type: 'mat trau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "mat trau #37",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mattrau.png`,
    description:
      "The mat trau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 719,
    type: 'mat trau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "mat trau #38",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mattrau.png`,
    description:
      "The mat trau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 819,
    type: 'mat trau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "mat trau #39",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mattrau.png`,
    description:
      "The mat trau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 229,
    type: 'mat trau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  },
  {
    name: "mat trau #40",
    imageUrl:
      `https://lanvar.herokuapp.com/images/products/mattrau.png`,
    description:
      "The mat trau has glossy wings, harmonious pink color on both cotton. Usually the sepals are a bit darker than the wings. The shoulder blades and the sepals stretch almost on one side.",
    price: 329,
    type: 'mat trau',
    growth: 20,
    water: 10,
    level: 1,
    day: 10
  }
];

module.exports = products;
