import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  image: string;
  queryParams: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  queryParams,
}) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      rotateY: [0, 10, -10, 0],
      scale: 1.1,
      boxShadow: "0 0 30px #00D4FF, 0 0 60px #FF00FF",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotateY: 0,
      scale: 1,
      boxShadow: "0 0 10px #00D4FF",
      transition: { duration: 0.3 },
    });
  };

  return (
    <Link to={`/animatedScenes?${queryParams}`}>
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-[#00D4FF] rounded-xl overflow-hidden cursor-pointer"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        style={{ height: "350px" }}
      >
        <div className="neon-spark" />
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover brightness-90 animate-pulse"
        />
        <div className="p-4 text-center">
          <h2 className="text-[#FF00FF] text-2xl uppercase font-bold animate-bounce">
            {title}
          </h2>
          <p className="text-[#00D4FF] mt-2 italic">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

const Anime: React.FC = () => {
  const cards = [
    {
      title: "One Piece",
      description: "Zoro slashes through samurai with unmatched resolve!",
      image:
        "https://i.pinimg.com/originals/53/1b/f2/531bf28ee274611ab3b887c9c301d88a.jpg",
      name: "One Piece: Wano Arc",
      rating: 4.9,
      tags: ["Action", "Adventure", "Swords", "ZoroVibes"],
      date: "July 7, 2019",
      background: "/Anime/Backgrounds/One-pieceBg.png",
      circle: "/Anime/PNG/one-piece.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/one-piece",
    },
    {
      title: "Naruto",
      description:
        "Naruto Uzumaki runs toward his destiny with unyielding spirit!",
      image:
        "https://i.ytimg.com/vi/8QUA270RWic/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGDkgTSh_MA8=&rs=AOn4CLAEFefsWAXEbLvryP17RLjtWGZ3HA",
      name: "Naruto: Original Series",
      rating: 4.8,
      tags: ["Action", "Ninja", "Coming of Age", "LeafVillage"],
      date: "October 3, 2002",
      background: "https://i.ytimg.com/vi/it7kT8kZvbY/maxresdefault.jpg",
      circle: "/Anime/PNG/naruto.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/naruto",
    },
    {
      title: "Bleach",
      description:
        "Ichigo Kurosaki unleashes his Bankai to protect the living and the dead!",
      image:
        "https://avatars.mds.yandex.net/i?id=9f9221fd3b613fa50049c171cdbc4984_l-5220466-images-thumbs&n=13",
      name: "Bleach: Soul Society Arc",
      rating: 4.7,
      tags: ["Action", "Supernatural", "Soul Reapers", "Bankai"],
      date: "October 5, 2004",
      background: "/Anime/Backgrounds/BleachBg.png",
      circle: "/Anime/PNG/bleach.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/bleach",
    },
    {
      title: "Solo Leveling",
      description:
        "Sung Jin-Woo rises from weak hunter to unstoppable shadow monarch!",
      image:
        "https://media.zenfs.com/en/comingsoon_net_477/34300974a0dc0f46311b2565929501d4",
      name: "Solo Leveling: Season 1",
      rating: 4.9,
      tags: ["Action", "Fantasy", "OP MC", "Dungeon"],
      date: "January 6, 2024",
      background: "/Anime/Backgrounds/SoloLevelingBg.png",
      circle: "/Anime/PNG/solo-leveling.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/solo-leveling",
    },
    {
      title: "Code Geass",
      description: "Lelouch commands rebellion with the power of the Geass!",
      image:
        "https://avatars.mds.yandex.net/get-mpic/1925870/img_id4618453202584931467.jpeg/orig",
      name: "Code Geass: Lelouch of the Rebellion",
      rating: 4.8,
      tags: ["Strategy", "Mecha", "Rebellion", "Drama"],
      date: "October 6, 2006",
      background: "/Anime/Backgrounds/CodeGeassBg.png",
      circle: "/Anime/PNG/code-geass.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/code-geass",
    },
    {
      title: "Blue Lock",
      description: "Only one striker can survive the ultimate ego test!",
      image:
        "https://s.yimg.com/ny/api/res/1.2/m.N9oTDe4CYmmzxIfMl47A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk-/https://media.zenfs.com/en/comingsoon_net_477/b095179da5d372a38f106738dae85525",
      name: "Blue Lock: Season 1",
      rating: 4.6,
      tags: ["Sports", "Football", "Ego", "Training"],
      date: "October 9, 2022",
      background: "/Anime/Backgrounds/BlueLockBg.png",
      circle: "/Anime/PNG/blue-lock.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/blue-lock",
    },
    {
      title: "Jujutsu Kaisen",
      description: "Cursed energy meets Zoro’s warrior spirit!",
      image:
        "https://i.pinimg.com/originals/92/5c/ff/925cffe00761015c0b285a0c66880301.jpg",
      name: "Jujutsu Kaisen",
      rating: 4.8,
      tags: ["Supernatural", "Action", "DarkFantasy", "ZoroSpirit"],
      date: "October 3, 2020",
      background: "/Anime/Backgrounds/sukuna_t.png",
      circle: "/Anime/PNG/Sukuna_t-pothe.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/jujutsu-kaisen/",
    },
    {
      title: "Demon Slayer: Swordsmith Village",
      description: "Forging blades with Zoro’s unyielding honor!",
      image:
        "https://avatars.mds.yandex.net/i?id=e708790cf3fbf20e7db5332dd3abfbca_l-4960217-images-thumbs&n=13",
      name: "Demon Slayer: Swordsmith Village",
      rating: 4.7,
      tags: ["Action", "Swords", "Honor", "ZoroEnergy"],
      date: "April 9, 2023",
      background: "/Anime/Backgrounds/demonSlayerBg.png",
      circle: "/Anime/PNG/demonSlayer (1).png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/kimetsu-no-yaiba/",
    },
    {
      title: "Death Note",
      description:
        "Light Yagami brings justice to the world... or so he believes.",
      image:
        "https://i.ytimg.com/vi/WYYLPUznvJo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGcgZyhnMA8=&rs=AOn4CLBlVevMB6t91hgecghh4Pg2xC7izg",
      name: "Death Note",
      rating: 4.9,
      tags: ["Mystery", "Thriller", "Psychological", "Justice"],
      date: "October 4, 2006",
      background: "/Anime/Backgrounds/DeathNoteBg.png",
      circle: "/Anime/PNG/death-note.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/death-note",
    },
    {
      title: "Classroom of the Elite",
      description:
        "Kiyotaka Ayanokōji hides his brilliance in a school built on merit and manipulation.",
      image:
        "https://avatars.mds.yandex.net/i?id=cf37b497008b643d4c9f8b146926f27e_l-10972138-images-thumbs&n=13",
      name: "Classroom of the Elite: Season 1",
      rating: 4.6,
      tags: ["Psychological", "School", "Drama", "Strategy"],
      date: "July 12, 2017",
      background: "/Anime/Backgrounds/ClassroomEliteBg.png",
      circle: "/Anime/PNG/classroom-elite.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/classroom-elite",
    },
    {
      title: "The Eminence in Shadow",
      description:
        "Cid Kagenou crafts his secret organization from fantasy... or is it reality?",
      image:
        "https://avatars.dzeninfra.ru/get-zen_doc/4961935/pub_639ef2378df5c5439f74986f_639ef56bcb5346204d8151b2/scale_1200",
      name: "The Eminence in Shadow: Season 1",
      rating: 4.7,
      tags: ["Action", "Isekai", "Comedy", "Secret Organization"],
      date: "October 5, 2022",
      background: "http://ii.yakuji.moe/a/src/1570342256964.jpg",
      circle: "/Anime/PNG/eminence-shadow.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/shadow",
    },
    {
      title: "Attack on Titan",
      description:
        "Eren Yeager vows to destroy the Titans after they bring ruin to his world!",
      image:
        "https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6629224dc3e3f7033d18d9fd_6629f205303420733c97dac9/scale_1200",
      name: "Attack on Titan: Final Season",
      rating: 4.9,
      tags: ["Action", "Dark Fantasy", "Titans", "Revenge"],
      date: "December 7, 2020",
      background: "/Anime/Backgrounds/AOTBg.png",
      circle: "/Anime/PNG/aot.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/shingeki-no-kyojin",
    },

    {
      title: "Dororo",
      description:
        "Hyakkimaru, born without limbs, hunts demons to reclaim his body with Dororo.",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/cc6652f5808536c9b16791a336b57ce9406a9daa73ae64ae44861a17cb443c5c.jpg",
      name: "Dororo",
      rating: 4.6,
      tags: ["Action", "Adventure", "Historical", "Demons"],
      date: "January 7, 2019",
      background: "/Anime/Backgrounds/DororoBg.png",
      circle: "/Anime/PNG/dororo.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/dororo",
    },
    {
      title: "Toradora!",
      description:
        "Ryuuji and Taiga, opposites, team up to win their crushes' hearts.",
      image:
        "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/1e5af6bba8e2ce272fc6095dbc481cda.jpg",
      name: "Toradora!",
      rating: 4.8,
      tags: ["Romance", "Comedy", "Slice of Life", "School"],
      date: "October 2, 2008",
      background: "/Anime/Backgrounds/ToradoraBg.png",
      circle: "/Anime/PNG/toradora.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/toradora",
    },
    {
      title: "Black Clover",
      description:
        "Asta, magicless, aims to be Wizard King with his anti-magic grimoire.",
      image:
        "https://lh6.googleusercontent.com/CF19bkN1O3hAwOMkyJqL9Wwj2Dqd2yZMotG-aoihTkn1kzkzrKM1hcuIkT8GbGSX-QodxLFYvzDR2qO7m8tK8pTA9gKd9imXzxDrcEzY5o6sAWDpGMxgig5J8luiErcbvByJY8hCecuBSqMTvm3uVA",
      name: "Black Clover",
      rating: 4.6,
      tags: ["Action", "Fantasy", "Magic", "Adventure"],
      date: "October 3, 2017",
      background: "/Anime/Backgrounds/BlackCloverBg.png",
      circle: "/Anime/PNG/blackclover.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/black-clover",
    },
    {
      title: "Hunter x Hunter",
      description:
        "Gon dreams of becoming a Hunter, facing trials and finding friends.",
      image:
        "https://www.arcsystemworks.com/wp-content/uploads/2024/06/HxH-Key-Visual-1.png",
      name: "Hunter x Hunter",
      rating: 4.9,
      tags: ["Action", "Adventure", "Fantasy", "Shounen"],
      date: "October 2, 2011",
      background: "/Anime/Backgrounds/HunterXHunterBg.png",
      circle: "/Anime/PNG/hunterxhunter.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/hunter-x-hunter",
    },
    {
      title: "Re:Zero - Starting Life in Another World",
      description:
        "Subaru, trapped in a fantasy world, restarts after death to save Emilia.",
      image:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/10/rezero-season-3-poster.jpg",
      name: "Re:Zero",
      rating: 4.8,
      tags: ["Fantasy", "Adventure", "Drama", "Isekai"],
      date: "April 4, 2016",
      background: "/Anime/Backgrounds/ReZeroBg.png",
      circle: "/Anime/PNG/rezero.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/re-zero",
    },
    {
      title: "Dr. Stone",
      description:
        "Senku uses science to rebuild civilization after humanity's petrification.",
      image: "https://i.ytimg.com/vi/FBZa6BqSGAs/maxresdefault.jpg",
      name: "Dr. Stone",
      rating: 4.8,
      tags: ["Science Fiction", "Adventure", "Shounen", "Post-Apocalyptic"],
      date: "July 5, 2019",
      background: "/Anime/Backgrounds/DrStoneBg.png",
      circle: "/Anime/PNG/drstone.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/dr-stone",
    },
    {
      title: "Mashle: Magic and Muscles",
      description:
        "Mash, magicless, relies on muscles to excel in a magical school.",
      image:
        "https://resizing.flixster.com/BOFzlRehZrlumoR2Ox6ysbVE4aQ=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p24451899_b_h9_ad.jpg",
      name: "Mashle",
      rating: 4.6,
      tags: ["Action", "Comedy", "Fantasy", "School"],
      date: "April 8, 2023",
      background: "/Anime/Backgrounds/MashleBg.png",
      circle: "/Anime/PNG/mashle.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/mashle",
    },
    {
      title: "Wind Breaker",
      description: "Haruka fights to lead Furin High, a school of delinquents.",
      image:
        "https://cdn-media.sforum.vn/storage/app/media/vantien/huskyflyaway/Wind-Breaker-Rebel-Heroes-game-rpg-anime%20(2).jpg",
      name: "Wind Breaker",
      rating: 4.5,
      tags: ["Action", "Delinquents", "School", "Drama"],
      date: "April 5, 2024",
      background: "/Anime/Backgrounds/WindBreakerBg.png",
      circle: "/Anime/PNG/windbreaker.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/wind-breaker",
    },
    {
      title: "One Punch Man",
      description:
        "Saitama, a one-punch hero, seeks a worthy opponent in a comedic world.",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/e710107bc0c1f1fb796df14258427e7507ffe9128ca6e3d23fc30a35e7408f16.jpg",
      name: "One Punch Man",
      rating: 4.8,
      tags: ["Action", "Comedy", "Superhero", "Parody"],
      date: "October 5, 2015",
      background: "/Anime/Backgrounds/OnePunchManBg.png",
      circle: "/Anime/PNG/onepunchman.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/one-punch-man",
    },
    {
      title: "KonoSuba: God's Blessing on This Wonderful World!",
      description:
        "Kazuma, reborn in a fantasy world, adventures with quirky companions.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh5mrA2nP6KCjb4Hk2_gjZvwE7s8ED7xg6pg&s",
      name: "KonoSuba",
      rating: 4.7,
      tags: ["Comedy", "Fantasy", "Adventure", "Isekai"],
      date: "January 14, 2016",
      background: "/Anime/Backgrounds/KonoSubaBg.png",
      circle: "/Anime/PNG/konosuba.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/konosuba",
    },

    {
      title: "Tokyo Ghoul",
      description:
        "Kaneki becomes a half-ghoul, navigating a dark world of humans and ghouls.",
      image:
        "https://img.ixbt.site/live/topics/preview/00/05/09/53/720d57aa42.jpg",
      name: "Tokyo Ghoul",
      rating: 4.7,
      tags: ["Horror", "Action", "Drama", "Supernatural"],
      date: "July 4, 2014",
      background: "/Anime/Backgrounds/TokyoGhoulBg.png",
      circle: "/Anime/PNG/tokyoghoul.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/tokyo-ghoul",
    },
    {
      title: "Spy x Family",
      description:
        "Spy Twilight forms a fake family to infiltrate an elite school.",
      image:
        "https://images.thedirect.com/media/article_full/spy-famt.jpg",
      name: "Spy x Family",
      rating: 4.9,
      tags: ["Comedy", "Action", "Spy", "Family"],
      date: "April 9, 2022",
      background: "/Anime/Backgrounds/SpyXFamilyBg.png",
      circle: "/Anime/PNG/spyxfamily.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/spy-family",
    },
    {
      title:
        "This Foolish Pig Doesn't Understand the Dream of the Dreaming Girl",
      description:
        "Sakuta helps girls with odd syndromes, starting with bunny girl Mai.",
      image:
        "https://anime-fans.ru/wp-content/uploads/2022/09/Anime-Etot-glupyj-svin-ne-ponimaet-mechtu-devochki-zajki.jpg",
      name: "Rascal Does Not Dream",
      rating: 4.8,
      tags: ["Romance", "Drama", "Supernatural", "School"],
      date: "October 4, 2018",
      background: "/Anime/Backgrounds/RascalBg.png",
      circle: "/Anime/PNG/rascal.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/seishun-buta",
    },
    {
      title: "Darling in the Franxx",
      description:
        "Teens pilot mechs to fight monsters, uncovering secrets of their world.",
      image:
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/06/Darling-in-the-Franxx-Main-Title-Promo.jpg",
      name: "Darling in the Franxx",
      rating: 4.6,
      tags: ["Mecha", "Romance", "Sci-Fi", "Drama"],
      date: "January 13, 2018",
      background: "/Anime/Backgrounds/FranxxBg.png",
      circle: "/Anime/PNG/franxx.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/darling-franxx",
    },
    {
      title: "Boruto: Naruto Next Generations",
      description:
        "Boruto, Naruto's son, navigates ninja life and uncovers hidden threats.",
      image:
        "https://media.myshows.me/shows/normal/c/b7/cb7a11fccba8c872405a5f016966e886.jpg",
      name: "Boruto",
      rating: 4.5,
      tags: ["Action", "Adventure", "Shounen", "Ninja"],
      date: "April 5, 2017",
      background: "/Anime/Backgrounds/BorutoBg.png",
      circle: "/Anime/PNG/boruto.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/boruto-naruto",
    },
    {
      title: "The Angel Next Door Spoils Me Rotten",
      description:
        "Amane's neighbor, angelic Mahiru, spoils him with kindness and care.",
      image:
        "https://jotaku.net/wp-content/uploads/2023/05/angel-next-door-thumb.png",
      name: "The Angel Next Door",
      rating: 4.6,
      tags: ["Romance", "Comedy", "Slice of Life", "School"],
      date: "January 7, 2023",
      background: "/Anime/Backgrounds/AngelNextDoorBg.png",
      circle: "/Anime/PNG/angelnextdoor.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/otonari-no-tenshi",
    },
    {
      title: "The Last Summoner",
      description: "Summoner Ah Jie battles with spirits in a mystical world.",
      image:
        "https://static.next-episode.net/tv-shows-images/huge/the-last-summoner.jpg",
      name: "The Last Summoner",
      rating: 4.4,
      tags: ["Action", "Fantasy", "Adventure", "Supernatural"],
      date: "April 26, 2022",
      background: "/Anime/Backgrounds/LastSummonerBg.png",
      circle: "/Anime/PNG/lastsummoner.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/zuihou-de-zhaohuan",
    },
    {
      title: "That Time I Got Reincarnated as a Slime",
      description:
        "Satoru, reborn as a slime, builds a monster nation in a fantasy world.",
      image: "https://www.wfs.games/en-us/service/assets/ten-sura-m/img_01.jpg",
      name: "Tensei Shitara Slime",
      rating: 4.7,
      tags: ["Fantasy", "Adventure", "Isekai", "Action"],
      date: "October 2, 2018",
      background: "/Anime/Backgrounds/SlimeBg.png",
      circle: "/Anime/PNG/slime.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/tensei-shitara",
    },
  {
    "title": "JoJo's Bizarre Adventure",
    "description": "Joestar family battles supernatural foes across generations with unique powers.",
    "image": "https://i.ytimg.com/vi/xnoAbR_EXf0/maxresdefault.jpg",
    "name": "JoJo's Bizarre Adventure",
    "rating": 4.8,
    "tags": ["Action", "Adventure", "Supernatural", "Shounen"],
    "date": "October 6, 2012",
    "background": "/Anime/Backgrounds/JoJoBg.png",
    "circle": "/Anime/PNG/jojo.png",
    "actionLabel": "Watch Now",
    "actionUrl": "https://jut.su/jojo"
  },
  {
    "title": "Tokyo Revengers",
    "description": "Takemichi time-travels to save his girlfriend by changing a gang's future.",
    "image": "https://www.programme-tv.net/imgre/fit/http.3A.2F.2Fprmd.2Etmsimg.2Ecom.2Fassets.2Fp23814022_b_h2_aa.2Ejpg/630x355/quality/80/tokyo-revengers.jpg",
    "name": "Tokyo Revengers",
    "rating": 4.7,
    "tags": ["Action", "Drama", "Time Travel", "Delinquents"],
    "date": "April 11, 2021",
    "background": "/Anime/Backgrounds/TokyoRevengersBg.png",
    "circle": "/Anime/PNG/tokyorevengers.png",
    "actionLabel": "Watch Now",
    "actionUrl": "https://jut.su/tokyo-revengers"
  },
  {
    "title": "Rent-a-Girlfriend",
    "description": "Kazuya rents a girlfriend, sparking a chaotic romance with Chizuru.",
    "image": "https://www.nintendohall.it/wp-content/uploads/2024/08/Rent-A-Girlfriend-The-Horizon-and-the-Girl-in-the-Swimsuit-la-visual-novel-in-arrivo-il-28-novembre-su-Nintendo-Switch.jpg",
    "name": "Rent-a-Girlfriend",
    "rating": 4.5,
    "tags": ["Romance", "Comedy", "Slice of Life", "School"],
    "date": "July 11, 2020",
    "background": "/Anime/Backgrounds/RentAGirlfriendBg.png",
    "circle": "/Anime/PNG/rentagirlfriend.png",
    "actionLabel": "Watch Now",
    "actionUrl": "https://jut.su/kanojo-okarishimasu"
  },
  {
    "title": "Horimiya",
    "description": "Kyoko, a popular girl, falls for quiet, tattooed Izumi.",
    "image": "https://a.storyblok.com/f/178900/1504x846/5de7a3fd9c/horimiya-header.jpg/m/1200x0/filters:quality(95)format(webp)",
    "name": "Horimiya",
    "rating": 4.8,
    "tags": ["Romance", "Comedy", "Slice of Life", "School"],
    "date": "January 10, 2021",
    "background": "/Anime/Backgrounds/HorimiyaBg.png",
    "circle": "/Anime/PNG/horimiya.png",
    "actionLabel": "Watch Now",
    "actionUrl": "https://jut.su/horimiya"
  },
    {
      title: "Mom, I'm Sorry",
      description:
        "Dong Cuican sacrifices his years to save his dying mother, who regains youth.",
      image:
        "https://sun9-50.userapi.com/impg/SbPFxHk_T9QgO5yAWMT84sN9hv5v9CYwal_SqA/GAANY2xvhLo.jpg?size=604x340&quality=96&sign=ad10c32c2b27e376f79b28bd455cfacc&type=album",
      name: "Mom, I'm Sorry",
      rating: 4.6,
      tags: ["Drama", "Fantasy", "Slice of Life", "Family"],
      date: "May 23, 2024",
      background: "/Anime/Backgrounds/MomImSorryBg.png",
      circle: "/Anime/PNG/momimsorry.png",
      actionLabel: "Watch Now",
      actionUrl: "https://jut.su/mama-prosti-menya",
    },
  ];

  return (
    <div className="mt-5 min-h-screen p-6 bg-[#0D0D0D]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => {
          const queryParams = new URLSearchParams({
            name: card.name,
            description: card.description,
            rating: card.rating.toString(),
            tags: card.tags.join(","),
            date: card.date,
            background: card.background,
            circle: card.circle,
            actionLabel: card.actionLabel,
            actionUrl: card.actionUrl,
          }).toString();

          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              queryParams={queryParams}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Anime;
