export interface Project {
  id: string;
  title: string;
  description: string;
}

export interface Translation {
  meta: {
    title: string;
    
    //? meta description should be 120-160 characters
    description: string;
  };
  header: {
    nav: string[];
  };
  hero: {
    title: string;
    desc: string;
  };
  projects: Project[];
}
