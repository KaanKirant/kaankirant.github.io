import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Kaan Kirant",
  role: "Game Developer",
  introduction: "Hi, I'm Kaan, a passionate game developer & AI Enthusiast",
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
    name: "Slash",
    description: "Learned Unreal Engine 5's Open World maps, Quixel Bridge megascans for ultra-realistic environments, landscape sculpting and painting, dungeons, free-roaming creatures and humanoids with various weapons, breakable objects that spawn treasure. ",
    genres: ["Open World", "Third-Person"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/KaanKirant/kaankirant.github.io" },
    ],
    media: [
      { source: "/images/games/Slash/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/zL3rDbIOlHk", type: MediaType.YouTube },
      { source: "/images/games/Slash/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Slash/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Maze Solver",
    description: "Creating a maze using DFS algorithm and solving this puzzle with A* and BFS algorithm. Comparing the both algorithms. The size of the maze is adjustable.",
    genres: ["2D", "Maze"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/MazeSolver/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/NgtCmWIYpqE", type: MediaType.YouTube },
      { source: "/images/games/MazeSolver/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/MazeSolver/Screenshot_3.png", type: MediaType.Image },
    ],
  },
  {
    name: "Escape The House",
    description: "A first person game and the goal of the game is to escape the room by solving the puzzles.",
    genres: ["3D", "Puzzle"],
    platforms: [Platform.Android, Platform.iOS],
    engine: GameEngine.Unity,
    links: [
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
    ],
    media: [
      { source: "/images/games/TowerDefence/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/tUmSXsr-yO0", type: MediaType.YouTube },
      { source: "/images/games/TowerDefence/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/TowerDefence/Screenshot_3.png", type: MediaType.Image },
    ],
  },

  ];