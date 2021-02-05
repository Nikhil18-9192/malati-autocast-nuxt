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
    name: 'Patil Engineering Works, Kolhapur.',
    title: 'Manufacturer of betel nut cutting machines.',
    desc: [
      '- Dedicated machining shop',
      '- Machines : CNC, Balancing Machines Machining',
      '- Capacity : 1000 drums/day',
    ],
    images: ['/1.jfif', '/2.jfif', '/3.jfif', '/4.jfif'],
  },
  {
    year: '1988',
    name: 'S.K.P. Industries, MIDC Shiroli.',
    title: 'Dedicated machining shop',
    desc: [
      '- Dedicated machining shop',
      '- Machines : CNC, Balancing Machines Machining',
      '- Capacity : 1000 drums/day',
    ],

    images: [
      '/ourjourney.png',
      '/ourjourney.png',
      '/ourjourney.png',
      '/ourjourney.png',
    ],
  },
  {
    year: '1995',
    name: 'Malati Founders Pvt. Ltd. , Hatkanangle.',
    title: 'Manufacturer of C.I. graded castings',
    desc: [
      '- Dedicated machining shop',
      '- Machines : CNC, Balancing Machines Machining',
      '- Capacity : 1000 drums/day',
    ],
    images: ['2.jfif', '1.jfif', '3.jfif', '4.jfif'],
  },
  {
    year: '2000',
    name: 'Malati Enterprises, Hatkanangle. ',
    title: 'Dedicated machining shop',
    desc: [
      '- Dedicated machining shop',
      '- Machines : CNC, Balancing Machines Machining',
      '- Capacity : 1000 drums/day',
    ],
    images: ['4.jfif', '2.jfif', '1.jfif', '3.jfif'],
  },
  {
    year: '2002',
    name: 'Malati Enterprises, Hatkanangle. ',
    title: 'Dedicated machining shop',
    desc: [
      '- Dedicated machining shop',
      '- Machines : CNC, Balancing Machines Machining',
      '- Capacity : 1000 drums/day',
    ],
    images: ['3.jfif', '1.jfif', '4.jfif', '2.jfif'],
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
    img: '/HPML.png',
  },
  {
    title: 'Sand Plant',
    features: [
      'Fully automated Sinto sand plant with computerized control panel.',
      'Sand hopper capacity 80 ton.',
      'Eirich RV-15mixerwith capacity 675 kg per batch.',
      'MIA unit installation for sand cooling.',
    ],
    img: '/HPML.png',
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
    img: '/HPML.png',
  },
  {
    title: 'Shot Blasting',
    features: [
      'In-house Technoblast shotblasting machine to ensure effective cleaningor polishing product surface.',
      'Per cycle time to shot blast on products is 12 min using spindle hanger.',
      'Capacity of shot blasting the product is 0.5 MT/Cycle.',
    ],
    img: '/HPML.png',
  },
  {
    title: 'Core Shop',
    features: [
      'In-house core ovenfacility is presentmanufactured by Om Technologies.',
      'After baking, the cores are assembled on the racks.',
      'Core painting facility is also available.',
    ],
    img: '/HPML.png',
  },
  {
    title: 'Others',
    features: [
      'Paint shop : Spray painting facility is available.',
      'Fettling : 3 grinders are installed in-house for fettling.',
    ],
    img: '/HPML.png',
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
    img: '/microscopy.png',
  },
  {
    title: 'Optical Pyrometer',
    features: [
      'Optical Pyrometers are used for measuring the temperature.',
      'Model name is Cyclops. Backup system feature is available.',
      'Contactless measurement.',
      'Use of optical pyrometer reduces the metal waste.',
    ],
    img: '/infrared_thermometers.png',
  },
  {
    title: 'Hardness Tester',
    features: [
      'Brinnle Hardness Tester of model SBH is installed.',
      'Maximum load capacity is 3000  Kg',
      'Hardness is measured using 5mm ball with 750 kg load & 10 mm ball 3000  kg load ',
    ],
    img: '/spectrometer.png',
  },
  {
    title: 'Others',
    features: [
      'Muffle furnace,AFS calculator,Sieve shaker,Green compressive strengthmachine,Permeability meter,  Digital moisturetesterfacilities  are also available.',
    ],
    img: '/spectrometer.png',
  },
]

const cardInfo = [
  {
    title: 'Dust collector',
    src: '/env1.png',
    desc:
      'Only waste generated is dust. To reduce the impact of waste dust in the surrounding dust collectors are installed in the premises.',
    L1: 'a. Neo-Airtech:- Sand plant and cooler.',
    L2: 'b. Technoblast :-shot-blasting machines.',
  },
  {
    title: 'Water',
    src: '/env2.png',
    desc:
      '100% water used for manufacturing process is recycled. The rain water harvesting system adds to reduction of fresh water required.',
  },
  {
    title: 'Electricity',
    src: '/env3.png',
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
  { icon: '/group.png', title: 'Home', route: '/' },
  { icon: '/group.png', title: 'Our Journey', route: '/journey' },
  {
    icon: '/group.png',
    title: `Infrastructure`,
    route: '/infrastructure',
  },
  {
    icon: '/group.png',
    title: `Clients`,
    route: '/clients',
  },
  // {
  //   icon: '/group.png',
  //   title: `Compliance`,
  //   route: '/compliance',
  // },
  {
    icon: '/group.png',
    title: `Career & Team`,
    route: '/team',
  },
  {
    icon: '/group.png',
    title: `Contact Us`,
    route: '/contactus',
  },
  {
    icon: '/group.png',
    title: `Products`,
    route: '/products',
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
