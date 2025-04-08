export const CardWidth: ChakraResponsive = {base:'100px', md:'150px'};
export const CardHeight: ChakraResponsive = {base:'150px', md:'200px'};

export const MediumCardWidth: ChakraResponsive = {base:'300px', md:'320px', lg:'290px', xl:'320px'};
export const MediumCardHeight: ChakraResponsive = {base:'130px', md:'150px'};

export const H1FontSize: ChakraResponsive = {base:'18px', md:'25px', lg:'32px'};

export const DetailTabs = [
  {id: 1, label: 'overview'},
  {id: 2, label: 'achievement'},
  {id: 3, label: 'screenshots'},
  {id: 4, label: 'add-ons'},
  {id: 5, label: 'same series'},
]

export const CardCarouselSettings = {
  dots: false,
  infinite: true,
  arrows: false, // matikan arrow bawaan
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      // Layar di bawah 480px
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      // Layar di bawah 800px
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      // Layar di bawah 1300px
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      // Layar di bawah 2600px (atau tak terbatas jika Anda mau)
      breakpoint: 2600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
  ]
};

export const GenreCarouselSettings = {
  dots: false,
  infinite: true,
  arrows: false, // matikan arrow bawaan
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      // Layar di bawah 480px
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      // Layar di bawah 800px
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      // Layar di bawah 1300px
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      // Layar di bawah 2600px (atau tak terbatas jika Anda mau)
      breakpoint: 2600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
  ]
};

export const NavLinks:NavLinkProps[] = [
  {
    id: 1,
    label: 'discover',
    link: '/'
  },
  {
    id: 2,
    label: 'browse',
    link: '/browse'
  },
]

export const allOrder = [
  { id: 1, name: 'name', value: '-name' },
  { id: 2, name: 'released', value: '-released' },
  { id: 3, name: 'added', value: '-added' },
  { id: 4, name: 'created', value: '-created' },
  { id: 5, name: 'updated', value: '-updated' },
  { id: 6, name: 'rating', value: '-rating' },
  { id: 7, name: 'metacritic', value: '-metacritic' }
];

export const allGenre = [
  { id: 4, name: "Action", value: "action" },
  { id: 51, name: "Indie", value: "indie" },
  { id: 3, name: "Adventure", value: "adventure" },
  { id: 5, name: "RPG", value: "role-playing-games-rpg" },
  { id: 10, name: "Strategy", value: "strategy" },
  { id: 2, name: "Shooter", value: "shooter" },
  { id: 40, name: "Casual", value: "casual" },
  { id: 14, name: "Simulation", value: "simulation" },
  { id: 7, name: "Puzzle", value: "puzzle" },
  { id: 11, name: "Arcade", value: "arcade" },
  { id: 83, name: "Platformer", value: "platformer" },
  { id: 59, name: "Massively Multiplayer", value: "massively-multiplayer" },
  { id: 1, name: "Racing", value: "racing" },
  { id: 15, name: "Sports", value: "sports" },
  { id: 6, name: "Fighting", value: "fighting" },
  { id: 19, name: "Family", value: "family" },
  { id: 28, name: "Board Games", value: "board-games" },
  { id: 17, name: "Card", value: "card" },
  { id: 34, name: "Educational", value: "educational" },
];

export const allPlatforms = [
  {
    id: 4,
    name: "PC",
    value: "pc",
  },
  {
    id: 187,
    name: "PlayStation 5",
    value: "playstation5",
  },
  {
    id: 1,
    name: "Xbox One",
    value: "xbox-one",
  },
  {
    id: 18,
    name: "PlayStation 4",
    value: "playstation4",
  },
  {
    id: 186,
    name: "Xbox Series S/X",
    value: "xbox-series-x",
  },
  {
    id: 7,
    name: "Nintendo Switch",
    value: "nintendo-switch",
  },
  {
    id: 3,
    name: "iOS",
    value: "ios",
  },
  {
    id: 21,
    name: "Android",
    value: "android",
  },
  {
    id: 8,
    name: "Nintendo 3DS",
    value: "nintendo-3ds",
  },
  {
    id: 9,
    name: "Nintendo DS",
    value: "nintendo-ds",
  },
  {
    id: 14,
    name: "Xbox 360",
    value: "xbox360",
  },
  {
    id: 80,
    name: "Xbox",
    value: "xbox-old",
  },
  {
    id: 16,
    name: "PlayStation 3",
    value: "playstation3",
  },
  {
    id: 15,
    name: "PlayStation 2",
    value: "playstation2",
  },
  {
    id: 27,
    name: "PlayStation",
    value: "playstation1",
  },
  {
    id: 19,
    name: "PS Vita",
    value: "ps-vita",
  },
  {
    id: 17,
    name: "PSP",
    value: "psp",
  },
  {
    id: 10,
    name: "Wii U",
    value: "wii-u",
  },
  {
    id: 11,
    name: "Wii",
    value: "wii",
  },
]

export const Terms = [
	'terms of service',
	'privacy policy',
	'store refund',
	'policy',
	'publisher index'
]

export const FooterLinks = [
  {
    id:1,
		title: 'resource',
		links: [
			'support-a-creator',
			'distribute on kukus',
			'careers',
			'company',
			'fun art policy',
			'ux research',
			'store EULA',
			'online service',
			'community rules',
			'epic news room'
		]
  },
	{
    id:2,
		title: 'made by kukus',
		links: [
			'battle breakers',
			'fortnite',
			'inifinity blade',
			'robo recall',
			'shadow complex',
			'unreal tournament'
		]
  },
]