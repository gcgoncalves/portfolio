import { Role } from './'

export const ROLES: Role[] = [
  {
    role: "Frontend Developer",
    company: "Intercom",
    logo: "/images/companies/intercom.svg",
    logoAspect: 'square',
    startDate: "March/2023",
    endDate: "Present",
    companyDescription: "Customer Service Software company.",
    responsibilities: [
      "Development and maintenance of react components",
      "Implementation of pages with the components developed by the team",
      "Maintenance of internal Ruby on Rails visitors tracking API",
      "Data monitoring and synthetic tests on DataDog",
      "CI/CD housekeeping",
    ],
    stack: "JavaScript, Ruby on Rails, React, CSS Modules, Tailwind CSS"
  },
  {
    role: "Web Developer",
    company: "Sendoso",
    logo: "/images/companies/sendoso.webp",
    logoAspect: 'rectangle',
    startDate: "March/2022",
    endDate: "February 2023",
    companyDescription: "Corporate gifting company.",
    responsibilities: [
      "Development and maintenance of vue components",
      "Implementation of pages with the components developed by the team",
      "Development and maintenance of apollo queries connecting GraphQL and Ruby on Rails models",
      "Unit Testing and E2E Testing.",
    ],
    stack: "JavaScript, Ruby on Rails, Apollo/GraphQL, Vue.js, Tailwind CSS"
  },
  {
    role: "DevOps Engineer",
    company: "IBM",
    logo: "/images/companies/ibm.svg",
    logoAspect: 'square',
    startDate: "December/2020",
    endDate: "February/2022",
    companyDescription: "Working under IBM WH team, provisioning and maintaining IKS toolchains. ",
    responsibilities: [
      "Creation and maintenance IKS pipelines for applications CI/CD",
      "Development of scripts for automating the CI/CD process",
      "Development of Helm Charts for application deployment.",
    ],
    stack: "Kubernetes, ibmcloud, Python, Shellscript",
  },
  {
    role: "Cloud Developer",
    company: "IBM",
    logo: "/images/companies/ibm.svg",
    logoAspect: 'square',
    startDate: "December/2018",
    endDate: "December/2020",
    companyDescription: "Working under IBM WCE team, provisioning and maintaining IKS clusters. ",
    responsibilities: [
      "Development and maintenance of ansible playbooks for infrastructure management and monitoring",
      "Deploy and maintain IKS clusters",
      "Develop a web dashboard for cluster management",
      "Unit Testing.",
    ],
    stack: "Kubernetes, ibmcloud, Python, Shellscript, Ansible, Vue.js"
  },
  {
    role: "Web Developer",
    company: "IBM",
    logo: "/images/companies/ibm.svg",
    logoAspect: 'square',
    startDate: "June/2017",
    endDate: "December/2018",
    companyDescription: "Working under IBM mySA team, developing a SaaS CRM platform. ",
    responsibilities: [
      "Development and maintenance of a CRM used by IBM business partners",
      "Responsible for the full stack (server-side application logic and front-end development)",
      "Unit Testing and E2E Testing.",
    ],
    stack: "JavaScript, Angular.js, Node.js, CouchDB, PostrgreSQL"
  },
  {
    role: "Software Engineer",
    company: "Azion Technologies (CDN)",
    logo: "/images/companies/azion.svg",
    logoAspect: 'rectangle',
    startDate: "May/2016",
    endDate: "May 2017",
    companyDescription: "Cloud platform for content delivery and acceleration with global operations and more than 25 points of presence around the globe.",
    responsibilities: [
      "Development and maintenance of components on the Azion CDN configuration software",
      "Responsible for the full stack (server-side application logic and front-end development)",
      "Test Driven Development and Domain Driven Development.",
    ],
    stack: "Python, Django, JavaScript, PostrgreSQL, Cassandra"
  },
  {
    role: "Software Engineer",
    company: "Superplayer",
    logo: "/images/companies/superplayer.png",
    logoAspect: 'square',
    startDate: "September/2015",
    endDate: "April/2016",
    companyDescription: "Music streaming service with more than a million active users on the web, android and iOS.",
    responsibilities: [
      "Development and maintenance of components on the superplayer music player platform",
      "Responsible for the full stack (server-side application logic and front-end development)",
      "Data and results analysis",
      "A/B Testing.",
    ],
    stack: "C#/.NET, JavaScript, Node.js, MongoDB, PostrgreSQL, AWS"
  },
  {
    role: "Intern",
    company: "Pmweb",
    logo: "/images/companies/pmweb.svg",
    logoAspect: 'rectangle',
    startDate: "March/2014",
    endDate: "August/2015",
    companyDescription: "Multiple times award winner digital marketing agency focused on the hospitality business.",
    responsibilities: [
      "Development and maintenance of websites for hotels and resorts",
      "Responsible for the full stack (server-side application logic and front-end development)",
      "E-mail marketing development",
      "Database management.",
    ],
    stack: "C#/.NET, JavaScript, PostrgreSQL"
  },
  {
    role: "Intern",
    company: "Sthima",
    logo: "/images/companies/sthima.jpg",
    logoAspect: 'square',
    startDate: "April/2013",
    endDate: "February/2014",
    companyDescription: "B2B web based CRM software development startup targeting medium-sized enterprises.",
    responsibilities: [
      "Development and maintenance of cloud-based CRM software",
      "Responsible for the full stack (server-side application logic and front-end development)",
      "Minor CSS and JavaScript adjustments",
      "Database management.",
    ],
    stack: "Python, Django, JavaScript, PostrgreSQL"
  },
]