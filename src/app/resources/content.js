import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Moh Rizky",
  lastName: "Sinaga",
  nickName: "Ikjoen",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Project Officer",
  avatar: "/images/rizki_menyapa.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bahasa Indonesia", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity.
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
  description: `Portfolio website showcasing my experience in project coordination and execution`,
  headline: <>Project Officer</>,
  subline: (
    <div style={{ textAlign: "justify", marginRight: "4px" }}>
      <>
        Mohammad Rizky Sinaga, a fresh-graduate in Information Systems from{" "}
        <InlineCode style={{ marginLeft: "-0.5px" }}>
          Sriwijaya University
        </InlineCode>
        . I have experience leading and coordinating academic and organizational
        projects, managing teams, and supporting project execution using IT
        knowledge as a decision-making tool.
      </>
    </div>
  ),
};

const about = {
  label: "About",
  title: "About Ikjoen",
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
    link: "https://drive.google.com/file/d/1OmZRgmDCZQS-R8zsnUOPnCJgLF6SMDe0/view?usp=sharing",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div style={{ textAlign: "justify", margin: "4px" }}>
        <>
          An Information Systems fresh graduate with experience in coordinating
          academic and organizational projects. Accustomed to working in
          cross-functional environments, managing teams, and ensuring project
          execution runs according to plan.
          <br />
          <br />
          Possesses strong communication skills, leadership experience, and a
          structured approach to problem-solving. Utilizes IT knowledge as a
          supporting tool for process analysis, documentation, and informed
          decision-making within projects.
        </>
      </div>
    ),
  },

  work: {
    display: true, // set to false to hide this section
    title: "Experience (events & org.)",
    experiences: [
      {
        company: "BK MWA Unsur Mahasiswa Unsri",
        timeframe: "Jul 2025 - Jan 2026",
        role: "Head of Public Communications",
        achievements: [
          <>
            Facilitated effective communication between MWA UM and 30+ student
            organizations.
          </>,
          <>
            Led planning and execution of 10+ formal and informal discussion
            forums.
          </>,
          <>
            Collected over 3,000 student feedback submissions across the
            university.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/mwa-1.jpeg",
            alt: "Himaja Event Coordination",
            width: 16,
            height: 9,
          },
        ],
        images: [
          {
            src: "/images/projects/org/mwa-1.jpeg",
            alt: "Himaja Event Coordination",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himaja Unsri",
        timeframe: "May 2024 - Jun 2025",
        role: "General Chairman",
        achievements: [
          <>
            Guided organizational strategy and mentored organization planning,
            overseeing more than 30 event coordinators to ensure program
            success.
          </>,
          <>
            Fostered collaboration among departments, resulting in improved
            coordination and member engagement.
          </>,
          <>
            Conducted external outreach to other student associations,
            strengthening inter-organizational relations and ensuring Himaja's
            presence in broader networks.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/himaja24.jpg",
            alt: "Himaja Event Coordination",
            width: 16,
            height: 9,
          },
        ],
      },

      {
        company: "MediaSI Unsri",
        timeframe: "May 2024 - May 2025",
        role: "Creative Production & Documentation Staff",
        achievements: [
          <>
            Ensured timely and accurate documentation of departmental
            activities, enhancing event coverage and promotion.
          </>,
        ],
        images: [],
      },
      {
        company: "Himaja Unsri",
        timeframe: "Jun 2023 - May 2024",
        role: "Head of Event Division - Internal",
        achievements: [
          <>
            Enhanced member appreciation by sending over 200 personalized
            thank-you notes to committee members.
          </>,
          <>
            Collected and analyzed feedback from over 10 respondents per-agenda
            to improve the quality of future events.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/himaja23.jpg",
            alt: "Himaja Internal Event Division",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himsi Fasilkom Unsri",
        timeframe: "Jan 2023 - Dec 2023",
        role: "Multimedia Visual Creative Staff - Medinfo",
        achievements: [
          <>
            Created innovative graphic designs for monthly content and major
            event promotions, boosting engagement.
          </>,
          <>
            Mastered over 5 design tools, including Photoshop, Figma, Canva, and
            Blender, to deliver professional visuals.
          </>,
        ],
        images: [
          {
            src: "/images/projects/org/himsi.jpg",
            alt: "Himsi Creative Staff",
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
            Successfully coordinated large-scale student orientation events,
            engaging over 9000 new students.
          </>,
          <>Introduced innovative team-building activities.</>,
        ],
        images: [
          {
            src: "/images/projects/ev/bhawasena-5.jpg",
            alt: "PKKMB Event Management",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Sriwijaya Besanjo 2024",
        timeframe: "Jan 2023 - Jan 2024",
        role: "Event Chairman",
        achievements: [
          <>
            Organized a cultural and leadership-themed event attended by 500+
            participants, emphasizing the values of unity and creativity.
          </>,
          <>
            Secured sponsorship and collaborations with local organizations,
            successfully supporting event activities and enhancing visibility.
          </>,
          <>
            Achieved a significant 50% increase in profit compared to the
            previous year, reflecting improved financial management and
            sponsorship acquisition.
          </>,
          <>
            Improved participant satisfaction, as reflected in post-event
            surveys indicating a notable rise in positive feedback.
          </>,
        ],
        images: [
          {
            src: "/images/projects/ev/sb24.jpg",
            alt: "Sriwijaya Besanjo Event",
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
            Supervised event planning and implementation to ensure alignment
            with organizational goals and values.
          </>,
          <>
            Provided strategic advice and guidance to the organizing committee,
            enabling effective decision-making and program execution.
          </>,
          <>
            Monitored progress and offered solutions to address potential
            challenges, maintaining overall event quality and standards.
          </>,
        ],
        images: [
          {
            src: "/images/projects/ev/sb25.jpg",
            alt: "Sriwijaya Besanjo Event",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "SI Fest 2023",
        timeframe: "Aug 2023 - Nov 2023",
        role: "Staff of Videography & Documentation",
        achievements: [
          <>
            Delivered high-quality videography and photo documentation for event
            highlights and promotions.
          </>,
          <>
            Optimized post-production workflows, reducing editing time by 30%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/ev/sifest.jpg",
            alt: "Sriwijaya Besanjo Event",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Information Systems Inauguration 2023",
        timeframe: "Sep 2023 - Oct 2024",
        role: "Vice Event Chairman",
        achievements: [
          <>
            Spearheaded creative event concepts and execution, enhancing
            participant engagement.
          </>,
          <>Managed a team of 20 to ensure smooth operations and logistics.</>,
        ],
        images: [
          {
            src: "/images/projects/ev/optics.jpg",
            alt: "Sriwijaya Besanjo Event",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Himaja Festival 2023",
        timeframe: "Jan 2023 - May 2023",
        role: "Head of Sponsorship Division",
        achievements: [
          <>
            Secured few potential sponsorships, contributing significantly to
            event funding.
          </>,
          <>
            Maintained strong relationships with sponsors, resulting in
            recurring support.
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
  title: "My journal",
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
      src: "/images/gallery/gal-5.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/gal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal-6.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal-7.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/gal-8.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
