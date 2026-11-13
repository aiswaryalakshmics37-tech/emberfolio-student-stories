import webImg from "@/assets/project-web.jpg";
import researchImg from "@/assets/project-research.jpg";
import mobileImg from "@/assets/project-mobile.jpg";

export const profile = {
  name: "Aiswaryalakshmi CS",
  firstName: "Aiswaryalakshmi",
  role: "Student · Builder · Curious mind",
  tagline: "I turn ideas from the classroom into things people can actually use.",
  email: "hello@aiswaryalakshmi.dev",
  location: "India",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  tags: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "campus-dashboard",
    title: "Campus Dashboard",
    category: "Web App",
    year: "2026",
    summary:
      "A single place for students to track attendance, assignments and club events — built for my department's tech fest.",
    tags: ["React", "TypeScript", "UI Design"],
    image: webImg,
  },
  {
    slug: "habit-pal",
    title: "HabitPal",
    category: "Mobile App",
    year: "2025",
    summary:
      "A friendly habit tracker that nudges you with streaks and tiny goals. Designed and prototyped in a two-week sprint.",
    tags: ["Figma", "Prototyping", "UX Research"],
    image: mobileImg,
  },
  {
    slug: "data-stories",
    title: "Data Stories",
    category: "Research",
    year: "2025",
    summary:
      "A mini research project exploring how students spend screen time, presented as a visual poster and short paper.",
    tags: ["Python", "Data Viz", "Research"],
    image: researchImg,
  },
];

export const skills = [
  { group: "Build", items: ["HTML & CSS", "JavaScript", "React", "Python"] },
  { group: "Design", items: ["Figma", "Wireframing", "Prototyping", "Visual design"] },
  { group: "Soft skills", items: ["Teamwork", "Public speaking", "Problem solving", "Leadership"] },
];

export const timeline = [
  {
    period: "2023 — Present",
    title: "Undergraduate Degree",
    place: "Your College / University",
    note: "Currently studying and building projects alongside coursework.",
  },
  {
    period: "2025",
    title: "Hackathon Finalist",
    place: "College Tech Fest",
    note: "Built a working prototype in 24 hours with a team of four.",
  },
  {
    period: "2021 — 2023",
    title: "Higher Secondary",
    place: "Your School",
    note: "Graduated with distinction; led the school's science club.",
  },
];
