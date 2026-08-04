export type TagVariant = 'progress' | 'review' | 'planning' | 'error' | 'default-green';

export interface SkillCategory {
  title: string;
  iconName: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: { name: string; variant: TagVariant }[];
  liveUrl: string;
  image?: string;
  imagePlaceholder?: string;
  keyFeatures?: string[];
}

export interface WorkflowCard {
  id: string;
  title: string;
  description: string;
  badge: { name: string; variant: TagVariant };
  iconName: string;
  integrations: string[];
}

export interface GithubN8nProject {
  title: string;
  url: string;
  description: string;
  stars?: string;
  language?: string;
}

export interface CoreSkillBar {
  name: string;
  percentage: number;
}

export interface AboutFeature {
  title: string;
  description: string;
  iconName: string;
  codeTag: string;
}
