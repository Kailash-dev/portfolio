export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', level: 'Expert', icon: 'angular' },
      { name: 'React', level: 'Advanced', icon: 'react' },
      { name: 'HTML/CSS', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' }
    ]
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js' },
      { name: 'Spring Boot' },
      { name: 'MySQL' }
    ]
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'AWS', level: 'Intermediate' },
      { name: 'Docker' },
      { name: 'Git & GitHub' },
      { name: 'Nginx' }
    ]
  }
];
