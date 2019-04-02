module.exports = [
  {
    routeName: 'Illustration',
    route: '/',
  },
  {
    // Follow this pattern if there is a sub-menu like Character Design
    routeName: 'Character Design',
    route: '/characterDesign',
    subMenu: [
      {
        routeName: 'Fantasy',
        route: '/fantasy',
      },
      {
        routeName: 'Critters',
        route: '/critters',
      },
      {
        routeName: 'Mermaids',
        route: '/mermaids',
      },
    ],
  },
  {
    routeName: 'The Wonderful World of Corporate Synergy',
    route: '/wwocs',
  },
  {
    routeName: 'Holiday Art',
    route: '/holiday',
  },
  {
    routeName: 'Commissions',
    route: '/commissions',
  },
  {
    routeName: 'Games',
    route: '/games',
  },
  {
    routeName: 'Book Credits',
    route: '/books',
  },
  {
    routeName: 'Contact',
    route: '/contact',
  },
];
