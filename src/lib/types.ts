export interface PropsProject {
  title: string;
  description: string;
  images: string;
  technologies: string[];
  projectUrl: string;
  repoUrl: string;
}

export interface Props {
  title: string;
  body: string;
  href: string;
}

export interface PropsFormData {
  name: string;
  email: string;
  message: string;
}
