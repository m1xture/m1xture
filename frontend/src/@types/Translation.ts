export interface Project {
  id: string;
  title: string;
  description: string;
}

export interface Translation {
  header: {
    nav: string[];
  };
  hero: {
    title: string;
    desc: string;
  };
  projects: Project[];
}
