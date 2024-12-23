import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Moh Rizky",
  lastName: "Sinaga",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Tech Enthusiast",
  avatar: "/images/kadiv.png",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rzkynaga",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rzkynaga/",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/rzkynaga",
  },
  //   {
  //     name: "Email",
  //     icon: "email",
  //     link: "mailto:rzkynaga1@gmail.com",
  //   },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Tech Student, Designer and Programmer</>,
  subline: (
    <>
      I'm Rizky, a exciting student at <br/>
      <InlineCode className="">Sriwijaya University</InlineCode>, where I craft intuitive
      user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        An Information Systems undergraduate with a strong background in UI/UX
        design and hands-on experience in graphic and visual design. Proficient
        in tools such as Adobe Photoshop, Figma, Spark AR, and Blender.
        Demonstrates excellence in public speaking, team leadership, and event
        management within various student organizations. Passionate about
        contributing to innovative projects with effective communication
        strategies.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Himaja Unsri",
        timeframe: "May 2023 - Present",
        role: "General Chairman",
        achievements: [
          <>
            Actively mentoring event planning as an advisor, overseeing more
            than 10 event coordinators.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/org/himaja24.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MediaSI Unsri",
        timeframe: "May 2024 - Present ",
        role: "Creative Production & Documentation Staff",
        achievements: [
          <>
            Developed innovative visual concepts aligned with emerging trends.
          </>,
          <>
            Successfully managed documentation and visual content for
            departmental activities.
          </>,
        ],
        images: [],
      },
      {
        company: "Himaja Unsri",
        timeframe: "Jun 2023 - May 2024 ",
        role: "Head of Event Division - Internal",
        achievements: [
          <>
            Boosted team appreciation by sending over 200 thank-you notes to
            program committee members
          </>,
          <>
            Consistently collected feedback from 30+ respondents to evaluate
            organizational performance.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/himaja23.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himsi Fasilkom Unsri",
        timeframe: "Jan 2023 - Des 2023",
        role: "Multimedia Visual Creative Staff - Medinfo",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
          <>
            Mastered 5+ editing tools (Photoshop, Figma, Canva, Spark AR,
            Blender).
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/himsi.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himaja Unsri",
        timeframe: "Sep 2022 - May 2023",
        role: "Internal Department Staff",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/himaja22.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PKKMB Universitas Sriwijaya 2024",
        timeframe: "Jul 2024 - Sep 2024",
        role: "Head of Event Division",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "Sriwijaya Besanjo 2024",
        timeframe: "Jan 2023 - Jan 2024",
        role: "Event Chairman",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/sb24.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sriwijaya Besanjo 2025",
        timeframe: "Jan 2024 - Present",
        role: "General Steering Committee",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "SI Fest 2023",
        timeframe: "Aug 2023 - Nov 2023",
        role: "Staff of Videography & Documentation",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "Information Systems Inauguration 2023",
        timeframe: "Sep 2023 - Oct 2024",
        role: "Vice Event Chairman",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "Himaja Festival 2023",
        timeframe: "Jan 2023 - May 2023",
        role: "Head of Sponsorship Division",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "Organizational Management Sharing Session",
        timeframe: "Feb 2023 - Mar 2023",
        role: "Head of Publication Documentation Division",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "Sriwijaya Besanjo 2023",
        timeframe: "Sep 2022 - Jan 2023",
        role: "Staff of Media & Information Division",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
      {
        company: "Himaja Unsri Anniversary 2022",
        timeframe: "Oct 2022 - Dec 2022",
        role: "Vice Event Chairman",
        achievements: [
          <>
            Applied trending graphic designs to over five monthly content tasks
            and event promotions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Sriwijaya University",
        description: (
          <>
            Cumulative GPA: 3.94/4.00 <br />
            Relevant Courses: UX Design, Web Programming, Operating Systems,
            Structured Systems Analysis & Design, Object-Oriented Paradigm,
            Mobile Programming, etc.
          </>
        ),
      },
      {
        name: "Nurul Ilmi Islamic High School",
        description: <>Science and Technology (Saintek).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "TrashCash Digital Waste Bank App (UI/UX Design)",
        description:
          ((
            <>
              Designed an intuitive interface for waste-to-balance conversions
              via e-wallets.
            </>
          ),
          (
            <>
              Enhanced user experience based on early feedback, reducing user
              complaints effectively.
            </>
          )),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/trashcash.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Sriwijaya UniLink: U-Meet App (UI/UX Design)",
        description: (
          <>
            Created interactive prototypes and wireframes with a 90%+ user
            satisfaction rate via surveys.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/umeet.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile Language Learning App Prototype, PenaKata",
        description: (
          <>
            Developed a fully monitored and controlled system repository for the
            team.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/pena.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "ToDo React",
        description: (
          <>
            Created interactive prototypes and wireframes with a 90%+ user
            satisfaction rate via surveys.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/todo.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Simple Weather App",
        description: (
          <>
            Created interactive prototypes and wireframes with a 90%+ user
            satisfaction rate via surveys.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/weather.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Sriwijaya Besanjo 2025 Official Website",
        description: (
          <>
            Created interactive prototypes and wireframes with a 90%+ user
            satisfaction rate via surveys.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/prakasa.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
