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
      { source: "https://www.youtube.com/embed/zL3rDbIOlHk", type: MediaType.YouTube },
      { source: "/images/games/Slash/Screenshot_1.png", type: MediaType.Image },
      { source: "/images/games/Slash/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/Slash/Screenshot_3.png", type: MediaType.Image },
    ],
  }
  ];