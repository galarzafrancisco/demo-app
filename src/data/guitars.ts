export interface Guitar {
  id: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  category: string;
}

export const guitars: Guitar[] = [
  {
    id: 'fender-telecaster',
    name: 'Fender Telecaster',
    brand: 'Fender',
    model: 'American Professional II Telecaster',
    price: 1799,
    description: 'The classic Telecaster sound with modern refinements. Features include V-Mod II Telecaster pickups and a deep C neck profile.',
    features: [
      'V-Mod II Telecaster single-coil pickups',
      'Deep C neck profile',
      'Super-Natural satin finish on neck',
      'Bone nut',
      'Vintage-style steel saddles',
      '6-saddle string-through-body Tele bridge'
    ],
    imageUrl: '🎸',
    category: 'Electric'
  },
  {
    id: 'fender-stratocaster',
    name: 'Fender Stratocaster',
    brand: 'Fender',
    model: 'American Professional II Stratocaster',
    price: 1849,
    description: 'The iconic Stratocaster with contemporary upgrades. V-Mod II pickups and a comfortable Deep C neck profile.',
    features: [
      'V-Mod II Stratocaster single-coil pickups',
      'Deep C neck profile',
      '2-point tremolo with cold-rolled steel block',
      'Bone nut and Super-Natural satin finish',
      'Rolled fingerboard edges',
      '5-position blade switch'
    ],
    imageUrl: '🎸',
    category: 'Electric'
  },
  {
    id: 'gretsch-white-falcon',
    name: 'Gretsch White Falcon',
    brand: 'Gretsch',
    model: 'G6136T White Falcon',
    price: 4999,
    description: 'The legendary White Falcon delivers iconic tone and stunning aesthetics. Premium craftsmanship meets vintage style.',
    features: [
      'TV Jones Ray Butts Ful-Fidelity pickups',
      'Gold sparkle binding',
      'Ebony fingerboard with pearl block inlays',
      'Bigsby B6GBVT vibrato tailpiece',
      'FilterTron style pickups',
      'Premium white finish with gold hardware'
    ],
    imageUrl: '🎸',
    category: 'Electric'
  },
  {
    id: 'gibson-les-paul',
    name: 'Gibson Les Paul Standard',
    brand: 'Gibson',
    model: 'Les Paul Standard 60s',
    price: 2699,
    description: 'Classic Les Paul tone with vintage 60s specifications. Burstbucker pickups and SlimTaper neck profile.',
    features: [
      'Burstbucker 61 pickups',
      'SlimTaper mahogany neck',
      'Rosewood fingerboard',
      'ABR-1 Tune-O-Matic bridge',
      'Vintage Deluxe tuners',
      'Nitrocellulose lacquer finish'
    ],
    imageUrl: '🎸',
    category: 'Electric'
  },
  {
    id: 'prs-custom-24',
    name: 'PRS Custom 24',
    brand: 'PRS',
    model: 'Custom 24',
    price: 4200,
    description: 'Versatile tone machine with stunning aesthetics. 85/15 pickups deliver clarity and warmth across the entire tonal spectrum.',
    features: [
      '85/15 treble and bass pickups',
      'Pattern Thin mahogany neck',
      '5-way blade pickup selector',
      'PRS tremolo bridge',
      'Locking tuners',
      'Figured maple top'
    ],
    imageUrl: '🎸',
    category: 'Electric'
  },
  {
    id: 'martin-d28',
    name: 'Martin D-28',
    brand: 'Martin',
    model: 'D-28 Standard',
    price: 3599,
    description: 'The gold standard of acoustic guitars. Rich, balanced tone with powerful projection and clarity.',
    features: [
      'Solid Sitka spruce top',
      'Solid East Indian rosewood back and sides',
      'Forward shifted X-bracing',
      'Ebony fingerboard and bridge',
      'High-performance taper neck',
      'Premium hardshell case included'
    ],
    imageUrl: '🎸',
    category: 'Acoustic'
  }
];
