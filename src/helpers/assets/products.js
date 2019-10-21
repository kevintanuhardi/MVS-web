const productList = [
  {
    _id: 1,
    name: 'Mini Plate Straight type 1',
    description: '',
    category: 3,
    variances: [
      'Width 4mm, 5 hole, Length 25mm, Screw 1.5mm',
      'Width 4mm, 6 hole, Length 30mm, Screw 1.5mm',
      'Width 4mm, 7 hole, Length 35mm, Screw 1.5mm',
      'Width 5mm, 5hole, Length 30mm, Screw 2.0mm',
      'Width 5mm, 6hole, Length 36mm, Screw 2.0mm',
      'Width 5mm, 7 hole, Length 42mm, Screw 2.0mm',
      'Width 6mm, 6 hole, Length 48mm, Screw 2.0mm',
      'Width 6mm, 7 hole, Length 56mm, Screw 2.0mm',
      'Width 6mm, 8 hole, Length 64mm, Screw 2.0mm',
      'Width 8mm, 8 hole, Length 80mm, Screw 2.7mm',
      'Width 10mm, 9 hole, Length 108mm, Screw 3.5mm',
      'Width 12mm, 12 hole, Length 160mm, Screw 3.5mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/mini-plate-straight-type1.png`,
        altText: 'Mini Plate Straight type-1 1',
      }
    ]
  },
  {
    _id: 2,
    name: 'Straight Non-Continue Hole Plate',
    description: '',
    category: 3,
    variances: [
      'Width 4mm, 5 hole, Length 30mm, Screw 1.5mm',
      'Width 4mm, 6 hole, Length 35mm, Screw 1.5mm',
      'Width 4mm, 7 hole, Length 40mm, Screw 1.5mm',
      'Width 5mm, 5 hole, Length 36mm, Screw 2.0mm',
      'Width 5mm, 6 hole, Length 42mm, Screw 2.0mm',
      'Width 5mm, 7 hole, Length 48mm, Screw 2.0mm',
      'Width 6mm, 6 hole, Length 56mm, Screw 2.0mm',
      'Width 6mm, 7 hole, Length 64mm, Screw 2.0mm',
      'Width 6mm, 8 hole, Length 72mm, Screw 2.0mm',
      'Width 8mm, 8 hole, Length, 90mm, Screw 2.7mm',
      'Width 8mm, 9 hole, Length 100mm, Screw 2.7mm',
      'Width 10mm, 11 hole, Length 140mm, Screw 3.5mm',
      'Width 10mm, 10 Hole, Length 128mm, Screw 3.5mm',
      'Width 12mm, 11 hole, Length 150mm, Screw 3.5mm',
      'Width 12mm, 13 hole, Length 150mm, Screw 3.5mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/straight-non-continue-hole-plate.png`,
        altText: 'Straight Non-continue hole plate 1',
      }
    ]
  },
  {
    _id: 3,
    name: 'Reconstruction Plate',
    description: '',
    category: 3,
    variances: [
      'Width 3mm, 23 hole, Length 103mm, Screw 1.0mm',
      'Width 4mm, 23 hole, Length 118mm, Screw 1.5mm',
      'Width 5mm, 25 hole, Length 150mm, Screw 2.0mm',
      'Width 6mm, 20 Hole, Length 160mm, Screw 2.0mm',
      'Width 8mm, 20 hole, Length 200mm, Screw 2.7mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/reconstruction-plate.png`,
        altText: 'Reconstruction Plate 1',
      }
    ]
  },
  {
    _id: 4,
    name: 'Long Straight Plate',
    description: '',
    category: 3,
    variances: [
      'Width 3mm, 23 hole, Length 103mm, Screw 1.0mm',
      'Width 4mm, 23 hole, Length 118mm, Screw 1.5mm',
      'Width 5mm, 25 hole, Length 150mm, Screw 2.0mm',
      'Width 6mm, 20 Hole, 160mm, Screw 2.0mm',
      'Width 8mm, 20 hole, Length 200mm, Screw 2.7mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/long-straight-plate.png`,
        altText: 'Long Straight Plate 1',
      }
    ]
  },
  {
    _id: 5,
    name: 'Golf Plate',
    description: '',
    category: 3,
    variances: [
      "Width 5mm, \n10 hole, \nLength 43mm, \nScrew 1,5mm",
      "Width 6mm, \n10 hole, \nLength 57mm, \n Screw 2.0mm",
      "Width 8mm, \n8 hole, \nLength 52mm, \n Screw 2,7mm",
      "Width 10mm, \n10 hole, \nLength 85m, \n Screw 3.5mm",
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/golf-plate.png`,
        altText: 'Golf Plate 1',
      }
    ]
  },
  {
    _id: 6,
    name: 'Pelvic Plate / Butterfly Plate',
    description: '',
    category: 3,
    variances: [
      'Width 6mm, 6 hole, Length 25mm, Screw 2.0mm',
      'Width 8mm, 6 hole, Length 38mm, Screw 2.7mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/pelvic-plate.png`,
        altText: 'Pelvic Plate 1',
      }
    ]
  },
  {
    _id: 7,
    name: 'T Plate',
    description: '',
    category: 3,
    variances: [
      'Width 4mm, 6 hole, Length 32mm, Screw 1.5mm',
      'Width 5mm, 9 hole, Length 60 mm, Screw 2.0mm',
      'Width 6mm, 7 hole, Length 42mm, Screw 2.0mm',
      'Width 6mm, 9 hole, Length 70mm, Screw 2.0mm',
      'Width 8mm, 8 hole, Length 68mm, Screw 2.7mm',
      'Width 8mm, 10 hole, Length 88mm, Screw 2.7mm',
      'Width 10mm, 7 hole, Length 72mm, Screw 3.5mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/t-plate.png`,
        altText: 'T Plate 1',
      }
    ]
  },
  {
    _id: 8,
    name: 'Acetabular Plate',
    description: '',
    category: 3,
    variances: [
      'Width 4mm, 4 hole, Length 25mm, Screw 2.0mm',
      'Width 5mm, 6 hole, Length 30mm, Screw 2.0mm',
      'Width 6mm, 6 hole, Length 35mm, Screw 2.7mm',
    ],
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/acetabular-plate.png`,
        altText: 'Acetabular Plate 1',
      }
    ]
  },
  {
    _id: 9,
    name: 'Depth Guide',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/depth-guide.png`,
        altText: 'Depth Guide 1',
      }
    ]
  },
  {
    _id: 10,
    name: 'Needle Holder',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/needle-holder.png`,
        altText: 'Needle Holder 1',
      }
    ]
  },
  {
    _id: 11,
    name: 'Cancellous Screw',
    description: '',
    category: 4,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/cancellous-screw.png`,
        altText: 'Cancellous Screw 1',
      }
    ],
    specificationTable: {
      Material: 'thick, strong & high quality stainless steel',
    },
    variances: [
      "2.0mm : 14, 16, 18 mm",
      "2.7mm : 15, 20, 25 mm",
      "3.0mm : 20, 25, 30mm",
      "3.5mm : 15, 20, 25, 30, 35mm",
    ]
  },
  {
    _id: 12,
    name: 'Cortical Screw',
    description: '',
    category: 4,
    
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/cortical-screw.png`,
        altText: 'Cortical Screw 1',
      }
    ],
    specificationTable: {
      Material: 'thick, strong & high quality stainless steel',
    },
    variances: [
      	"1.0mm : 4 , 6, 8, 10, 12 mm ",
      	"1.5mm : 6, 8, 10, 12, 14, 16 mm",
      	"2.0mm : 8, 10, 12, 14, 16, 18mm",
      	"2.7mm : 10, 12, 14, 16, 18, 20mm",
      	"3.5mm : 15, 20, 25, 30",

    ],
  },
  {
    _id: 13,
    name: 'Lag Screw',
    description: '',
    category: 4,
    specificationTable: {
      Material: 'thick, strong & high quality stainless steel',
    },
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/lag-screw.png`,
        altText: 'Lag Screw 1',
      }
    ],
    variances: [
      "2.0mm : 14, 16, 18mm",
      "2.7mm : 20, 25, 30mm",
      "3.0mm : 20, 25, 30mm",
      "3.5mm : 25, 30, 35mm",

    ]
  },
  {
    _id: 14,
    name: 'Screw box',
    description: '',
    category: 4,
    specificationTable: {
      'Fit for':  'screw 1.0mm – 3.5mm',
      'Compartment for':  'between Cortical screw & Cancellous screw',
      Material: 'thick, strong & high quality stainless steel',
      Size : '19 x 14 x 5 (cm)',
    },
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/screw-box.png`,
        altText: 'Screw Box 1',
      }
    ]
  },
  {
    _id: 15,
    name: 'Small Multifunction Power System NM-300',
    description: '',
    category: 1,
    specificationTable: {
      'Output Power' : '80 W',
      Speed : "1. Oscillating saw : 0-16000rpm \n 2. AO Coupling Drill : 1100rpm \n 3. Bone drill : 1100rpm \n 4. K-Wire : 1100rpm"
    },
    productStructure: {
      'Handpiece': '1pcs',
      'Small AO Drill': '1pcs',
      'Small Bone Drill': '1pcs',
      'Small Saw': '1pcs',
      'Small K-Wire': '1pcs',
      'Batteries': '2pcs',
      'Charger': '1pcs',
      'Blades': '2pcs',
      "Key Chuck": '1pcs',
      'Aseptic transfer Lid': '2pcs',
    },
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/multifunction-power-system.png`,
        altText: 'Multifunction Power 1',
      }
    ]
  },
  {
    _id: 16,
    name: 'Micro Bone Drill ND-5001',
    description: '',
    category: 1,
    specificationTable: {
      'Output power' :'80W',
      Speed : '1100rpm',
    },
    productStructure: {
      Handpiece:'1pcs',
      Batteries:'2pcs',
      Charger:'1pcs',
      'Key Chuc':'1pcs',
      'Aseptic transfer Lid':'2pcs',
    },
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/micro-bone-drill.png`,
        altText: 'Micro Bone 1',
      }
    ]
  },
  {
    _id: 17,
    name: 'Bone drill Set ND-1001',
    description: '',
    category: 1,
    specificationTable: {
      'Output Power' : '130W',
      Speed : '1200rpm',
    },
    productStructure: {
      'Handpiece': '1pcs',
      'Batteries': '2pcs',
      'Charger': '1pcs',
      'Key Chuck': '1pcs',
      'Aseptic transfer Lid': '2pcs',
    },
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/bone-drill-set.png`,
        altText: 'Bone Drill 1',
      }
    ]
  },
  {
    _id: 18,
    name: 'Drill Bit',
    description: '',
    category: 1,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/drill-bit.png`,
        altText: 'Drill Bit 1'
      }
    ],
    variances: [
      '1.2mm',
      '1.5mm',
      '1.8mm',
      '2.5mm',
      '2.7mm',
      '3.2mm',
    ]
  },
  {
    _id: 19,
    name: 'Sterilization case ND-2011',
    description: '',
    category: 1,
    specificationTable: {
      'Fit for': '300mm x 24mm x 72mm Bone drill',
      Material: 'thick, strong & high quality stainless steel',
    },
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/sterilization-case.jpg`,
        altText: 'Sterilization case ND-2011 1'
      }
    ],
    variances: [
      '1.2mm',
      '1.5mm',
      '1.8mm',
      '2.5mm',
      '2.7mm',
      '3.2mm',
    ]
  },
  {
    _id: 20,
    name: 'Bone Holding Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/bone-holding-forcep.png`,
        altText: 'Bone Holding Forcep 1',
      }
    ]
  },
  {
    _id: 21,
    name: 'Reposition Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/reposition-forcep.png`,
        altText: 'Reposition Forcep 1',
      }
    ]
  },
  {
    _id: 22,
    name: 'Bone Holding Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/bone-holding-forcep.png`,
        altText: 'Bone Holding Forcep 1',
      }
    ]
  },
  {
    _id: 22,
    name: 'Plate Cutter',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/plate-cutter-2-hands.png`,
        altText: 'plate cutter 2 hands',
      }
    ]
  },
  {
    _id: 23,
    name: 'Plate Bender',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/plate-bender.png`,
        altText: 'plate bender 1',
      }
    ]
  },
  {
    _id: 24,
    name: 'Wire Cutting Scissor',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/wire-cutting-scissor.png`,
        altText: 'wire cutting scissor',
      }
    ]
  },
  {
    _id: 25,
    name: 'Wire Tightening Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/wire-tightening-forcep.png`,
        altText: 'wire tightening forcep',
      }
    ]
  },
  {
    _id: 26,
    name: 'Kischner Wire Cutting Scissor',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/kischner-wire-cutting-scissor.png`,
        altText: 'Kischner Wire Cutting Scissor 1',
      }
    ]
  },
  {
    _id: 27,
    name: 'Mayo Dissecting Scissor',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/mayo-dissecting-scissor.png`,
        altText: 'Kischner Wire Cutting Scissor 1',
      }
    ],
    variances: [
      '180 mm',
      '140 mm'
    ]
  },
  {
    _id: 28,
    name: 'Clamp',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/clamp.png`,
        altText: 'Clamp 1',
      }
    ],
    variances: [
      '110 mm',
    ]
  },
  {
    _id: 29,
    name: 'Tissue Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/tissue-forcep.png`,
        altText: 'tissue-forcep 1',
      }
    ],
    variances: [
      '140 mm',
      '160 mm',
      '180 mm',
    ]
  },
  {
    _id: 30,
    name: 'Hemostatic Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/hemostatic-forcep-straight.png`,
        altText: 'hemostatic-forcep-straight',
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/hemostatic-forcep-curved.png`,
        altText: 'hemostatic-forcep-curved',
      },
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/hemostatic-forcep-with-hook.png`,
        altText: 'hemostatic-forcep-with-hook',
      }
    ],
    specificationTable: {
      length: '140mm',
    },
    variances: [
      '140 mm, straight',
      '140 mm, curved',
      '140 mm, straight w/ hook',
      '140 mm, curved w/ hook',
    ]
  },
  {
    _id: 31,
    name: 'Dissecting Forcep',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/dissecting-forcep.png`,
        altText: 'dissecting-forcep',
      },
    ],
    variances: [
      '140 mm',
      '180 mm',
    ]
  },
  {
    _id: 32,
    name: 'Wire Guide',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/wire-guide.png`,
        altText: 'wire-guide',
      },
    ],
    variances: [
      '250 x 30 x 20 mm',
      '250 x 30 x 25 mm',
      '250 x 30 x 30 mm',
    ]
  },
  {
    _id: 33,
    name: 'Retractor',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/retractor.png`,
        altText: 'retractor',
      },
    ],
    variances: [
      "220 mm, Sharp"
    ]
  },
  {
    _id: 34,
    name: 'Litrauer Ligature Scissor',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/litrauer-sigature-scissor.png`,
        altText: 'litrauer-sigature-scissor',
      },
    ],
    specificationTable: {
      length: '140 x 140 mm',
    },
  },
  {
    _id: 35,
    name: 'Scalpel Handle',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/scalpel-handle.png`,
        altText: 'scalpel-handle',
      },
    ],
    variances: [
      "#3",
      "#4"
    ]
  },
  {
    _id: 36,
    name: 'Kischner Pin',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/kischner-pin.png`,
        altText: 'kischner-pin',
      },
    ],
    variances: [
      "0.8 mm",
      "1.0 mm",
      "1.8 mm",
      "2.5 mm",
    ]
  },
  {
    _id: 37,
    name: 'Wire Coil',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/wire-coil.png`,
        altText: 'wire-coil',
      },
    ],
    variances: [
      "0.8 mm x 1000 mm",
      "1.0 mm x 1000 mm",
      "1.2 mm x 1000 mm",
    ]
  },
  {
    _id: 38,
    name: 'Bone Mallet / Bonet Hammer',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/bone-mallet-bone-hammer.png`,
        altText: 'bone-mallet-bone-hammer',
      },
    ],
    variances: [
      "small",
      "medium",
    ]
  },
  {
    _id: 39,
    name: 'Screw Diver Hexagonal',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/screw-diver-hexagonal.png`,
        altText: 'screw-diver-hexagonal',
      },
    ],
    variances: [
      "1.5 mm",
      "2.5 mm",
    ]
  },
  {
    _id: 40,
    name: 'Screw Diver Cross / Plus',
    description: '',
    category: 2,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/screw-diver-cross.png`,
        altText: 'screw-diver-cross',
      },
    ],
    variances: [
      "1.5 mm",
      "2.5 mm",
    ]
  },
  {
    _id: 41,
    name: 'Mandibula Bone Model',
    description: '',
    category: 5,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/mandibula-bone-model.png`,
        altText: 'mandibula-bone-model',
      },
    ],
    specificationTable: {
      Length : '14cm',
      Width : '8cm/7cm',
    },
  },
  {
    _id: 42,
    name: 'Pelvis Bone Model',
    description: '',
    category: 5,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/pelvis-bone-model.png`,
        altText: 'pelvis-bone-model',
      },
    ],
    specificationTable: {
      Length : '19cm',
      Width : 'Top ( 14cm ) Middle ( 10cm ) Bottom ( 10cm )',
    },
  },
  {
    _id: 43,
    name: 'Femur Bone Model',
    description: '',
    category: 5,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/femur-bone-model.png`,
        altText: 'femur-bone-model',
      },
    ],
    specificationTable: {
      Length : '19cm',
      Width : '1.7cm/4cm/5cm',
    },
  },
  {
    _id: 44,
    name: 'Tibia & Radius Bone Model',
    description: '',
    category: 5,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/tibia-and-radius-bone-model.png`,
        altText: 'tibia-and-radius-bone-model',
      },
    ],
    specificationTable: {
      Length : '22cm',
      Width : '1.7cm/3ccm/5cm',
    },
  },
  {
    _id: 45,
    name: 'Humerus Bone Model',
    description: '',
    category: 5,
    productImages: [
      {
        imgUrl: `${process.env.PUBLIC_URL}/products/humerus-bone-model.png`,
        altText: 'humerus-bone-model',
      },
    ],
    specificationTable: {
      Length :  '19cm',
      Width : '4cm/4cm'
    },
  },
  // {
  //   _id: 101,
  //   name: 'CD-6011 Fumigate Orthopedic Drill',
  //   imgUrl: 'https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-1.jpg',
  //   category: 1,
  //   subtitle: 'Ruijin orthopeadic bone drill is also a orthopedic drill system provides stable operation,safe, reliable, save time and effort.This type of bone drill was modified from industrial drill, apply to trauma operation, compact and lightweight making it useful in long operations.Fumigation sterilization of the whole machine (No sterilization under high temperature).Charging time is short.',
  //   description: '',
  //   specificationTable: {
  //     'Model NO.': 'CD-6011',
  //     Type: 'Awl',
  //     Application: 'Orthopedic',
  //     Material: 'Stainless Steel',
  //     Feature: 'Reusable	Medical Device',
  //     'Regulatory Type': 'Type 2',
  //     'Medical devises Reg./Record No.': 'Wsyjxzz2012-2100053',
  //     Properties: 'Ortho Drill Medical Equipment'
  //   },
  //   variances: [
  //     'Width 5mm \n 10 hole \n Length 43mm \n Screw 1,5mm',
  //     'Width 5mm \n 10 hole \n Length 43mm \n Screw 1,5mm',
  //     'Width 5mm \n 10 hole \n Length 43mm \n Screw 1,5mm',
  //   ],
  //   productImages: [
  //     {
  //       imgUrl: 'https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-1.jpg',
  //       altText: 'drill 1'
  //     },
  //     {
  //       imgUrl: 'https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-3.jpg',
  //       altText: 'drill 1'
  //     },
  //     {
  //       imgUrl: 'https://www.ruijinmedical.com/wp-content/uploads/2018/07/CD-1001-2.jpg',
  //       altText: 'drill 1'
  //     }
  //   ],
  // },
]

export default productList;