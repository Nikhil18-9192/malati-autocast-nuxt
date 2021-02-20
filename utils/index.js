const services = [
  {
    title: 'OUR JOURNEY',
    icon: '/marker.svg',
    src: '/slide-img.png',
    route: '/journey',
  },
  {
    title: 'INFRASTRUCTURE',
    icon: '/infrastructure.svg',
    src:
      'https://images.unsplash.com/photo-1513295202663-54cd69dd2b43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80',
    route: '/infrastructure',
  },
  {
    title: 'PRODUCTS',
    icon: '/products.svg',
    src:
      'https://images.unsplash.com/photo-1552783160-27bfdb2625d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1560&q=80',
    route: '/products',
  },
  {
    title: 'TEAM & CAREER',
    icon: '/team.svg',
    src:
      'https://images.unsplash.com/photo-1571524522669-99d0c9e7264d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    route: '/team',
  },
  {
    title: 'CONTACT US',
    icon: '/contact.svg',
    src:
      'https://images.unsplash.com/photo-1566221857770-508d35ee6220?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    route: '/contactus',
  },
]

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
  },
  {
    year: '1995',
    name: 'Malati Founders Pvt ',
    title: 'Manufacturer of C.I. graded castings',
    desc: [
      '- Cupola & Induction Furnace',
      '- ARFA 450 line',
      '- Capacity of 1000MT/month',
      `- Located in Hatkanangale`,
    ],
    images: ['me01.jpg'],
  },
  {
    year: '2000',
    name: 'Malati Founders Pvt. Ltd',
    title: 'Dedicated assembly shop',
    desc: [
      '- Ultrasonic cleaning',
      '- Millipore testing',
      '- Capacity of 500 brackets and 700 pistons /day',
      '- Located in Nagpur',
    ],
    images: ['me02.jpg'],
  },
  {
    year: '2002',
    name: 'Malati Enterprises ',
    title: 'Dedicated Machine Shop',
    desc: [
      '- CNC, VMC & DTC',
      '- Balancing Machine & CMM with scanner',
      '- Trimos',
      '- Capacity of 700 brackets, 500 drums and 900 pistons per day',
      '- Located in Hatkanangale',
    ],
    images: ['me03.jpg'],
  },
]
const machinery = [
  {
    title: 'HPML',
    features: [
      'Our foundry is well equipped with Sinto Horizontal Type Flaskless Molding Machine.',
      'The model of machine is FBO-II (L)',
      'Capacity of molds/hour is 120',
      'The mold dimension in (mm) are as follows:- a. L * W:- 550*450 b. H:- 130 to 200',
      'Maximum mismatch accuracy is 0.2 mm',
      'PLC controlled automaticmolding line',
    ],
    img: '/hpml.jpg',
  },
  {
    title: 'Sand Plant',
    features: [
      'Fully automated Sinto sand plant with computerized control panel.',
      'Sand hopper capacity 80 ton.',
      'Eirich RV-15mixerwith capacity 675 kg per batch.',
      'MIA unit installation for sand cooling.',
    ],
    img: '/sandp1.jpg',
  },
  {
    title: 'Induction Furnace',
    features: [
      'Inductotherm tri-track induction furnaces are installed.',
      'The capacity is 550  kw 500  kg/furnace.',
      'Voltage consumption panel is installed to control the power.',
      'Induction furnaces works on IGBT technology.',
      'Transporting of raw material on melting platformis doneusing electro-magnetwith 2T overhead crane.',
    ],
    img: '/ind-furnace1.jpg',
  },
  {
    title: 'Shot Blasting',
    features: [
      'In-house Technoblast shotblasting machine to ensure effective cleaningor polishing product surface.',
      'Per cycle time to shot blast on products is 12 min using spindle hanger.',
      'Capacity of shot blasting the product is 0.5 MT/Cycle.',
    ],
    img: '/shotblasting.jpg',
  },
  {
    title: 'Core Shop',
    features: [
      'In-house core ovenfacility is presentmanufactured by Om Technologies.',
      'After baking, the cores are assembled on the racks.',
      'Core painting facility is also available.',
    ],
    img: '/core-oven.jpg',
  },
  {
    title: 'Others',
    features: [
      'Paint shop : Spray painting facility is available.',
      'Fettling : 3 grinders are installed in-house for fettling.',
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
      'Inverted Metallurgical Microscope with Image Analysis Software: Pro Metal™ V8is installed.',
      'Magnification range is 50x –1000x.',
    ],
    img: '/microscope.png',
  },
  {
    title: 'Optical Pyrometer',
    features: [
      'Optical Pyrometers are used for measuring the temperature.',
      'Model name is Cyclops. Backup system feature is available.',
      'Contactless measurement.',
      'Use of optical pyrometer reduces the metal waste.',
    ],
    img: '/pyrometer.png',
  },
  {
    title: 'Hardness Tester',
    features: [
      'Brinnle Hardness Tester of model SBH is installed.',
      'Maximum load capacity is 3000  Kg',
      'Hardness is measured using 5mm ball with 750 kg load & 10 mm ball 3000  kg load ',
    ],
    img: '/hardness-t.png',
  },
  {
    title: 'Others',
    features: [
      'Muffle furnace,AFS calculator,Sieve shaker,Green compressive strengthmachine,Permeability meter,  Digital moisturetesterfacilities  are also available.',
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
    L1: 'a. Neo-Airtech:- Sand plant and cooler.',
    L2: 'b. Technoblast :-shot-blasting machines.',
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
    icon: '/group.png',
    title: `Clients`,
    route: '/clients',
  },

  {
    icon: '/group.png',
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
    src: '/leader.jpg',
    name: 'Atul Patil',
    designation: 'Advisor - Finance',
    desc:
      'With passion for number and vast experience in foundry finance, he is our "Go To" when it comes to financial guidance.',
  },
  {
    src: '/leader.jpg',
    name: 'Yuvraj Patil',
    designation: 'Advisor - Operations',
    desc:
      'With a keen sense of operations and connect to shop floor, He is the guide to management on foundry operations.',
  },
  {
    src: '/leader.jpg',
    name: 'Yuvraj Patil',
    designation: 'Advisor - Operations',
    desc:
      'With a keen sense of operations and connect to shop floor, He is the guide to management on foundry operations.',
  },
]

export {
  services,
  journey,
  machinery,
  tests,
  cardInfo,
  clients,
  menuItems,
  advisorTeam,
}
