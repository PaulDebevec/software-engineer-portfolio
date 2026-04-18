export type Project = {
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  imageAlt?: string;
};
  
  export type PortfolioLinks = {
    resumeUrl: string;
    githubUrl: string;
    linkedinUrl: string;
  };