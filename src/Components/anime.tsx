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
      background: "/Anime/Backgrounds/NarutoBg.png",
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
        title: 'Death Note',
        description: 'Light Yagami brings justice to the world... or so he believes.',
        image: 'https://i.ytimg.com/vi/WYYLPUznvJo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGcgZyhnMA8=&rs=AOn4CLBlVevMB6t91hgecghh4Pg2xC7izg',
        name: 'Death Note',
        rating: 4.9,
        tags: ['Mystery', 'Thriller', 'Psychological', 'Justice'],
        date: 'October 4, 2006',
        background: '/Anime/Backgrounds/DeathNoteBg.png',
        circle: '/Anime/PNG/death-note.png',
        actionLabel: 'Watch Now',
        actionUrl: 'https://jut.su/death-note',
      },      
      {
        title: 'Classroom of the Elite',
        description: 'Kiyotaka Ayanokōji hides his brilliance in a school built on merit and manipulation.',
        image: 'https://avatars.mds.yandex.net/i?id=cf37b497008b643d4c9f8b146926f27e_l-10972138-images-thumbs&n=13',
        name: 'Classroom of the Elite: Season 1',
        rating: 4.6,
        tags: ['Psychological', 'School', 'Drama', 'Strategy'],
        date: 'July 12, 2017',
        background: '/Anime/Backgrounds/ClassroomEliteBg.png',
        circle: '/Anime/PNG/classroom-elite.png',
        actionLabel: 'Watch Now',
        actionUrl: 'https://jut.su/classroom-elite',
      },      
      {
        title: 'The Eminence in Shadow',
        description: 'Cid Kagenou crafts his secret organization from fantasy... or is it reality?',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/4961935/pub_639ef2378df5c5439f74986f_639ef56bcb5346204d8151b2/scale_1200',
        name: 'The Eminence in Shadow: Season 1',
        rating: 4.7,
        tags: ['Action', 'Isekai', 'Comedy', 'Secret Organization'],
        date: 'October 5, 2022',
        background: '/Anime/Backgrounds/EminenceShadowBg.png',
        circle: '/Anime/PNG/eminence-shadow.png',
        actionLabel: 'Watch Now',
        actionUrl: 'https://jut.su/shadow',
      },      
      {
        title: 'Attack on Titan',
        description: 'Eren Yeager vows to destroy the Titans after they bring ruin to his world!',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6629224dc3e3f7033d18d9fd_6629f205303420733c97dac9/scale_1200',
        name: 'Attack on Titan: Final Season',
        rating: 4.9,
        tags: ['Action', 'Dark Fantasy', 'Titans', 'Revenge'],
        date: 'December 7, 2020',
        background: '/Anime/Backgrounds/AOTBg.png',
        circle: '/Anime/PNG/aot.png',
        actionLabel: 'Watch Now',
        actionUrl: 'https://jut.su/shingeki-no-kyojin',
      },      
  ];

  return (
    <div className="min-h-screen p-6 bg-[#0D0D0D]">
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
