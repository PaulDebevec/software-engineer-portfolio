export type Project = {
  title: string;
  summary: string;
  problem: string;
  contribution: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  images?: {
    src: string;
    alt: string;
  }[];
};
  
  export type PortfolioLinks = {
    resumeUrl: string;
    githubUrl: string;
    linkedinUrl: string;
  };