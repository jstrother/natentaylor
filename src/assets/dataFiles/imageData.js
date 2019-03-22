const pathway = '@/assets/images',
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
      },
      {
        thumbnail: `${thumbnail}MonstersDames2017-208x300.jpg`,
        fullsize: `${fullsize}MonstersDames2017.jpg`,
      },
      {
        thumbnail: `${thumbnail}auriMoon-204x300.jpg`,
        fullsize: `${fullsize}auriMoon.jpg`,
      },
      {
        thumbnail: `${thumbnail}mulan-arthur-dracula-236x300.jpg`,
        fullsize: `${fullsize}mulan-arthur-dracula.jpg`,
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
        to: '/fantasy',
        subImages: [
          {
            thumbnail: `${thumbnail}animalGirl_redux2-1-258x300.jpg`,
            fullsize: `${fullsize}animalGirl_redux2-1.jpg`,
          },
          {
            thumbnail: `${thumbnail}hag-240x300.jpg`,
            fullsize: `${fullsize}hag.jpg`,
          },
          {
            thumbnail: `${thumbnail}nectarmancer-242x300.jpg`,
            fullsize: `${fullsize}nectarmancer.jpg`,
          },
          {
            thumbnail: `${thumbnail}goblin-determination-300x194.jpg`,
            fullsize: `${fullsize}goblin-determination.jpg`,
          },
          {
            thumbnail: `${thumbnail}goblinRefined-249x300.jpg`,
            fullsize: `${fullsize}goblinRefined.jpg`,
          },
          {
            thumbnail: `${thumbnail}leprechaun2018-264x300.jpg`,
            fullsize: `${fullsize}leprechaun2018.jpg`,
          },
          {
            thumbnail: `${thumbnail}DnDlineup-300x82.jpg`,
            fullsize: `${fullsize}DnDlineup.jpg`,
          },
          {
            thumbnail: `${thumbnail}woodstockCloud-235x300.jpg`,
            fullsize: `${fullsize}woodstockCloud.jpg`,
          },
          {
            thumbnail: `${thumbnail}barbarianPaladin-240x300.jpg`,
            fullsize: `${fullsize}barbarianPaladin.jpg`,
          },
          {
            thumbnail: `${pathway}assassin-285x300.jpg`,
            fullsize: `${fullsize}assassin.jpg`,
          },
          {
            thumbnail: `${thumbnail}anneBonny-224x300.jpg`,
            fullsize: `${fullsize}anneBonny.jpg`,
          },
          {
            thumbnail: `${thumbnail}arcticFox-1-300x300.jpg`,
            fullsize: `${fullsize}arcticFox-1.jpg`,
          },
        ],
      },
      {
        path: `${thumbnail}corgi-300x300`,
        to: '/critters',
        subImages: [
          {
            thumbnail: `${thumbnail}corgi-300x300.jpg`,
            fullsize: `${fullsize}corgi.jpg`,
          },
          {
            thumbnail: `${thumbnail}4x6_robopet-300x204.jpg`,
            fullsize: `${fullsize}4x6_robopet.jpg`,
          },
          {
            thumbnail: `${thumbnail}sherlotter-204x300.jpg`,
            fullsize: `${fullsize}sherlotter.jpg`,
          },
          {
            thumbnail: `${thumbnail}kermit-300x300.jpg`,
            fullsize: `${fullsize}kermit.jpg`,
          },
          {
            thumbnail: `${thumbnail}kalgren2-300x300.jpg`,
            fullsize: `${fullsize}kalgren2.jpg`,
          },
          {
            thumbnail: `${thumbnail}frogPrince-243x300.jpg`,
            fullsize: `${fullsize}frogPrince.jpg`,
          },
          {
            thumbnail: `${thumbnail}crashBandicoot-232x300.jpg`,
            fullsize: `${fullsize}crashBandicoot.jpg`,
          },
          {
            thumbnail: `${thumbnail}countCudula-240x300.jpg`,
            fullsize: `${fullsize}countCudula.jpg`,
          },
        ],
      },
      {
        path: `${thumbnail}badaliMermaid_sfw-233x300`,
        to: '/mermaids',
        subImages: [
          {
            thumbnail: `${thumbnail}badaliMermaid_sfw-233x300.jpg`,
            fullsize: `${fullsize}badaliMermaid_sfw.jpg`,
          },
          {
            thumbnail: `${thumbnail}sealMermaid-300x300.jpg`,
            fullsize: `${fullsize}sealMermaid.jpg`,
          },
          {
            thumbnail: `${thumbnail}milkmermaid-281x300.jpg`,
            fullsize: `${fullsize}milkmermaid.jpg`,
          },
          {
            thumbnail: `${thumbnail}mertlemaid-300x240.jpg`,
            fullsize: `${fullsize}mertlemaid.jpg`,
          },
          {
            thumbnail: `${thumbnail}mermayThe4th-232x300.jpg`,
            fullsize: `${fullsize}mermayThe4th.jpg`,
          },
          {
            thumbnail: `${thumbnail}mermay20-232x300.jpg`,
            fullsize: `${fullsize}mermay20.jpg`,
          },
          {
            thumbnail: `${thumbnail}Mermay3-232x300.jpg`,
            fullsize: `${fullsize}Mermay3.jpg`,
          },
          {
            thumbnail: `${thumbnail}mermay2-232x300.jpg`,
            fullsize: `${fullsize}mermay2.jpg`,
          },
          {
            thumbnail: `${pathway}mermaidBoba-240x300.jpg`,
            fullsize: `${fullsize}mermaidBoba.jpg`,
          },
          {
            thumbnail: `${thumbnail}mermaidAngry-240x300.jpg`,
            fullsize: `${fullsize}mermaidAngry.jpg`,
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
      },
      {
        thumbnail: `${thumbnail}hulkJedi_square-1-300x300.jpg`,
        fullsize: `${fullsize}hulkJedi_square-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}jackjackSolo-1-300x240.jpg`,
        fullsize: `${fullsize}jackjackSolo-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}moanaLuke-1-188x300.jpg`,
        fullsize: `${fullsize}moanaLuke-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}YodaMoana-1-300x240.jpg`,
        fullsize: `${fullsize}YodaMoana-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}jawa_mater-1-300x240.jpg`,
        fullsize: `${fullsize}jawa_mater-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}pooh_groot-1-237x300.jpg`,
        fullsize: `${fullsize}pooh_groot-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}reyKylo_Aladdin-1-300x232.jpg`,
        fullsize: `${fullsize}reyKylo_Aladdin-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}sleepingBeauty-1-300x200.jpg`,
        fullsize: `${fullsize}sleepingBeauty-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}spiderella-1-200x300.jpg`,
        fullsize: `${fullsize}spiderella-1.jpg`,
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
      },
      {
        thumbnail: `${thumbnail}wreathulu_blank-300x300.jpg`,
        fullsize: `${fullsize}wreathulu_blank.jpg`,
      },
      {
        thumbnail: `${thumbnail}xmas_mooseDecorating2-240x300.jpg`,
        fullsize: `${fullsize}xmas_mooseDecorating2.jpg`,
      },
      {
        thumbnail: `${thumbnail}saturnalia_tentacleGift-300x208.jpg`,
        fullsize: `${fullsize}saturnalia_tentacleGift.jpg`,
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
      },
      {
        thumbnail: `${thumbnail}reyZuetrong-1-232x300.jpg`,
        fullsize: `${fullsize}reyZuetrong-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}deathPortal-225x300.jpg`,
        fullsize: `${fullsize}deathPortal.jpg`,
      },
      {
        thumbnail: `${thumbnail}daveHoward_allkids-small-1-300x221.jpg`,
        fullsize: `${fullsize}daveHoward_allkids-small-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}carpenterBoss_csheet-1-300x262.jpg`,
        fullsize: `${fullsize}carpenterBoss_csheet-1.jpg`,
      },
      {
        thumbnail: `${thumbnail}bratcher_bookplate-1-228x300.jpg`,
        fullsize: `${fullsize}bratcher_bookplate-1.jpg`,
      },
    ],
  },
  {
    // Games
    to: '/games',
    images: [
      /* Follow this pattern if the page has sub headings like Games  */
      {
        subHeading: 'Tak',
        subImages: [
          {
            thumbnail: `${thumbnail}tak_RothfussJames-001-300x237.jpg`,
            fullsize: `${fullsize}tak_RothfussJames-001.jpg`,
          },
          {
            thumbnail: `${thumbnail}tak-hands-150x150.jpg`,
            fullsize: `${fullsize}tak-hands.jpg`,
          },
          {
            thumbnail: `${thumbnail}tak-man-150x150.jpg`,
            fullsize: `${fullsize}tak-man.jpg`,
          },
          {
            thumbnail: `${thumbnail}tak-couple-150x150.jpg`,
            fullsize: `${fullsize}tak-couple.jpg`,
          },
        ],
      },
      {
        subHeading: 'Snow Day (Unpublished)',
        subImages: [
          {
            thumbnail: `${thumbnail}card1-captain-220x300.jpg`,
            fullsize: `${fullsize}card1-captain.jpg`,
          },
          {
            thumbnail: `${thumbnail}card3-defender-150x150.jpg`,
            fullsize: `${fullsize}card3-defender.jpg`,
          },
          {
            thumbnail: `${thumbnail}card5-assassin-150x150.jpg`,
            fullsize: `${fullsize}card5-assassin.jpg`,
          },
          {
            thumbnail: `${thumbnail}card7-sniper-150x150.jpg`,
            fullsize: `${fullsize}card7-sniper.jpg`,
          },
        ],
      },
      {
        subHeading: 'Hamlet (Unpublished)',
        subImages: [
          {
            thumbnail: `${thumbnail}1-hamlet-full-194x300.jpg`,
            fullsize: `${fullsize}1-hamlet-full.jpg`,
          },
          {
            thumbnail: `${thumbnail}1-polonius-150x150.jpg`,
            fullsize: `${fullsize}1-polonius.jpg`,
          },
          {
            thumbnail: `${thumbnail}2-bernardo-150x150.jpg`,
            fullsize: `${fullsize}2-bernardo.jpg`,
          },
          {
            thumbnail: `${thumbnail}2-fortinbras-150x150.jpg`,
            fullsize: `${fullsize}2-fortinbras.jpg`,
          },
          {
            thumbnail: `${thumbnail}2-francisco-150x150.jpg`,
            fullsize: `${fullsize}2-francisco.jpg`,
          },
          {
            thumbnail: `${thumbnail}2-horatio-150x150.jpg`,
            fullsize: `${fullsize}2-horatio.jpg`,
          },
          {
            thumbnail: `${thumbnail}2-marcellus-150x150.jpg`,
            fullsize: `${fullsize}2-marcellus.jpg`,
          },
          {
            thumbnail: `${thumbnail}2-reynaldo-150x150.jpg`,
            fullsize: `${fullsize}2-reynaldo.jpg`,
          },
          {
            thumbnail: `${thumbnail}3-ghost-150x150.jpg`,
            fullsize: `${fullsize}3-ghost.jpg`,
          },
          {
            thumbnail: `${thumbnail}3-ophelia-150x150.jpg`,
            fullsize: `${fullsize}3-ophelia.jpg`,
          },
          {
            thumbnail: `${thumbnail}3-rosencrantz_guildenstern-150x150.jpg`,
            fullsize: `${fullsize}3-rosencrantz_guildenstern.jpg`,
          },
          {
            thumbnail: `${thumbnail}3-yorick2-150x150.jpg`,
            fullsize: `${fullsize}3-yorick2.jpg`,
          },
        ],
      },
    ],
  },
  {
    name: 'Book Credits',
    to: '/books',
    images: [
      {
        subHeading: 'Cover & Interiors',
        subImages: [
          {
            thumbnail: `${thumbnail}Princess-cover300dpi-300x261.jpg`,
            fullsize: `${fullsize}princess-pg02-copy.jpg`,
          },
          {
            thumbnail: `${thumbnail}princess2-cover-300x253.jpg`,
            fullsize: `${fullsize}princess2_pg003-copy.jpg`,
          },
          {
            thumbnail: `${thumbnail}Brooks_sometimesMagic_cover-200x300.jpg`,
            fullsize: `${fullsize}Brooks_sometimesMagic_cover.jpg`,
          },
        ],
      },
      {
        subHeading: 'Interiors',
        subImages: [
          {
            thumbnail: `${thumbnail}slowRegard_cover-192x300.jpg`,
            fullsize: `${fullsize}slowRegard_cover.jpg`,
          },
        ],
      },
      {
        subHeading: 'Covers',
        subImages: [
          {
            thumbnail: `${thumbnail}scalzi_mallet-200x300.jpg`,
            fullsize: `${fullsize}scalzi_mallet.jpg`,
          },
          {
            thumbnail: `${thumbnail}scalzi_dont-203x300.jpg`,
            fullsize: `${fullsize}scalzi_dont.jpg`,
          },
          {
            thumbnail: `${thumbnail}virtueSignaling_cover-198x300.jpg`,
            fullsize: `${fullsize}virtueSignaling_cover.jpg`,
          },
          {
            thumbnail: `${thumbnail}BrokenEmpire_cover-203x300.jpg`,
            fullsize: `${fullsize}BrokenEmpire_cover.jpg`,
          },
        ],
      },
    ],
  },
];
