export const lists = {
  genres: [
    { text: "Action", description: "" },
    { text: "Adventure", description: "" },
    { text: "Arcade", description: "" },
    { text: "Beat 'em up", description: "" },
    { text: "Board game", description: "" },
    { text: "Dungeon Crawler", description: "" },
    { text: "Fighting", description: "" },
    { text: "Pilot sim", description: "" },
    { text: "Playable Cinema", description: "" },
    { text: "Puzzle", description: "" },
    { text: "Racing", description: "" },
    { text: "Shoot 'em up", description: "" },
    { text: "Shooter", description: "" },
    { text: "Sports", description: "" },
    { text: "Versus", description: "" }
  ],
  cameras: [
    { text: "cinematic", description: "" },
    { text: "first-person", description: "" },
    { text: "follow", description: "" },
    { text: "horizontal scroll", description: "" },
    { text: "isometric", description: "" },
    { text: "single-screen/arena", description: "" },
    { text: "third-person", description: "" },
    { text: "top-down", description: "" },
    { text: "vertical scroll", description: "" }
  ],
  inputScheme: [
    { text: "1D linear analog", description: "" },
    { text: "1D linear grid", description: "" },
    { text: "2D analog", description: "" },
    { text: "2D grid", description: "" },
    { text: "2.5D analog", description: "" },
    { text: "3D focused point", description: "" },
    { text: "auto/command", description: "" },
    { text: "directional/momentum", description: "" },
    { text: "input timing", description: "" },
    { text: "light gun", description: "" },
    { text: "2D side-scroller", description: "" },
    { text: "simulation/emulation", description: "" }
  ],
  theme: [
    { text: "animal", description: "" },
    { text: "car", description: "" },
    { text: "colorful", description: "" },
    { text: "competitive", description: "" },
    { text: "cute", description: "" },
    { text: "cyberpunk", description: "" },
    { text: "dark _____", description: "" },
    { text: "exaggerated/fantastical", description: "" },
    { text: "extreme sports", description: "" },
    { text: "food", description: "" },
    { text: "gothic", description: "" },
    { text: "historic", description: "" },
    { text: "horror", description: "" },
    { text: "martial arts", description: "" },
    { text: "mash-up", description: "" },
    { text: "medieval fantasy", description: "" },
    { text: "military", description: "" },
    { text: "motorcycle", description: "" },
    { text: "music", description: "" },
    { text: "mythology", description: "" },
    { text: "neon", description: "" },
    { text: "none", description: "" },
    { text: "nonsense", description: "" },
    { text: "popular license", description: "" },
    { text: "pre-historic", description: "" },
    { text: "realistic", description: "" },
    { text: "sci-fi", description: "" },
    { text: "simple", description: "" },
    { text: "space", description: "" },
    { text: "tank", description: "" },
    { text: "technological", description: "" },
    { text: "trippy", description: "" },
    { text: "urban", description: "" },
    { text: "violence and gore", description: "" },
    { text: "wireframe", description: "" }
  ],
  mechanics: [
    { text: "1-hit death", description: "" },
    { text: "aim/fire", description: "" },
    { text: "chase", description: "" },
    { text: "combat", description: "" },
    { text: "competitive ranking", description: "" },
    { text: "directional-track", description: "" },
    { text: "dungeon grid", description: "" },
    { text: "enemy waves", description: "" },
    { text: "exploration", description: "" },
    { text: "item collection", description: "" },
    { text: "leveling", description: "" },
    { text: "locked scroll", description: "" },
    { text: "maneuver/navigation", description: "" },
    { text: "on-rails/push", description: "" },
    { text: "open-world", description: "" },
    { text: "physics", description: "" },
    { text: "puzzle-solving", description: "" },
    { text: "rooms", description: "" },
    { text: "reflex", description: "" },
    { text: "sorting", description: "" },
    { text: "time limit", description: "" },
    { text: "vehicles", description: "" },
    { text: "wrap-around/teleport/infinite", description: "" }
  ]
};

export const gamesList = [
  {
    title: "1942",
    genres: "Shoot 'em up",
    cameras: "vertical scroll",
    inputScheme: "2D analog",
    themes: ["historic", "military"],
    mechanics: [
      "1-hit death",
      "enemy waves",
      "item collection",
      "maneuver/navigation",
      "on-rails/push"
    ],
    description: "",
    images: [],
    previewURL: "https://youtu.be/WRnn-bhv-AE?si=7xwMAQq2pmhl0Hrr"
  },
  {
    title: "720°",
    genres: "Sports",
    cameras: "isometric",
    inputScheme: "2D analog",
    themes: "extreme sports",
    mechanics: [
      "open-world",
      "exploration",
      "maneuver/navigation",
      "item collection"
    ],
    description: "",
    images: [],
    previewURL: "https://youtu.be/CBuVQfbprx8?si=q5VtzXCpIbEQCfOZ"
  },
  {
    title: "After Burner",
    genres: "Pilot sim",
    cameras: "third-person",
    inputScheme: "simulation/emulation",
    themes: ["military", "realistic"],
    mechanics: ["on-rails/push"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/pSvxN7nMNwo?si=mhsB23ZJHA0IcLRU"
  },
  {
    title: "Airwolf",
    genres: "Shoot 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: "military",
    mechanics: [
      "1-hit death",
      "enemy waves",
      "maneuver/navigation",
      "on-rails/push"
    ],
    description: "",
    images: [],
    previewURL: "https://youtu.be/D--ajlwPCac?si=NJfzsJr8kJ_XQMWy"
  },
  {
    title: "Altered Beast",
    genres: "Arcade",
    cameras: "horizontal scroll",
    inputScheme: "2D side-scroller",
    themes: ["exaggerated/fantastical", "mythology"],
    mechanics: ["on-rails/push", "combat", "item collection", "leveling"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/I075dM_AZ2g?si=nlAYQbtRziJqFFLA"
  },
  {
    title: "Arkanoid",
    genres: "Puzzle",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: ["none", "colorful", "simple"],
    mechanics: ["maneuver/navigation", "physics"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Th-Z6QQ5AOQ?si=-w5J4eobydFHh_Xk"
  },
  {
    title: "Asteroids",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "directional/momentum",
    themes: ["simple", "space"],
    mechanics: ["1-hit death", "maneuver/navigation", "wrap-around/teleport/infinite"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/9Ydu8UhIjeU?si=J0CCpgyf3OSHqThL"
  },
  {
    title: "Bad Dudes vs. DragonNinja",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D side-scroller",
    themes: ["exaggerated/fantastical", "martial arts", "urban"],
    mechanics: ["locked scroll", "combat", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/iyTrXsoSvxU?si=jOr0-Imr5niMlp6e"
  },
  {
    title: "Battlezone",
    genres: "Pilot sim",
    cameras: "first-person",
    inputScheme: "simulation/emulation",
    themes: ["military", "simple", "tank", "wireframe"],
    mechanics: ["open-world", "aim/fire", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Ctr54kopo8I?si=YMmixKkJQMv3qmyO"
  },
  {
    title: "Berzerk",
    genres: "Action",
    cameras: "top-down",
    inputScheme: "2D analog",
    themes: ["sci-fi", "simple"],
    mechanics: ["dungeon grid", "aim/fire", "exploration"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/PIXYRahWG6A?si=Gn_LgBszKEUNPvxL"
  },
  {
    title: "Bomb Jack",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["none", "colorful", "nonsense"],
    mechanics: ["1-hit death", "item collection", "physics"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/hCQ_iFsFQNA?si=0tlCSZFCAzeEnF5y"
  },
  {
    title: "Bubble Bobble",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["animal", "colorful", "cute"],
    mechanics: ["1-hit death", "chase", "item collection", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/SwwEbQuAGKc?si=mBICbeKk78raorAM"
  },
  {
    title: "Burgertime",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["food", "nonsense", "simple", "trippy"],
    mechanics: ["1-hit death", "chase", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/QlPp7WEnaCI?si=HKvmeJ_RCVWYe1UP"
  },
  {
    title: "Cabal",
    genres: "Shooter",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: ["military", "realistic"],
    mechanics: ["aim/fire", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/WPSwJPsPiek?si=a1SFsAQlLuAdbwMD"
  },
  {
    title: "Centipede",
    genres: "Arcade",
    cameras: "top-down",
    inputScheme: "1D linear analog",
    themes: ["colorful", "simple", "space"],
    mechanics: ["1-hit death", "aim/fire", "enemy waves", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/V7XEmf02zEM?si=EAjXA65vpg0NO8PJ"
  },
  {
    title: "Contra",
    genres: "Action",
    cameras: "horizontal scroll",
    inputScheme: "2D side-scroller",
    themes: ["exaggerated/fantastical", "military", "sci-fi"],
    mechanics: ["1-hit death", "combat", "item collection"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/_R9B7WTHzNw?si=m7NRk0CUYKOSOq_I"
  },
  {
    title: "Daytona USA",
    genres: "Racing",
    cameras: ["first-person", "third-person"],
    inputScheme: "directional-track",
    themes: ["competitive", "realistic", "car"],
    mechanics: ["competitive ranking", "maneuver/navigation", "physics"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/GAcMqFTkAs8?si=k547hds4IGRRT8FB"
  },
  {
    title: "Defender",
    genres: "Shoot 'em up",
    cameras: "horizontal scroll",
    inputScheme: "directional/momentum",
    themes: ["sci-fi", "simple", "space"],
    mechanics: ["1-hit death", "combat", "maneuver/navigation", "wrap-around/teleport/infinite"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/qq_Zvg9KlII?si=TZ572TCVPhkpmOoV"
  },
  {
    title: "Dig Dug",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D analog",
    themes: ["colorful", "cute", "nonsense", "simple"],
    mechanics: ["1-hit death", "exploration", "maneuver/navigation", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/zOuLiKwHciw?si=sMTgxOvAmcNm3UoW"
  },
  {
    title: "Donkey Kong",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["colorful", "mash-up", "nonsense", "simple"],
    mechanics: ["1-hit death", "chase", "maneuver/navigation", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/KJkcNP4VkiM?si=0YHRVmfAae5Zx2SS"
  },
  {
    title: "Double Dragon",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: ["martial arts", "urban"],
    mechanics: ["locked scroll", "combat", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/rTy6NS7Bciw?si=B3vHjaeBmXqdTVP_"
  },
  {
    title: "Dragon's Lair",
    genres: "Playable Cinema",
    cameras: "cinematic",
    inputScheme: "input timing",
    themes: ["exaggerated/fantastical", "medieval fantasy"],
    mechanics: ["1-hit death", "puzzle-solving", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/hdumVFgwgP8?si=nTCuSACn19g88MYE"
  },
  {
    title: "Elevator Action",
    genres: "Arcade",
    cameras: "vertical scroll",
    inputScheme: "2D side-scroller",
    themes: "simple",
    mechanics: ["1-hit death", "combat", "exploration", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/LM5reigEnv4?si=yDDu9cV-tLahjEIv"
  },
  {
    title: "Final Fight",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: ["martial arts", "urban"],
    mechanics: ["locked scroll", "combat", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/wymIQ1FywrA?si=AJZ0eUGu7lG5JW89"
  },
  {
    title: "Frogger",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D grid",
    themes: ["animal", "simple"],
    mechanics: ["1-hit death", "maneuver/navigation", "puzzle-solving", "reflex", "sorting"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/WNrz9_Fe-Us?si=D96JkLGQ3WtYhlfi"
  },
  {
    title: "Galaga",
    genres: "Shoot 'em up",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: ["simple", "space"],
    mechanics: ["1-hit death", "enemy waves", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/dvjapcHsqXY?si=EUpXD5FP_PfVP8y-"
  },
  {
    title: "Gauntlet",
    genres: "Dungeon Crawler",
    cameras: "top-down",
    inputScheme: "2D analog",
    themes: "medieval fantasy",
    mechanics: ["rooms", "chase", "combat", "exploration", "maneuver/navigation", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/fLnkCAFihqA?si=LlYi11mYwag9Oj9_"
  },
  {
    title: "Ghosts'n Goblins",
    genres: "Action",
    cameras: "horizontal scroll",
    inputScheme: "2D side-scroller",
    themes: ["dark _____", "gothic", "horror", "medieval fantasy"],
    mechanics: ["locked scroll", "combat", "enemy waves", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/dqMlLueMpew?si=fq9vr9gdQDyMBV-v"
  },
  {
    title: "Golden Axe",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: "medieval fantasy",
    mechanics: ["locked scroll", "combat", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/HQgHoshKghg?si=CKOp5Bp9khoyycPz"
  },
  {
    title: "Gorf",
    genres: "Shoot 'em up",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: ["sci-fi", "simple"],
    mechanics: ["1-hit death", "enemy waves", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/zyarBNUisj8?si=L-cFgxi8o2btl6Nr"
  },
  {
    title: "Gyruss",
    genres: "Shoot 'em up",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: ["sci-fi", "space"],
    mechanics: ["1-hit death", "enemy waves", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/haehLgNNB4c?si=7XeGHSm8X9H-uhoe"
  },
  {
    title: "Hang-On",
    genres: "Racing",
    cameras: "third-person",
    inputScheme: "1D linear analog",
    themes: ["motorcycle", "simple"],
    mechanics: ["on-rails/push", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/TopLKeDqYhw?si=kxmaopHA0qO-gr_5"
  },
  {
    title: "Hogan's Alley",
    genres: "Shooter",
    cameras: "cinematic",
    inputScheme: "light gun",
    themes: ["simple", "urban"],
    mechanics: ["on-rails/push", "aim/fire", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/UhqsQAaXGq0?si=P9YFTvZyvE6pEf-k"
  },
  {
    title: "Ikari Warriors",
    genres: "Shoot 'em up",
    cameras: "vertical scroll",
    inputScheme: "2D analog",
    themes: "military",
    mechanics: ["locked scroll", "combat", "enemy waves", "vehicles"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/yQYoiZcqURg?si=gKruJnO5OXkAsMjS"
  },
  {
    title: "Joust",
    genres: "Versus",
    cameras: "single-screen/arena",
    inputScheme: "directional/momentum",
    themes: ["competitive", "simple"],
    mechanics: ["wrap-around/teleport/infinite", "1-hit death", "combat", "maneuver/navigation", "physics"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/BWoiLNri0OM?si=G80Pnwayb9sH9Y-g"
  },
  {
    title: "Karate Champ",
    genres: "Fighting",
    cameras: "single-screen/arena",
    inputScheme: "simulation/emulation",
    themes: ["competitive", "martial arts"],
    mechanics: ["combat", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/gwV3xqS9_aQ?si=3vnrvnLyBaFK6i1J"
  },
  {
    title: "Klax",
    genres: "Puzzle",
    cameras: "single-screen/arena",
    inputScheme: "1D linear grid",
    themes: ["colorful", "music"],
    mechanics: ["puzzle-solving", "sorting"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/wr9OCXCsd2g?si=t5UE9zjE2zGx-Xur"
  },
  {
    title: "Knights Of The Round",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: "medieval fantasy",
    mechanics: ["locked scroll", "combat", "enemy waves", "leveling"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/jwv_I7dy0z4?si=M_PGA5_BHoJR1y7Q"
  },
  {
    title: "Kung-Fu Master",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D side-scroller",
    themes: "martial arts",
    mechanics: ["locked scroll", "1-hit death", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/EgO4HtWIJjQ?si=qWD46X-EbeRMbEyi"
  },
  {
    title: "Lode Runner",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: "nonsense",
    mechanics: ["1-hit death", "exploration", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Vuqh2YGHzeI?si=727Xd0QFn-m6ovye"
  },
  {
    title: "Lunar Lander",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "directional/momentum",
    themes: ["simple", "space", "wireframe"],
    mechanics: ["physics"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/UdheQXhZzWU?si=TfWfrgGXeVjRuLc7"
  },
  {
    title: "Marble Madness",
    genres: "Adventure",
    cameras: "isometric",
    inputScheme: "2D analog",
    themes: "simple",
    mechanics: ["open-world", "exploration", "maneuver/navigation", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/XzlA1JTPMto?si=B-uH8shakcAPc2mC"
  },
  {
    title: "Mario Bros.",
    genres: "Versus",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["competitive", "nonsense", "simple"],
    mechanics: ["1-hit death"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Qn5z1x9N_jE?si=WldQi6DRyFOZaNkn"
  },
  {
    title: "Missile Command",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "auto/command",
    themes: ["colorful", "simple"],
    mechanics: ["aim/fire"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/nokIGklnBGY?si=7r94MG0gHAHuDVW1"
  },
  {
    title: "Moon Patrol",
    genres: "Shoot 'em up",
    cameras: "horizontal scroll",
    inputScheme: "1D linear analog",
    themes: ["car", "sci-fi", "space"],
    mechanics: ["1-hit death", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/K-tzmzBAm8A?si=iNCeRQ05El90bgLk"
  },
  {
    title: "Mortal Kombat",
    genres: "Fighting",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["martial arts", "realistic", "violence and gore"],
    mechanics: ["combat", "reflex", "time limit"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/qwZQikCk4N0?si=wOslqvjG27d6pxp6"
  },
  {
    title: "NBA Jam",
    genres: "Sports",
    cameras: "follow",
    inputScheme: "2D analog",
    themes: ["competitive", "exaggerated/fantastical", "popular license"],
    mechanics: ["competitive ranking"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/jzQmf1edPkY?si=nZ6-ifq946VzwiXN"
  },
  {
    title: "Operation Wolf",
    genres: "Shooter",
    cameras: "cinematic",
    inputScheme: "light gun",
    themes: ["military", "realistic"],
    mechanics: ["aim/fire", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/fzAqA62ftVo?si=JHrgBHlgry3ntMco"
  },
  {
    title: "OutRun",
    genres: "Racing",
    cameras: "third-person",
    inputScheme: "1D linear analog",
    themes: ["car", "realistic"],
    mechanics: ["directional-track", "time limit"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/hMv0Pg1AxFc?si=AqXghWn5huu5WH8F"
  },
  {
    title: "Pac-Man",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D analog",
    themes: ["colorful", "nonsense", "simple", "wireframe"],
    mechanics: ["1-hit death", "chase", "item collection", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/dScq4P5gn4A?si=Q5ZgkDAcw8ZXLsG-"
  },
  {
    title: "Paperboy",
    genres: "Arcade",
    cameras: "isometric",
    inputScheme: "2D analog",
    themes: ["exaggerated/fantastical", "urban"],
    mechanics: ["on-rails/push", "1-hit death", "chase", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/l6DEL9GY-VU?si=SGORhaKgf5a4nLKY"
  },
  {
    title: "Pengo",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D analog",
    themes: ["animal", "colorful", "cute", "nonsense"],
    mechanics: ["1-hit death", "chase", "maneuver/navigation", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/6q3bNHvj92c?si=5EXcgH21Pc9BpUs0"
  },
  {
    title: "Phoenix",
    genres: "Shoot 'em up",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: "space",
    mechanics: ["1-hit death", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/EwlhQziQ-kw?si=Z5FULWuArUxPr4jZ"
  },
  {
    title: "Pole Position",
    genres: "Racing",
    cameras: "third-person",
    inputScheme: "1D linear analog",
    themes: ["car", "simple"],
    mechanics: ["directional-track", "maneuver/navigation", "time limit"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/FFs1Xc82Q0U?si=oBpynb7srqmdlyrJ"
  },
  {
    title: "Popeye",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["popular license"],
    mechanics: ["wrap-around/teleport/infinite", "1-hit death", "combat", "item collection", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/hErObuqvlHs?si=QzT7paILLodDKKO7"
  },
  {
    title: "Punch-Out!!",
    genres: "Sports",
    cameras: "third-person",
    inputScheme: "input timing",
    themes: ["exaggerated/fantastical", "realistic"],
    mechanics: ["combat", "puzzle-solving", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/XeQip05mDRc?si=AMRiFnN_2EHzLLlD"
  },
  {
    title: "Q*bert",
    genres: "Board game",
    cameras: "single-screen/arena",
    inputScheme: "2D grid",
    themes: ["colorful", "nonsense", "trippy"],
    mechanics: ["1-hit death", "chase", "maneuver/navigation", "puzzle-solving"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/9yDiNLlwlDE?si=a5IKx_9R3YWTY51b"
  },
  {
    title: "Rally-X",
    genres: "Arcade",
    cameras: "top-down",
    inputScheme: "directional/momentum",
    themes: ["car", "simple"],
    mechanics: ["open-world", "chase", "exploration", "item collection", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/ssB-FTfuH3U?si=lbZKhkctOc_GIh1e"
  },
  {
    title: "Rampage",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D side-scroller",
    themes: ["exaggerated/fantastical", "sci-fi", "urban"],
    mechanics: ["rooms", "combat", "enemy waves", "maneuver/navigation", "item collection"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Au7UYaqpJw8?si=Jp00R7qniB2hGtjp"
  },
  {
    title: "Robotron 2084",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D analog",
    themes: ["colorful", "neon", "simple"],
    mechanics: ["1-hit death", "aim/fire", "combat", "enemy waves", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/aOVA2Axxfdk?si=hVEgpWS8BM2pPDM0"
  },
  {
    title: "Root Beer Tapper",
    genres: "Puzzle",
    cameras: "single-screen/arena",
    inputScheme: "1D linear grid",
    themes: "simple",
    mechanics: ["maneuver/navigation", "puzzle-solving", "reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/oAxwgo3atbs?si=fomUHPkBGM3K0z8c"
  },
  {
    title: "Smash TV",
    genres: "Shoot 'em up",
    cameras: "single-screen/arena",
    inputScheme: "2D analog",
    themes: "exaggerated/fantastical",
    mechanics: ["1-hit death", "aim/fire", "combat", "enemy waves", "item collection", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/WIPn7RZJ4vg?si=1egAPEbaymrI3Sj8"
  },
  {
    title: "Space Harrier",
    genres: "Shooter",
    cameras: "third-person",
    inputScheme: "2D analog",
    themes: ["exaggerated/fantastical", "sci-fi"],
    mechanics: ["on-rails/push", "enemy waves", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Hzgrb-mjLaM?si=n83GikvUfqgAz9LW"
  },
  {
    title: "Space Invaders",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "1D linear analog",
    themes: ["colorful", "space"],
    mechanics: ["1-hit death", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/kR2fjwr-TzA?si=hbGDCmVTol1F49I0"
  },
  {
    title: "Spy Hunter",
    genres: "Shoot 'em up",
    cameras: "top-down",
    inputScheme: "2D analog",
    themes: "car",
    mechanics: ["on-rails/push", "combat", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/93ds1VldZGI?si=j__NQQuMr3wHDHXK"
  },
  {
    title: "Street Fighter II",
    genres: "Fighting",
    cameras: "follow",
    inputScheme: "2D side-scroller",
    themes: ["competitive", "exaggerated/fantastical", "martial arts"],
    mechanics: ["combat", "reflex", "time limit"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/xI284D4y1q4?si=CyfhRKhupWakoaYZ"
  },
  {
    title: "Teenage Mutant Ninja Turtles: The Arcade Game",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: ["martial arts", "popular license"],
    mechanics: ["locked scroll", "combat", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/2jLO1upcd8w?si=yLqrg1ipfi_FnlyJ"
  },
  {
    title: "Tekken",
    genres: "Fighting",
    cameras: "follow",
    inputScheme: "3D focused point",
    themes: ["competitive", "martial arts"],
    mechanics: ["combat", "time limit"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/CEFan85sWsQ?si=JvM9XoJLELG-9Ucf"
  },
  {
    title: "Tempest",
    genres: "Shoot 'em up",
    cameras: "single-screen/arena",
    inputScheme: "1D linear grid",
    themes: ["colorful", "simple", "wireframe"],
    mechanics: ["rooms", "1-hit death", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/TUIcNZxPnh8?si=CuZaVBAnfMZsBlKy"
  },
  {
    title: "Time Crisis",
    genres: "Shooter",
    cameras: "cinematic",
    inputScheme: "light gun",
    themes: "none",
    mechanics: ["on-rails/push", "aim/fire", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/zWnFwJXOnAg?si=54O6t1UAmao3gS5U"
  },
  {
    title: "Time Pilot",
    genres: "Shoot 'em up",
    cameras: "top-down",
    inputScheme: "2D analog",
    themes: ["military", "simple"],
    mechanics: ["wrap-around/teleport/infinite", "1-hit death", "combat", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/aixIzoIdCVM?si=P_wyhVDOr7MM-MaD"
  },
  {
    title: "Track & Field",
    genres: "Sports",
    cameras: "follow",
    inputScheme: "simulation/emulation",
    themes: "competitive",
    mechanics: ["reflex"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/ozcE8qzTdHo?si=AVo0l9GVbYKpJB_A"
  },
  {
    title: "TRON",
    genres: "Arcade",
    cameras: "single-screen/arena",
    inputScheme: "2D analog",
    themes: ["cyberpunk", "technological"],
    mechanics: ["rooms", "1-hit death", "aim/fire", "combat", "puzzle-solving", "vehicles"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/GmPbeHCkAmc?si=hyPqimVZNR_zLjn1"
  },
  {
    title: "X-Men",
    genres: "Beat 'em up",
    cameras: "horizontal scroll",
    inputScheme: "2D analog",
    themes: "popular license",
    mechanics: ["locked scroll", "combat", "enemy waves"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/VgF_VMQ19aA?si=wNcrfcwknnQAxyAi"
  },
  {
    title: "Zaxxon",
    genres: "Shoot 'em up",
    cameras: "isometric",
    inputScheme: "2.5D analog",
    themes: "space",
    mechanics: ["on-rails/push", "combat", "maneuver/navigation"],
    description: "",
    images: [],
    previewURL: "https://youtu.be/Ta0xVtQ_fnk?si=-R2u71ylGlrkZ-V8"
  }
];
