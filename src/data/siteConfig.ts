export default {
  siteTitle: 'Vikas Kumar',
  siteDescription: 'Vikas Kumar CV',
  keyWords: [
    'Vikas Kumar',
    'software-engineer',
    'frontend-developer',
    'fullstack-engineer',
  ] as string[],
  authorName: 'Vikas Kumar',
  githubUsername: 'vikaskumar2500',
  authorDescription: `Hi, I'm Vikas, a passionate software engineer with a strong foundation in mathematics, data structures, algorithms, and web development. I have worked as a frontend developer from June 2023 to June 2024, during which I built comprehensive expertise in both web and app development.
I have a keen interest in functional programming, serverless architectures, and leveraging cloud platforms to build scalable and efficient applications. Currently, I'm seeking a frontend developer role where I can apply my technical skills and innovative mindset to create impactful solutions.`,
  details: {
    name: 'Vikas Kumar',
    birthDate: '2000-05-02',
    position: 'Frontend Develover',
    location: 'Jaipur, Rajasthan',
  },
  skills: [
    {
      name: 'Programming Languages',
      data: [
        { name: 'Javascript', value: 4.5 },
        { name: 'Typescript', value: 4 },
        { name: 'HTML', value: 5 },
        { name: 'CSS', value: 5 },
        { name: 'Python', value: 3 },
        { name: 'C/C++', value: 4.5 },
      ],
    },
    {
      name: 'Tools & Technologies',
      data: [
        { name: 'React / Next', value: 4.5 },
        { name: 'React Native', value: 4 },
        { name: 'Expo', value: 3.5 },
        { name: 'SQL Databases', value: 4.5 },
        { name: 'Tailwind', value: 4 },
        { name: 'MongoDB', value: 3.5 },
        { name: 'Node', value: 4 },
        { name: 'Prisma', value: 4 },
        { name: 'Redis', value: 4 },
        { name: 'Kafka', value: 3 },
        { name: 'AWS', value: 3 },
        { name: 'Git', value: 4 },
      ],
    },
  ],
  languages: [
    { name: 'Hindi', value: 5 },
    { name: 'English', value: 4 },
  ],
  jobs: [
    {
      company: 'Above Edge Tech Solutions Private Limited',
      companyIcon: 'AETSPL.png',
      date: 'June 2023 -  June 2024',
      duration: '1 year',
      location: 'Jaipur, India',
      occupation: 'Frontend Engineer',
      description: `Developed a Fintech B2B platform that streamlines the conversion of offline data into an online system for seamless, daily updates. The platform enables business partners to independently apply for loans on behalf of their customers, automating key processes and reducing manual effort. This system also includes features for secure data handling, real-time updates, and enhanced transparency in loan applications and approvals.`,
    },
  ],
  education: [
    {
      name: 'National Institute of Technology Silchar, Assam',
      icon: 'NITS.svg',
      startYear: 2019,
      endYear: 2023,
      specialization: 'Civil Engineering',
      degreeLevel: 'Bachelor of Technology',
      location: 'Silchar, Assam',
      aggregate: 8.11,
    },
  ],
  social: {
    telergam: 'http://t.me/vikaskumar2500',
    linkedin: 'https://www.linkedin.com/in/vikas-kumar25/',
    github: 'https://github.com/vikaskumar2500',
    email: 'vikas.nits8084@gmail.com',
    leetcode: '',
  },
  siteUrl: 'https://devvikas.info/',
  background_color: '#000',
  theme_color: '#424242',
  display: 'minimal-ui',
  pdf: 'static/Vikas_Kumar.pdf',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/#about',
    },
    {
      label: 'Projects',
      url: '/#projects',
    },
    {
      label: 'Abilities',
      url: '/#abilities',
    },

    {
      label: 'Experience',
      url: '/#experience',
    },
    {
      label: 'Contact',
      url: '/#contact',
    },
  ],
} as const
