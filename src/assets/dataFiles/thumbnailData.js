const pathway = '@/assets/images/thumbnails';

module.exports = [
  {
    route: '/',
    thumbnails: [
      {
        path: `${pathway}MonstersDames_2018-215x300`,
        name: 'MonstersDames_2018 thumbnail',
        to: '/MonstersDames_2018',
      },
      {
        path: `${pathway}MonstersDames2017-208x300`,
        name: 'MonstersDames2017 thumbnail',
        to: '/MonstersDames2017',
      },
      {
        path: `${pathway}auriMoon-204x300`,
        name: 'auriMoon thumbnail',
        to: '/auriMoon',
      },
      {
        path: `${pathway}mulan-arthur-dracula-236x300`,
        name: 'mulan-arthur-dracula thumbnail',
        to: '/mulan-arthur-dracula',
      },
    ],
  },
  {
    route: '/characterdesign',
    thumbnails: [
      {
        path: `${pathway}nectarmancer-242x300`,
        name: 'nectarmancer thumbnail',
        to: '/fantasy',
      },
    ],
  },
];
