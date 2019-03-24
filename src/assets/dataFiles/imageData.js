const pathway = '../assets/images',
  thumbnail = `${pathway}/thumbnails`,
  fullsize = `${pathway}/fullsize`;

/*
REMEMBER!!!
When you use "thumbnail" or "fullsize" below,
you must place it inside `backticks`, not 'single quotes'!
Otherwise, it will not work at all.
*/

module.exports = [
  {
    // Illustraion
    route: '/',
    images: [
      {
        thumbnail: `${thumbnail}MonstersDames_2018-215x300.jpg`,
        fullsize: `${fullsize}MonstersDames_2018.jpg`,
        name: 'MonstersDames_2018',
      },
      {
        thumbnail: `${thumbnail}MonstersDames2017-208x300.jpg`,
        fullsize: `${fullsize}MonstersDames2017.jpg`,
        name: 'MonstersDames2017',
      },
      {
        thumbnail: `${thumbnail}auriMoon-204x300.jpg`,
        fullsize: `${fullsize}auriMoon.jpg`,
        name: 'auriMoon',
      },
      {
        thumbnail: `${thumbnail}mulan-arthur-dracula-236x300.jpg`,
        fullsize: `${fullsize}mulan-arthur-dracula.jpg`,
        name: 'mulan-arthur-dracula',
      },
    ],
  },
  {
    // Character Design
    route: '/characterdesign',
    /* Follow this pattern if you have a sub menu like Character Design */
    subMenu: [
      {
        path: `${thumbnail}nectarmancer-242x300.jpg`,
        route: '/fantasy',
        subImages: [
          {
            thumbnail: `${thumbnail}animalGirl_redux2-1-258x300.jpg`,
            fullsize: `${fullsize}animalGirl_redux2-1.jpg`,
            name: 'animalGirl_redux2-1',
          },
          {
            thumbnail: `${thumbnail}hag-240x300.jpg`,
            fullsize: `${fullsize}hag.jpg`,
            name: 'hag',
          },
          {
            thumbnail: `${thumbnail}nectarmancer-242x300.jpg`,
            fullsize: `${fullsize}nectarmancer.jpg`,
            name: 'nectarmancer',
          },
          {
            thumbnail: `${thumbnail}goblin-determination-300x194.jpg`,
            fullsize: `${fullsize}goblin-determination.jpg`,
            name: 'goblin-determination',
          },
          {
            thumbnail: `${thumbnail}goblinRefined-249x300.jpg`,
            fullsize: `${fullsize}goblinRefined.jpg`,
            name: 'goblinRefined',
          },
          {
            thumbnail: `${thumbnail}leprechaun2018-264x300.jpg`,
            fullsize: `${fullsize}leprechaun2018.jpg`,
            name: 'leprechaun2018',
          },
          {
            thumbnail: `${thumbnail}DnDlineup-300x82.jpg`,
            fullsize: `${fullsize}DnDlineup.jpg`,
            name: 'DnDlineup',
          },
          {
            thumbnail: `${thumbnail}woodstockCloud-235x300.jpg`,
            fullsize: `${fullsize}woodstockCloud.jpg`,
            name: 'woodstockCloud',
          },
          {
            thumbnail: `${thumbnail}barbarianPaladin-240x300.jpg`,
            fullsize: `${fullsize}barbarianPaladin.jpg`,
            name: 'barbarianPaladin',
          },
          {
            thumbnail: `${pathway}assassin-285x300.jpg`,
            fullsize: `${fullsize}assassin.jpg`,
            name: 'assassin',
          },
          {
            thumbnail: `${thumbnail}anneBonny-224x300.jpg`,
            fullsize: `${fullsize}anneBonny.jpg`,
            name: 'anneBonny',
          },
          {
            thumbnail: `${thumbnail}arcticFox-1-300x300.jpg`,
            fullsize: `${fullsize}arcticFox-1.jpg`,
            name: 'arcticFox-1',
          },
        ],
      },
      {
        path: `${thumbnail}corgi-300x300`,
        route: '/critters',
        subImages: [
          {
            thumbnail: `${thumbnail}corgi-300x300.jpg`,
            fullsize: `${fullsize}corgi.jpg`,
            name: 'corgi',
          },
          {
            thumbnail: `${thumbnail}4x6_robopet-300x204.jpg`,
            fullsize: `${fullsize}4x6_robopet.jpg`,
            name: '4x6_robopet',
          },
          {
            thumbnail: `${thumbnail}sherlotter-204x300.jpg`,
            fullsize: `${fullsize}sherlotter.jpg`,
            name: 'sherlotter',
          },
          {
            thumbnail: `${thumbnail}kermit-300x300.jpg`,
            fullsize: `${fullsize}kermit.jpg`,
            name: 'kermit',
          },
          {
            thumbnail: `${thumbnail}kalgren2-300x300.jpg`,
            fullsize: `${fullsize}kalgren2.jpg`,
            name: 'kalgren2',
          },
          {
            thumbnail: `${thumbnail}frogPrince-243x300.jpg`,
            fullsize: `${fullsize}frogPrince.jpg`,
            name: 'frogPrince',
          },
          {
            thumbnail: `${thumbnail}crashBandicoot-232x300.jpg`,
            fullsize: `${fullsize}crashBandicoot.jpg`,
            name: 'crashBandicoot',
          },
          {
            thumbnail: `${thumbnail}countCudula-240x300.jpg`,
            fullsize: `${fullsize}countCudula.jpg`,
            name: 'countCudula',
          },
        ],
      },
      {
        path: `${thumbnail}badaliMermaid_sfw-233x300`,
        route: '/mermaids',
        subImages: [
          {
            thumbnail: `${thumbnail}badaliMermaid_sfw-233x300.jpg`,
            fullsize: `${fullsize}badaliMermaid_sfw.jpg`,
            name: 'badaliMermaid_sfw',
          },
          {
            thumbnail: `${thumbnail}sealMermaid-300x300.jpg`,
            fullsize: `${fullsize}sealMermaid.jpg`,
            name: 'sealMermaid',
          },
          {
            thumbnail: `${thumbnail}milkmermaid-281x300.jpg`,
            fullsize: `${fullsize}milkmermaid.jpg`,
            name: 'milkmermaid',
          },
          {
            thumbnail: `${thumbnail}mertlemaid-300x240.jpg`,
            fullsize: `${fullsize}mertlemaid.jpg`,
            name: 'mertlemaid',
          },
          {
            thumbnail: `${thumbnail}mermayThe4th-232x300.jpg`,
            fullsize: `${fullsize}mermayThe4th.jpg`,
            name: 'mermayThe4th',
          },
          {
            thumbnail: `${thumbnail}mermay20-232x300.jpg`,
            fullsize: `${fullsize}mermay20.jpg`,
            name: 'mermay20',
          },
          {
            thumbnail: `${thumbnail}Mermay3-232x300.jpg`,
            fullsize: `${fullsize}Mermay3.jpg`,
            name: 'Mermay3',
          },
          {
            thumbnail: `${thumbnail}mermay2-232x300.jpg`,
            fullsize: `${fullsize}mermay2.jpg`,
            name: 'mermay2',
          },
          {
            thumbnail: `${pathway}mermaidBoba-240x300.jpg`,
            fullsize: `${fullsize}mermaidBoba.jpg`,
            name: 'mermaidBoba',
          },
          {
            thumbnail: `${thumbnail}mermaidAngry-240x300.jpg`,
            fullsize: `${fullsize}mermaidAngry.jpg`,
            name: 'mermaidAngry',
          },
        ],
      },
    ],
  },
  {
    // The Wonderful World of Corporate Synergy
    route: '/wwocs',
    images: [
      {
        thumbnail: `${thumbnail}HookVader-small-1-300x200.jpg`,
        fullsize: `${fullsize}HookVader-small-1.jpg`,
        name: 'HookVader-small-1',
      },
      {
        thumbnail: `${thumbnail}hulkJedi_square-1-300x300.jpg`,
        fullsize: `${fullsize}hulkJedi_square-1.jpg`,
        name: 'hulkJedi_square-1',
      },
      {
        thumbnail: `${thumbnail}jackjackSolo-1-300x240.jpg`,
        fullsize: `${fullsize}jackjackSolo-1.jpg`,
        name: 'jackjackSolo-1',
      },
      {
        thumbnail: `${thumbnail}moanaLuke-1-188x300.jpg`,
        fullsize: `${fullsize}moanaLuke-1.jpg`,
        name: 'moanaLuke-1',
      },
      {
        thumbnail: `${thumbnail}YodaMoana-1-300x240.jpg`,
        fullsize: `${fullsize}YodaMoana-1.jpg`,
        name: 'YodaMoana-1',
      },
      {
        thumbnail: `${thumbnail}jawa_mater-1-300x240.jpg`,
        fullsize: `${fullsize}jawa_mater-1.jpg`,
        name: 'jawa_mater-1',
      },
      {
        thumbnail: `${thumbnail}pooh_groot-1-237x300.jpg`,
        fullsize: `${fullsize}pooh_groot-1.jpg`,
        name: 'pooh_groot-1',
      },
      {
        thumbnail: `${thumbnail}reyKylo_Aladdin-1-300x232.jpg`,
        fullsize: `${fullsize}reyKylo_Aladdin-1.jpg`,
        name: 'reyKylo_Aladdin-1',
      },
      {
        thumbnail: `${thumbnail}sleepingBeauty-1-300x200.jpg`,
        fullsize: `${fullsize}sleepingBeauty-1.jpg`,
        name: 'sleepingBeauty-1',
      },
      {
        thumbnail: `${thumbnail}spiderella-1-200x300.jpg`,
        fullsize: `${fullsize}spiderella-1.jpg`,
        name: 'spiderella-1',
      },
    ],
  },
  {
    // Holiday Art
    route: '/holiday',
    images: [
      {
        thumbnail: `${thumbnail}Santa-300x300.jpg`,
        fullsize: `${fullsize}Santa.jpg`,
        name: 'Santa',
      },
      {
        thumbnail: `${thumbnail}wreathulu_blank-300x300.jpg`,
        fullsize: `${fullsize}wreathulu_blank.jpg`,
        name: 'wreathulu_blank',
      },
      {
        thumbnail: `${thumbnail}xmas_mooseDecorating2-240x300.jpg`,
        fullsize: `${fullsize}xmas_mooseDecorating2.jpg`,
        name: 'xmas_mooseDecorating2',
      },
      {
        thumbnail: `${thumbnail}saturnalia_tentacleGift-300x208.jpg`,
        fullsize: `${fullsize}saturnalia_tentacleGift.jpg`,
        name: 'saturnalia_tentacleGift',
      },
    ],
  },
  {
    // Commissions
    route: '/commissions',
    images: [
      {
        thumbnail: `${thumbnail}SleepyHollow-1-1-300x300.jpg`,
        fullsize: `${fullsize}SleepyHollow-1-1.jpg`,
        name: 'SleepyHollow-1-1',
      },
      {
        thumbnail: `${thumbnail}reyZuetrong-1-232x300.jpg`,
        fullsize: `${fullsize}reyZuetrong-1.jpg`,
        name: 'reyZuetrong-1',
      },
      {
        thumbnail: `${thumbnail}deathPortal-225x300.jpg`,
        fullsize: `${fullsize}deathPortal.jpg`,
        name: 'deathPortal',
      },
      {
        thumbnail: `${thumbnail}daveHoward_allkids-small-1-300x221.jpg`,
        fullsize: `${fullsize}daveHoward_allkids-small-1.jpg`,
        name: 'daveHoward_allkids-small-1',
      },
      {
        thumbnail: `${thumbnail}carpenterBoss_csheet-1-300x262.jpg`,
        fullsize: `${fullsize}carpenterBoss_csheet-1.jpg`,
        name: 'carpenterBoss_csheet-1',
      },
      {
        thumbnail: `${thumbnail}bratcher_bookplate-1-228x300.jpg`,
        fullsize: `${fullsize}bratcher_bookplate-1.jpg`,
        name: 'bratcher_bookplate-1',
      },
    ],
  },
  {
    // Games
    route: '/games',
    images: [
      /* Follow this pattern if the page has sub headings like Games  */
      {
        subHeading: 'Tak',
        subImages: [
          {
            thumbnail: `${thumbnail}tak_RothfussJames-001-300x237.jpg`,
            fullsize: `${fullsize}tak_RothfussJames-001.jpg`,
            name: 'tak_RothfussJames-001',
          },
          {
            thumbnail: `${thumbnail}tak-hands-150x150.jpg`,
            fullsize: `${fullsize}tak-hands.jpg`,
            name: 'tak-hands',
          },
          {
            thumbnail: `${thumbnail}tak-man-150x150.jpg`,
            fullsize: `${fullsize}tak-man.jpg`,
            name: 'tak-man',
          },
          {
            thumbnail: `${thumbnail}tak-couple-150x150.jpg`,
            fullsize: `${fullsize}tak-couple.jpg`,
            name: 'tak-couple',
          },
        ],
      },
      {
        subHeading: 'Snow Day (Unpublished)',
        subImages: [
          {
            thumbnail: `${thumbnail}card1-captain-220x300.jpg`,
            fullsize: `${fullsize}card1-captain.jpg`,
            name: 'card1-captain',
          },
          {
            thumbnail: `${thumbnail}card3-defender-150x150.jpg`,
            fullsize: `${fullsize}card3-defender.jpg`,
            name: 'card3-defender',
          },
          {
            thumbnail: `${thumbnail}card5-assassin-150x150.jpg`,
            fullsize: `${fullsize}card5-assassin.jpg`,
            name: 'card5-assassin',
          },
          {
            thumbnail: `${thumbnail}card7-sniper-150x150.jpg`,
            fullsize: `${fullsize}card7-sniper.jpg`,
            name: 'card7-sniper',
          },
        ],
      },
      {
        subHeading: 'Hamlet (Unpublished)',
        subImages: [
          {
            thumbnail: `${thumbnail}1-hamlet-full-194x300.jpg`,
            fullsize: `${fullsize}1-hamlet-full.jpg`,
            name: '1-hamlet-full',
          },
          {
            thumbnail: `${thumbnail}1-polonius-150x150.jpg`,
            fullsize: `${fullsize}1-polonius.jpg`,
            name: '1-polonius',
          },
          {
            thumbnail: `${thumbnail}2-bernardo-150x150.jpg`,
            fullsize: `${fullsize}2-bernardo.jpg`,
            name: '2-bernardo',
          },
          {
            thumbnail: `${thumbnail}2-fortinbras-150x150.jpg`,
            fullsize: `${fullsize}2-fortinbras.jpg`,
            name: '2-fortinbras',
          },
          {
            thumbnail: `${thumbnail}2-francisco-150x150.jpg`,
            fullsize: `${fullsize}2-francisco.jpg`,
            name: '2-francisco',
          },
          {
            thumbnail: `${thumbnail}2-horatio-150x150.jpg`,
            fullsize: `${fullsize}2-horatio.jpg`,
            name: '2-horatio',
          },
          {
            thumbnail: `${thumbnail}2-marcellus-150x150.jpg`,
            fullsize: `${fullsize}2-marcellus.jpg`,
            name: '2-marcellus',
          },
          {
            thumbnail: `${thumbnail}2-reynaldo-150x150.jpg`,
            fullsize: `${fullsize}2-reynaldo.jpg`,
            name: '2-reynaldo',
          },
          {
            thumbnail: `${thumbnail}3-ghost-150x150.jpg`,
            fullsize: `${fullsize}3-ghost.jpg`,
            name: '3-ghost',
          },
          {
            thumbnail: `${thumbnail}3-ophelia-150x150.jpg`,
            fullsize: `${fullsize}3-ophelia.jpg`,
            name: '3-ophelia.jpg',
          },
          {
            thumbnail: `${thumbnail}3-rosencrantz_guildenstern-150x150.jpg`,
            fullsize: `${fullsize}3-rosencrantz_guildenstern.jpg`,
            name: '3-rosencrantz_guildenstern',
          },
          {
            thumbnail: `${thumbnail}3-yorick2-150x150.jpg`,
            fullsize: `${fullsize}3-yorick2.jpg`,
            name: '3-yorick2',
          },
        ],
      },
    ],
  },
  {
    name: 'Book Credits',
    route: '/books',
    images: [
      {
        subHeading: 'Cover & Interiors',
        subImages: [
          {
            thumbnail: `${thumbnail}Princess-cover300dpi-300x261.jpg`,
            fullsize: `${fullsize}princess-pg02-copy.jpg`,
            name: 'Princess book',
          },
          {
            thumbnail: `${thumbnail}princess2-cover-300x253.jpg`,
            fullsize: `${fullsize}princess2_pg003-copy.jpg`,
            name: 'Princess book 2',
          },
          {
            thumbnail: `${thumbnail}Brooks_sometimesMagic_cover-200x300.jpg`,
            fullsize: `${fullsize}Brooks_sometimesMagic_cover.jpg`,
            name: 'Brooks_sometimesMagic_cover',
          },
        ],
      },
      {
        subHeading: 'Interiors',
        subImages: [
          {
            thumbnail: `${thumbnail}slowRegard_cover-192x300.jpg`,
            fullsize: `${fullsize}slowRegard_cover.jpg`,
            name: 'slowRegard_cover',
          },
        ],
      },
      {
        subHeading: 'Covers',
        subImages: [
          {
            thumbnail: `${thumbnail}scalzi_mallet-200x300.jpg`,
            fullsize: `${fullsize}scalzi_mallet.jpg`,
            name: 'scalzi_mallet',
          },
          {
            thumbnail: `${thumbnail}scalzi_dont-203x300.jpg`,
            fullsize: `${fullsize}scalzi_dont.jpg`,
            name: 'scalzi_dont',
          },
          {
            thumbnail: `${thumbnail}virtueSignaling_cover-198x300.jpg`,
            fullsize: `${fullsize}virtueSignaling_cover.jpg`,
            name: 'virtueSignaling_cover',
          },
          {
            thumbnail: `${thumbnail}BrokenEmpire_cover-203x300.jpg`,
            fullsize: `${fullsize}BrokenEmpire_cover.jpg`,
            name: 'BrokenEmpire_cover',
          },
        ],
      },
    ],
  },
];
