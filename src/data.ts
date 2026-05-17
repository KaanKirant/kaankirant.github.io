import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Kaan Kirant",
  role: "Game Developer",
  introduction: "I’m a game developer passionate about creating engaging gameplay and exploring how AI can make games smarter and more immersive.",
  description: "Hi! My name is Kaan. Dedicated and accomplished software and game developer with a solid background in artificial intelligence. With a Master's in Artificial Intelligence & Data Science and a Bachelor's in Computer Engineering, I provide a combination of technical expertise and original problem-solving skills. Having worked successfully in team settings in the past, I have expertise in creating video games and software applications utilising C++, C# and Python.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/KaanKirant_CV_July2025.pdf`,
  links: {
    github: "https://github.com/KaanKirant",
    itchIO: "https://kaankirant.itch.io",
    linkedIn: "https://www.linkedin.com/in/kaankirant",
  }
};

export const games: Game[] = [
  {
    name: "Escape The House",
    description: "A first person game and the goal of the game is to escape the room by solving the puzzles.",
    genres: ["3D", "Puzzle"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
{ source: LinkImageSource.ItchIo, url: "https://kaankirant.itch.io/escape-the-house" },
{ source: LinkImageSource.Github, url: "https://github.com/KaanKirant/EscapeTheHouse" }
    ],
    media: [
      { source: "/images/games/EscapeTheHouse/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/2SpyKTneLa4", type: MediaType.YouTube },
      { source: "/images/games/EscapeTheHouse/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/EscapeTheHouse/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/EscapeTheHouse/Screenshot_4.png", type: MediaType.Image },
      { source: "/images/games/EscapeTheHouse/Screenshot_5.png", type: MediaType.Image },
      { source: "/images/games/EscapeTheHouse/Screenshot_6.png", type: MediaType.Image },
    ],
  },
  {
    name: "Tower Defence",
    description: "Classic tower defence game. You can upgrade your tower with random cards given to you. These cards cost energy and you gain energy by killing attackers. ",
    genres: ["2D", "Tower Defence"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
{ source: LinkImageSource.ItchIo, url: "https://kaankirant.itch.io/tower-defence" },
{ source: LinkImageSource.Github, url: "https://github.com/KaanKirant/TowerDefence" }
    ],
    media: [
      { source: "/images/games/TowerDefence/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/tUmSXsr-yO0", type: MediaType.YouTube },
      { source: "/images/games/TowerDefence/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/TowerDefence/Screenshot_3.png", type: MediaType.Image },
    ],
  },
    {
    name: "Kitchen Chaos",
    description: "Pick up some ingredients, prepare them, put them on a plate and deliver them. Work with the various counters to prepare them. Pick up a full Cheese block, cut it into slices, then cook a Meat Patty (but don't let it burn!), pick them up on a Plate, add some Bread and you have a nice burger!",
    genres: ["3D", "Kitchen", "Food"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
{ source: LinkImageSource.Github, url: "https://github.com/KaanKirant/KitchenChaos" }
    ],
    media: [
      { source: "/images/games/KitchenChaos/Screenshot_2.jpg", type: MediaType.Image },
      { source: "/images/games/KitchenChaos/Screenshot_3.jpg", type: MediaType.Image },
      { source: "/images/games/KitchenChaos/Screenshot_1.jpg", type: MediaType.Image },
	{ source: "/images/games/KitchenChaos/Screenshot_4.jpg", type: MediaType.Image }
    ],
  },

  {
    name: "IBM's Skills Build Game",
    description: "An arcade quiz game that aims to improve interactivity of the IBM's Skills Build website using gamification. This project developed with an IBM mentor and it is for my masters degree.",
    genres: ["2D", "Arcade", "Space"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
{ source: LinkImageSource.ItchIo, url: "https://kaankirant.itch.io/ibms-skillsbuild" }
    ],
    media: [
      { source: "/images/games/IBMsSkillsBuildGame/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/IBMsSkillsBuildGame/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/IBMsSkillsBuildGame/Screenshot_1.png", type: MediaType.Image }
    ],
  },
{
    name: "Slash",
    description: "A third-person action RPG created in Unreal Engine 5 with C++, featuring open-world exploration, enemy AI, combat mechanics, breakable objects, and a soul and treasure collection system.",
    genres: ["Open World", "Third-Person"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/KaanKirant/Slash" },
    ],
    media: [
      { source: "/images/games/Slash/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/zL3rDbIOlHk", type: MediaType.YouTube },
      { source: "/images/games/Slash/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Slash/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  ];