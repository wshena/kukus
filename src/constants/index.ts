export const CardWidth: ChakraResponsive = {base:'100px', md:'150px'};
export const CardHeight: ChakraResponsive = {base:'150px', md:'200px'};

export const MediumCardWidth: ChakraResponsive = {base:'240px', md:'320px'};
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