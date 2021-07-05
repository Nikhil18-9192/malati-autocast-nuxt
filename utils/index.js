

const journey = [
  {
    year: '1970',
    name: 'Patil Engineering Works ',
    title: 'Manufacturer of betel nut cutting machines.',
    desc: [
      '- Started in 1970',
      '- Located in Kolhapur',
      '- Indigenous Export oriented plant',
    ],
    images: ['patil-engg.jpg', 'patil-eng1.jpg', 'patil-eng2.jpg'],
    url: '#',
  },
  {
    year: '1988',
    name: 'S.K.P. Industries ',
    title: 'Dedicated machining shop',
    desc: [
      '- CNC ',
      '- Auto balancing',
      '- Capable of processing 1200 drums / day',
      '- Located in MIDC Shiroli',
    ],

    images: ['/skpind.jpg', '/skpind1.jpg', '/skp01.jpg'],
    url: '#',
  },
  {
    year: '1995',
    name: 'Malati Founders Pvt. Ltd. ',
    title: 'Manufacturer of C.I. graded castings',
    desc: [
      '- Cupola & Induction Furnace',
      '- ARFA 450 line',
      '- Capacity of 1000MT/month',
      `- Located in Hatkanangale`,
    ],
    images: ['/cupola-malati.jpg', 'furnace.jpg', 'arfa-malati.jpg'],
    url: '#',
  },
  {
    year: '2000',
    name: 'Malati Founders Pvt. Ltd (Unit II)',
    title: 'Dedicated Assembly Shop',
    desc: [
      '- Ultrasonic cleaning',
      '- Millipore testing',
      '- Capacity of 500 brackets and 700 pistons /day',
      '- Located in Nagpur',
    ],
    images: ['nagpur2.jpg', 'nagpur3.jpg'],
    url: '#',
  },
  {
    year: '2002',
    name: 'Malati Enterprises ',
    title: 'Dedicated Machine Shop',
    desc: [
      '- CNC, VMC & DTC',
      '- Balancing Machine & CMM with scanner, Trimos',
      '- Capacity of 700 brackets, 500 drums and 900 pistons per day',
      '- Located in Hatkanangale',
    ],
    images: ['me02.jpg', 'me03.jpg', 'enterprise.jpg'],
    url: '#',
  },
  {
    year: '2019',
    name: 'Malati Autocast Pvt. Ltd.',
    title: 'Manufacturer of CI and SGI castings',
    desc: [
      '- Induction furnace with HPML',
      '- Capacity 1500 MT / month',
      '- Located in Hatkanangale',
    ],
    images: ['/home1.jpg'],
    url: '/',
  },
]
const machinery = [
  {
    title: 'HPML',
    features: [
      {
        title:
          'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
        subtitle: [],
      },
      { title: 'The model of machine is FBO-II (L)' },
      { title: 'Capacity of molds/hour is 120' },
      {
        title: 'The mold dimension in (mm) are as follows:-',
        subtitle: ['L * W:- 550*450', 'H:- 130 to 200'],
      },
      { title: 'Maximum mismatch accuracy is 0.2 mm' },
      { title: 'PLC controlled automaticmolding line' },
    ],
    img: '/hpml.jpg',
  },
  {
    title: 'Sand Plant',
    features: [
      {
        title:
          'Fully automated Sinto sand plant with computerized control panel.',
      },
      { title: 'Sand hopper capacity 80 ton.' },
      { title: 'Eirich RV-15mixerwith capacity 675 kg per batch.' },
      { title: 'MIA unit installation for sand cooling.' },
    ],
    img: 'sandp1.jpg',
    link: '/',
  },
  {
    title: 'Induction Furnace',
    features: [
      { title: 'Inductotherm tri-track induction furnaces are installed.' },
      { title: 'The capacity is 550  kw 500  kg/furnace.' },
      { title: 'Voltage consumption panel is installed to control the power.' },
      { title: 'Induction furnaces works on IGBT technology.' },
      {
        title:
          'Transporting of raw material on melting platformis doneusing electro-magnetwith 2T overhead crane.',
      },
    ],
    img: '/ind-furnace1.jpg',
  },
  {
    title: 'Shot Blasting',
    features: [
      {
        title:
          'In-house Technoblast shot blasting machine to ensure effective cleaning or polishing product surface.',
      },
      {
        title:
          'Per cycle time to shot blast on products is 12 min using spindle hanger.',
      },
      {
        title: 'Capacity of shot blasting the product is 0.5 MT/Cycle.',
      },
    ],
    img: '/shotblasting.jpg',
  },
  {
    title: 'Core Shop',
    features: [
      {
        title:
          'In-house core ovenfacility is present manufactured by Om Technologies.',
      },
      {
        title: 'After baking, the cores are assembled on the racks.',
      },
      {
        title: 'Core painting facility is also available.',
      },
    ],
    img: '/core-shop.jpg',
  },
  {
    title: 'Others',
    features: [
      { title: 'Paint shop : Spray painting facility is available.' },
      { title: 'Fettling : 3 grinders are installed in-house for fettling.' },
    ],
    img: '/others.jpg',
  },
]

const tests = [
  {
    title: 'Spectrometer',
    features: [
      'Our plant is equipped with spectrometer from Spectro India',
      'Model is "SPECTRO LAB"',
      'Analysis of 30 elements along with Nitrogen and Oxygen is Possible',
      'It has higher accuracy with 750 mm wavelength',
    ],
    img: '/spectrometer.png',
  },
  {
    title: 'Metallurgical Microscope',
    features: [
      'Inverted Metallurgical Microscope with Image Analysis Software: Pro Metal™ V8is installed',
      'Magnification range is 50x –1000x',
    ],
    img: '/microscope.png',
  },
  {
    title: 'Optical Pyrometer',
    features: [
      'Optical Pyrometers are used for measuring the temperature',
      'Model name is Cyclops. Backup system feature is available',
      'Contactless measurement',
      'Use of optical pyrometer reduces the metal waste',
    ],
    img: '/pyrometer.png',
  },
  {
    title: 'Hardness Tester',
    features: [
      'Brinnle Hardness Tester of model SBH is installed',
      'Maximum load capacity is 3000  Kg',
      'Hardness is measured using 5mm ball with 750 kg load & 10 mm ball 3000  kg load ',
    ],
    img: '/hardness-t.png',
  },
  {
    title: 'Others',
    features: [
      'Muffle furnace,AFS calculator,Sieve shaker,Green compressive strength machine,Permeability meter,  Digital moisturetester facilities  are also available',
    ],
    img: '/other-instru.png',
  },
]

const cardInfo = [
  {
    title: 'Dust collector',
    src: '/dust-collector.jpg',
    desc:
      'Only waste generated is dust. To reduce the impact of waste dust in the surrounding dust collectors are installed in the premises.',
    L1: 'a. Neo-Airtech - Sand plant and cooler.',
    L2: 'b. Technoblast - Shot-blasting machines.',
  },
  {
    title: 'Water',
    src: '/water.jpg',
    desc:
      '100% water used for manufacturing process is recycled. The rain water harvesting system adds to reduction of fresh water required.',
  },
  {
    title: 'Electricity',
    src: '/env3.jpg',
    desc:
      'Initiatives to use natural light has reduced the electric consumption. Well ventilated space helps to free-flowing air.',
  },
]

const clients = [
  { logo: '/Mahindra.png', title: 'Automotive sector' },
  { logo: '/escort.png', title: ' ' },
  { logo: '/Mahindra.png', title: 'Tractor sector' },
  { logo: '/tmtl.png', title: ' ' },
]

const menuItems = [
  { icon: '/home-black.svg', title: 'Home', route: '/' },
  { icon: '/marker-black.svg', title: 'Our Journey', route: '/journey' },
  {
    icon: '/infrastructure-black.svg',
    title: `Infrastructure`,
    route: '/infrastructure',
  },
  {
    icon: '/products-black.svg',
    title: `Products`,
    route: '/products',
  },
  {
    icon: '/handshake.svg',
    title: `Clients`,
    route: '/clients',
  },

  {
    icon: '/group.svg',
    title: `Team & Career`,
    route: '/team',
  },
  {
    icon: '/contact-black.svg',
    title: `Contact Us`,
    route: '/contactus',
  },
]

const advisorTeam = [
  {
    src: '/sanjay.jpg',
    name: 'Sanjay Patil',
    designation: 'Advisor - Management',
    desc:
      'With over 4 decades of experience in casting, machining and foundry management is the Managing director of Malati Founders Pvt. Ltd. and is an active advisor of Malati Autocast Pvt. Ltd.',
  },
  {
    src: '/yuvraj.jpg',
    name: 'Yuvraj Patil',
    designation: 'Advisor - Operations',
    desc:
      'With a keen sense of operations and connect to shop floor, He is the guide to management on foundry operations.',
  },
  {
    src: '/atul.jpg',
    name: 'Atul Patil',
    designation: 'Advisor - Finance',
    desc:
      ' With passion for number and vast experience in foundry finance, he is our "Go To" when it comes to financial guidance.',
  },
]

export {

  journey,
  machinery,
  tests,
  cardInfo,
  clients,
  menuItems,
  advisorTeam,
}

export * from './constants'
