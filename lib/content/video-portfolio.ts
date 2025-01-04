interface Video {
  title: string;
  featureImage: string;
  featureVideo: string;
  youtubeUrl: string[];
  brief?: string;
  description?: string;
  tools: Tools[];
}

enum Tools {
  Illustrator = "Adobe Illustrator",
  DavinciResolveStudio = "Davinci Resolve Studio 19",
  Photoshop = "Photoshop",
  Canva = "Canva",
}

const videos: Video[] = [
  {
    title: "Logo animation - Intro video",
    featureImage: "",
    featureVideo: "/videos/project1.mov",
    youtubeUrl: ["https://youtu.be/Dvd27u-yz7I"],
    brief: "",
    description: "",
    tools: [Tools.DavinciResolveStudio, Tools.Illustrator],
  },
  {
    title: "My YouTube video - WordPress Page Builder tutorial",
    featureImage: "",

    featureVideo: "",
    youtubeUrl: ["https://youtu.be/6eZhv5pNs2w"],
    brief: "",
    description: "",
    tools: [Tools.DavinciResolveStudio, Tools.Illustrator],
  },
  {
    title: "Social media videos",
    featureImage: "",

    featureVideo: "",
    youtubeUrl: [
      "https://youtube.com/shorts/6Yp5AVpIvWE",
      "https://youtube.com/shorts/pYxRT1cmj3E?feature=share",
      "https://youtube.com/shorts/KnRLkTGFhy8?feature=share",
    ],
    brief: "",
    description: "",
    tools: [Tools.DavinciResolveStudio, Tools.Canva],
  },
];

export { videos };
