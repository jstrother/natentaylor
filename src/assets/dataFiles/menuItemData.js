module.exports = [
  {
    name: 'Illustration',
    route: '/',
  },
  {
    // Follow this pattern if there is a sub-menu like Character Design
    name: 'Character Design',
    route: '/characterDesign',
    subMenu: [
      {
        subName: 'Fantasy',
        subRoute: '/fantasy',
      },
      {
        subName: 'Critters',
        subRoute: '/critters',
      },
      {
        subName: 'Mermaids',
        subRoute: '/mermaids',
      },
    ],
  },
  {
    name: 'The Wonderful World of Corporate Synergy',
    route: '/wwocs',
  },
  {
    name: 'Holiday Art',
    route: '/holiday',
  },
  {
    name: 'Commissions',
    route: '/commissions',
  },
  {
    name: 'Games',
    route: '/games',
  },
  {
    name: 'Book Credits',
    route: '/books',
  },
  {
    name: 'Sroutere',
    route: 'https://worldbuildersmarket.com/collections/nate-taylor',
  },
];
