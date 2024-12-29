interface Video {
  title: string;
  youtubeUrl: string;
  brief?: string;
  description?: string;
  tools: Tools[];
}

enum Tools {
  Illustrator = "Adobe Illustrator",
  DavinciResolveStudio = "Davinci Resolve Studio 19",
  Photoshop = "Photoshop",
}

const videos: Video[] = [
  {
    title: "Logo animation - Intro video",
    youtubeUrl: "",
    brief: "",
    description: "",
    tools: [Tools.DavinciResolveStudio, Tools.Illustrator],
  },
];

export { videos };
