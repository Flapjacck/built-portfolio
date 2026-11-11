// ==============================================================
//  BUILD A PORTFOLIO
//  This is the only file you need to edit to make the site yours.
//
//  HOW IT WORKS
//  - Change the text inside the quotes. Keep the quotes and commas.
//  - Save the file. If the site is running (pnpm dev), the page in
//    your browser updates right away.
//  - On GitHub, click "Commit changes" and your live site updates
//    on its own within a minute or so.
//  - Anything after // is a note to you. The code ignores it.
//
//  HIDING A SECTION
//  Every list below can be emptied, like  export const TESTIMONIALS: Testimonial[] = []
//  An empty section disappears from the page and from the menu.
//
//  PRIVACY: this site is public. Do not include your phone number,
//  home address, or student number here or in your resume file.
// ==============================================================

import type {
  About,
  Certification,
  Contact,
  Job,
  Project,
  Site,
  SkillGroup,
  SocialLink,
  Testimonial,
  Theme,
  Writing,
} from './types.ts'

// --------------------------------------------------------------
// 1. THE BASICS
// This fills in the top of the page (the "hero"), the browser
// tab, and the preview card people see when you share your link.
// --------------------------------------------------------------
export const SITE: Site = {
  name: 'Spencer Kelly',
  headline: 'Computer Science student at Wilfrid Laurier University', // what you do, in a few words
  pitch:
    "I've always wanted to understand how things work. I build full-stack web apps and tinker with self-hosting on my own Proxmox and k3s home lab.", // 1 or 2 sentences
  location: 'Waterloo, Ontario',
  availability: '', // or "" to hide the badge
  photo: 'headshot.webp', // a headshot in the public/ folder, or "" to hide it
  resume: 'resume.pdf', // your resume as a PDF in public/ (powers the "Resume" button)
  email: '', // used by the "Get in touch" and "Email me" buttons

  // For search engines and link previews (LinkedIn, Slack, iMessage, ...)
  url: 'https://spencerkelly.ca', // your live site address once it's online, e.g. "https://yourname.dev"
  description:
    'Spencer Kelly, Computer Science student at Wilfrid Laurier University. Full-stack developer with experience in React, TypeScript, Node.js, and systems programming. Explore projects, skills, and experience.',
  socialImage: 'og-image.png', // a 1200 x 630 picture in public/ shown in link previews
  favicon: 'favicon.svg', // the little icon in the browser tab: an emoji, or a file in public/ like "favicon.png"
}

// --------------------------------------------------------------
// 2. YOUR LOOK
// Colours are hex codes. Pick one you like at https://coolors.co
// --------------------------------------------------------------
export const THEME: Theme = {
  accent: '#416179', // buttons, links and highlights in light mode
  accentDark: '#8DB3D1', // the same colour, a bit brighter, for dark mode
  mode: 'system', // "system" follows the visitor's device, or force "light" / "dark"
  font: 'sans', // "sans", "serif", or "mono"
}

// --------------------------------------------------------------
// 3. YOUR LINKS
// Shown in the hero and the contact section.
// icon can be: "github", "linkedin", "x", "instagram", "youtube",
// "bluesky", "mail", or "website". Only keep what you want public.
// --------------------------------------------------------------
export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Flapjacck', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/spencergk/', icon: 'linkedin' },
]

// --------------------------------------------------------------
// 4. ABOUT YOU (AND YOUR EDUCATION)
// 2 or 3 short paragraphs in your own voice: who you are, what you
// study or do, what you're aiming for, and one strength.
// "facts" are quick details shown next to it. Use [] to hide them.
// "education" shows under your paragraphs, one {...} block per school.
//   "details" is optional: GPA, awards, or relevant courses.
//   Use [] to hide it.
// --------------------------------------------------------------
export const ABOUT: About = {
  paragraphs: [
    "From tinkering with Minecraft Redstone to studying Computer Science at Wilfrid Laurier University, my path has always been driven by a desire to understand how things work. Growing up as my family's IT support taught me early on that technology is a powerful tool for helping others.",
    "Right now I'm VP of Engineering at the Laurier Computing Society, where I lead engineering on LOCAH.ai, and I co-founded CS Digital to build websites for local businesses. At home I run a Proxmox home lab on an M900 with a k3s cluster, where I test and deploy my side projects.",
    "I'm looking to translate this lifelong passion for problem-solving into a professional career where I can contribute meaningful technical solutions.",
  ],
  facts: [
    { label: 'Based in', value: 'Waterloo, Ontario' },
    { label: 'Studying', value: 'Computer Science, 4th year' },
    { label: 'Home lab', value: 'Proxmox + k3s on an M900' },
    { label: 'Currently into', value: 'Speedcubing' },
  ],
  education: [
    {
      school: 'Wilfrid Laurier University',
      degree: 'B.S. in Computer Science',
      location: 'Waterloo, Ontario',
      dates: '2023 to 2027',
      details: [
        'Coursework: Data Structures, OOP, Intro to Microprocessors, Algorithms, Operating Systems',
        'Fall 2026: Cloud Computing',
      ],
    },
  ],
}

// --------------------------------------------------------------
// 5. SKILLS
// Group them however makes sense. Each skill becomes a small tag.
// --------------------------------------------------------------
export const SKILLS: SkillGroup[] = [
  {
    group: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'Assembly', 'Java', 'SQL', 'HTML5', 'CSS3', 'Markdown', 'Bash', 'VBA', 'Go'],
  },
  {
    group: 'Frameworks & libraries',
    skills: ['React', 'Next.js', 'Astro', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind', 'PyTorch', 'TensorFlow', 'JWT', 'Bcrypt', 'Flask'],
  },
  {
    group: 'Tools & platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Linux', 'Docker', 'LXC', 'Vite', 'QEMU', 'Proxmox', 'pnpm', 'Shell scripting', 'UNIX'],
  },
  {
    group: 'DevOps & databases',
    skills: ['AWS', 'Azure', 'Kubernetes', 'Vercel', 'Render', 'Cloudflare', 'Nginx', 'CI/CD', 'MongoDB', 'PostgreSQL', 'Redis', 'SQLite'],
  },
]

// --------------------------------------------------------------
// 6. EXPERIENCE
// Newest first. Each {...} block is one entry. To add another, copy
// a whole block (including the comma after it) and paste it below.
//
// Write each point like this:  action verb + what you did + result.
// Example: "Organized a 40-person workshop, with 90% positive feedback"
// Include jobs, internships, volunteering, and leadership roles.
// "link" and "tech" are optional. Delete those lines if you don't need them.
// --------------------------------------------------------------
export const EXPERIENCE: Job[] = [
  {
    role: 'Co-Founder & Technical Lead',
    organization: 'CS Digital',
    location: 'Hamilton, Ontario',
    dates: 'Jul 2026 to Present',
    points: [
      'Co-founded CS Digital and build custom, performance-first websites for local service businesses',
      'Handle on-page and local SEO, including Google Business Profile and Local Service Ads',
    ],
  },
  {
    role: 'Vice President of Engineering',
    organization: 'Laurier Computing Society (LCS)',
    location: 'Waterloo, Ontario',
    dates: 'Sep 2025 to Present',
    points: [
      'Lead engineering on LOCAH.ai',
      'Run weekly stand-ups and code reviews with 10+ engineers',
      'Keep the main repo moving through PR triage and review standards',
    ],
    tech: ['FastAPI', 'Next.js', 'pgvector'],
  },
  {
    role: 'Mobile Parts and Inventory Coordinator',
    organization: 'Super Sucker Hydro Vac Service Inc.',
    location: 'Hamilton, Ontario',
    dates: 'Apr 2025 to Aug 2025 · May 2026 to Aug 2026',
    points: [
      'Managed $500K+ in parts inventory across 7 yard locations',
      'Ran regular audits and kept records current for 10+ supervisors and field technicians',
    ],
  },
]

// --------------------------------------------------------------
// 7. PROJECTS
// Show your best 3 to 6. For each, say the problem, what you did,
// and the outcome. "tags" are the tools or topics you used.
// - image:    a picture in public/ (a 16:9 screenshot works best). Leave it
//             out and a coloured banner with the title is shown instead.
// - live:     a link to try it. source: a link to the code. Both optional.
// - featured: true puts it first, in a bigger card. Use it for 1 or 2.
// --------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    title: 'Solvd',
    year: '2026',
    description:
      'A speedcubing timer with persistent storage, so my times stay saved without exporting and importing them. Solves are stored in the browser with IndexedDB, and a self-hosted version that syncs across devices is planned.',
    image: 'https://opengraph.githubassets.com/1/Flapjacck/Solvd',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind', 'cubing.js', 'Dexie'],
    live: 'https://solvd.spencerkelly.ca',
    source: 'https://github.com/Flapjacck/Solvd',
    featured: true,
  },
  {
    title: 'Pier',
    year: '2026',
    description:
      'A lightweight control plane for k3s: a self-hosted dashboard for deploying, monitoring, and managing containerised apps on my own Kubernetes cluster, built to get the "push an app, get a URL" experience on hardware I own.',
    image: 'https://opengraph.githubassets.com/1/Flapjacck/pier',
    tags: ['TypeScript', 'Node.js', 'Fastify', 'React', 'Vite', 'Tailwind', 'k3s'],
    source: 'https://github.com/Flapjacck/pier',
    featured: true,
  },
  {
    title: 'LOCAH.ai',
    year: '2026',
    description:
      "SU-sponsored retrieval assistant over Laurier's public information, giving cited answers to student questions. Built with the Laurier Computing Society.",
    image: 'https://opengraph.githubassets.com/1/LaurierCS/locah-ai',
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'RAG'],
    source: 'https://github.com/LaurierCS/locah-ai',
  },
  {
    title: 'Swing',
    year: '2026',
    description:
      'A client-side Fabric mod for Minecraft 26.2 that tweaks your first-person viewmodel: item scale, swing speed, positional offsets, and tilt. Nothing server-side changes.',
    image: 'https://opengraph.githubassets.com/1/Flapjacck/swing',
    tags: ['Java', 'Fabric', 'Minecraft'],
    live: 'https://modrinth.com/mod/swing',
    source: 'https://github.com/Flapjacck/swing',
  },
  {
    title: 'BirdWatch',
    year: '2025',
    description: 'A web application built with React for exploring and discovering bird courses.',
    image: 'https://opengraph.githubassets.com/1/Flapjacck/BirdWatch',
    tags: ['React', 'Python', 'Node.js', 'Reddit API'],
    live: 'https://birdwatch.spencerkelly.ca',
    source: 'https://github.com/Flapjacck/BirdWatch',
  },
  {
    title: 'MoxBox',
    year: '2025',
    description: 'A lightweight self-hosted file storage platform.',
    image: 'https://opengraph.githubassets.com/1/Flapjacck/moxbox',
    tags: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'Proxmox'],
    source: 'https://github.com/Flapjacck/moxbox',
  },
  {
    title: 'SKOS',
    year: '2025',
    description: 'A bare-bones operating system kernel built from scratch in C and Assembly for x86 architecture.',
    image: 'https://opengraph.githubassets.com/1/Flapjacck/skos',
    tags: ['C', 'Assembly', 'x86', 'NASM', 'GCC', 'QEMU'],
    source: 'https://github.com/Flapjacck/skos',
  },
]

// --------------------------------------------------------------
// 8. EXTRAS (OPTIONAL)
// Nice to have, but not required. Use [] to hide any of them.
// --------------------------------------------------------------

// Certifications and awards. "link" is optional.
export const CERTIFICATIONS: Certification[] = []

// Quotes from professors, managers, or teammates.
// Always ask permission before quoting someone.
export const TESTIMONIALS: Testimonial[] = []

// Articles, talks, research posters, podcasts, or videos. "link" is optional.
export const WRITING: Writing[] = []

// --------------------------------------------------------------
// 9. CONTACT
// The last section. The big button emails SITE.email.
// --------------------------------------------------------------
export const CONTACT: Contact = {
  heading: "Let's connect",
  message: 'The best way to reach me is on LinkedIn, and you can find everything I build on GitHub.',
}
