import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWave,
} from "../assets";

export const jobTypes = ["Full-Time", "Part-Time", "Contract", "Intern"];

export const experience = [
  { title: "Under 1 Year", value: "0-1" },
  { title: "1 - 2 Year", value: "1-2" },
  { title: "2 - 6 Year", value: "2-6" },
  { title: "Over 6 Years", value: "6-20" },
];

export const popularSearch = [
  "Software Engineer",
  "Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Remote",
  "Full-Time",
  "Sales",
  "Office Assistant",
];

export const jobs = [
  {
    _id: {
      $oid: "64fdc94390167a4caf329446",
    },
    company: {
      $oid: "64fdc8ed90167a4caf329443",
    },
    jobTitle: "Graphics Engineer",
    jobType: "Full-Time",
    location: "Berlin",
    salary: 80000,
    vacancies: 3,
    experience: 4,
    detail: [
      {
        desc: "As a Graphics Engineer at Rakuten, you will be at the forefront of our mission to deliver stunning and immersive visual experiences across a range of platforms. You will collaborate closely with our talented team of developers and artists to drive the evolution of our graphics technology.",
        requirements:
          "Develop and optimize rendering pipelines to achieve high-quality graphics performance.\nImplement advanced rendering techniques, shaders, and visual effects.\nCollaborate with artists to integrate assets and ensure they meet technical requirements.\nDebug and resolve graphics-related issues, ensuring smooth and visually stunning experiences.\nStay up-to-date with industry trends and emerging technologies to drive innovation in our graphics solutions.\nWork closely with cross-functional teams to deliver cutting-edge graphics features.",
        _id: {
          $oid: "64fdc94390167a4caf329447",
        },
      },
    ],
    application: [],
    createdAt: {
      $date: "2023-09-10T13:48:51.040Z",
    },
    updatedAt: {
      $date: "2023-09-10T13:48:51.040Z",
    },
  },
  {
    _id: {
      $oid: "64fdc9fa90167a4caf32946b",
    },
    company: {
      $oid: "64fdc8ed90167a4caf329443",
    },
    jobTitle: "Data Scientist",
    jobType: "Contract",
    location: "New York",
    salary: 100000,
    vacancies: 1,
    experience: 4,
    detail: [
      {
        desc: "As a Data Scientist at Rakuten, you will play a pivotal role in leveraging data to inform strategic decisions and drive business growth. You will collaborate closely with our interdisciplinary team to extract valuable insights and build predictive models.",
        requirements:
          "Collect, clean, and preprocess large datasets from various sources.\nDevelop and implement machine learning algorithms and statistical models.\nConduct exploratory data analysis to identify trends and opportunities.\nCreate data visualizations and dashboards to communicate findings effectively.\nCollaborate with cross-functional teams to provide data-driven insights.\nStay up-to-date with the latest advancements in data science and analytics.\nDrive data-driven decision-making processes across the organization.",
        _id: {
          $oid: "64fdc9fa90167a4caf32946c",
        },
      },
    ],
    application: [
      {
        $oid: "64fdca4390167a4caf32947b",
      },
    ],
    createdAt: {
      $date: "2023-09-10T13:51:54.574Z",
    },
    updatedAt: {
      $date: "2023-09-10T17:11:08.551Z",
    },
  },
  {
    _id: {
      $oid: "64fdcaaa90167a4caf329486",
    },
    company: {
      $oid: "64fdca4390167a4caf32947b",
    },
    jobTitle: "Senior Software Engineer",
    jobType: "Full-Time",
    location: "Redmond",
    salary: 120000,
    vacancies: 1,
    experience: 7,
    detail: [
      {
        desc: "As a Senior Software Engineer at Oracle, you will play a key role in architecting and developing complex software systems. You will work closely with cross-functional teams to design, implement, and deliver high-quality software solutions.",
        requirements:
          "Lead the design and development of software components and systems.\nMentor and collaborate with junior engineers, providing technical guidance.\nAnalyze requirements, propose technical solutions, and estimate project timelines.\nWrite clean, efficient, and maintainable code in accordance with best practices.\nDebug and resolve complex technical issues and challenges.\nStay up-to-date with emerging technologies and industry trends.\nContribute to code reviews and ensure code quality and standards are met.\nParticipate in the full software development lifecycle, from design to deployment.",
        _id: {
          $oid: "64fdcaaa90167a4caf329487",
        },
      },
    ],
    application: [
      {
        $oid: "64fda67db94ea9e6752e3da2",
      },
    ],
    createdAt: {
      $date: "2023-09-10T13:54:50.523Z",
    },
    updatedAt: {
      $date: "2023-09-10T17:12:56.807Z",
    },
  },
  {
    _id: {
      $oid: "64fdfa5e5a0b32608c50194d",
    },
    company: {
      $oid: "64fdfa375a0b32608c501942",
    },
    jobTitle: "Machine Learning Engineer",
    jobType: "Full-Time",
    location: "Bay Area, SF",
    salary: 120000,
    vacancies: 2,
    experience: 3,
    detail: [
      {
        desc: "good",
        requirements: "good",
        _id: {
          $oid: "64fdfa5e5a0b32608c50194e",
        },
      },
    ],
    application: [
      {
        $oid: "64fda67db94ea9e6752e3da2",
      },
      {
        $oid: "65003fdaa98762e84db5b8cf",
      },
    ],
    createdAt: {
      $date: "2023-09-10T17:18:22.608Z",
    },
    updatedAt: {
      $date: "2023-09-12T10:40:23.397Z",
    },
  },
  {
    _id: {
      $oid: "64fef7b5a884d4453a449457",
    },
    company: {
      $oid: "64fd7411b77fe3ed8efebb48",
    },
    jobTitle: "Senior Data Analyst",
    jobType: "Full-Time",
    location: "Bengaluru",
    salary: 130000,
    vacancies: 1,
    experience: 4,
    detail: [
      {
        desc: "As a Senior Data Analyst at [Your Company Name], you will play a pivotal role in leveraging data to uncover insights and provide valuable recommendations. You will work closely with cross-functional teams to analyze data, design reports, and drive data-driven decision-making processes.",
        requirements:
          "Lead data analysis efforts to uncover trends, patterns, and insights.\nMentor and collaborate with junior data analysts, providing technical guidance.\nCollaborate with stakeholders to gather data requirements and define project objectives.\nPerform data cleansing, transformation, and integration to prepare data for analysis.\nDesign and develop data visualizations, reports, and dashboards.\nConduct statistical analysis and predictive modeling to support business objectives.\nStay up-to-date with emerging data analysis techniques and industry trends.\nCollaborate with teams to ensure data quality and accuracy.\nParticipate in the full data analytics lifecycle, from data collection to insights delivery.",
        _id: {
          $oid: "64fef7b5a884d4453a449458",
        },
      },
    ],
    application: [],
    createdAt: {
      $date: "2023-09-11T11:19:17.140Z",
    },
    updatedAt: {
      $date: "2023-09-11T11:19:17.140Z",
    },
  },
  {
    _id: {
      $oid: "64fef832a884d4453a449472",
    },
    company: {
      $oid: "64fd7411b77fe3ed8efebb48",
    },
    jobTitle: "Security Engineer",
    jobType: "Full-Time",
    location: "Dublin",
    salary: 800000,
    vacancies: 2,
    experience: 2,
    detail: [
      {
        desc: "At Google, we prioritize security as a core value in everything we do. Our dedicated team of security professionals is committed to safeguarding our systems and data against emerging threats and vulnerabilities. If you are an experienced and passionate security engineer with a desire to protect and innovate, we invite you to join us on our mission to secure the digital world.",
        requirements:
          "As a Senior Security Engineer at Google, you will be a key contributor to our security initiatives, responsible for designing, implementing, and maintaining robust security measures. You will collaborate closely with cross-functional teams to ensure the security of our systems, applications, and infrastructure.",
        _id: {
          $oid: "64fef832a884d4453a449473",
        },
      },
    ],
    application: [],
    createdAt: {
      $date: "2023-09-11T11:21:22.593Z",
    },
    updatedAt: {
      $date: "2023-09-11T11:21:22.593Z",
    },
  },
];
export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Microsoft Corporation",
    location: "Califonia",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "India",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Germany",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  {
    _id: 9,
    name: "CodeWave Solutions",
    location: "Ghana",
    email: "support@microsoft.com",
    contact: "support@microsoft",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWave,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Califonia",
    email: "support@google.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    firstName: "Kishor",
    lastName: "Krishna",
    email: "kishorkrishna3k@gmail.com",
    contact: "support@google",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    profileUrl: CodeWave,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsfjgdjh",
  },
];
