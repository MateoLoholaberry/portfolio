export const titleLinks = [
    {
        title: "About",
        url: "#about",
    },
    {
        title: "Skills",
        url: "#skills",
    },
    {
        title: "Experience",
        url: "#experience",
    },
    {
        title: "Projects",
        url: "#projects",
    },
    {
        title: "Education",
        url: "#education",
    },
    {
        title: "Contact",
        url: "#contact",
    },
];

export const Bio = {
    name: "Mateo Loholaberry",
    roles: [
        "Full stack developer",
        "Mobile developer",
        "UX/UI designer",
        "Programmer",
    ],
    description:
        "Highly motivated and passionate developer. I have strong skills in programming, problem-solving, and effective collaboration. I am continuously acquiring new skills to contribute in the best possible way to future projects.",
    github: "https://github.com/MateoLoholaberry",
    resume: "https://drive.google.com/file/d/1YA2ZAUj2nJYqagt8bY78epAVNz1VCMXZ/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/mateo-loholaberry/?locale=en_US",
    twitter: "",
    insta: "",
    facebook: "",
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React Js",
                image: "https://img.icons8.com/color/48/react-native.png",
            },
            {
                name: "Redux",
                image: "https://img.icons8.com/color/48/redux.png",
            },
            {
                name: "Next Js",
                image: "https://img.icons8.com/fluency/48/nextjs.png",
            },
            {
                name: "HTML",
                image: "https://img.icons8.com/color/48/html-5--v1.png",
            },
            {
                name: "CSS",
                image: "https://img.icons8.com/color/48/css3.png",
            },
            {
                name: "JavaScript",
                image: "https://img.icons8.com/color/48/javascript--v1.png",
            },
            {
                name: "Bootstrap",
                image: "https://img.icons8.com/color-glass/48/bootstrap.png",
            },
            {
                name: "Tailwind",
                image: "https://img.icons8.com/fluency/48/tailwind_css.png",
            },
            {
                name: "Blazor",
                image: "src/assets/Blazor.png",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Django",
                image: "https://img.icons8.com/material-outlined/48/django.png",
            },
            {
                name: "Python",
                image: "https://img.icons8.com/fluency/48/python.png",
            },
            {
                name: "MySQL",
                image: "https://img.icons8.com/fluency/48/mysql-logo.png",
            },
            {
                name: "PostgreSQL",
                image: "https://img.icons8.com/color/48/postgreesql.png",
            },
            {
                name: ".NET",
                image: "https://img.icons8.com/color/48/net-framework.png",
            },
            {
                name: "C#",
                image: "src/assets/csharp-logo.png",
            },
            {
                name: "SQL Server",
                image: "https://img.icons8.com/color/48/microsoft-sql-server.png",
            },
        ],
    },
    {
        title: "Mobile",
        skills: [
            {
                name: ".NET MAUI",
                image: "src/assets/dotnet_bot.svg",
            },
            {
                name: "XAML",
                image: "src/assets/xaml_logo.webp",
            },
        ],
    },
    {
        title: "Others",
        skills: [
            {
                name: "VS 2022",
                image: "https://img.icons8.com/fluency/48/visual-studio.png",
            },
            {
                name: "Git",
                image: "https://img.icons8.com/color/48/git.png",
            },
            {
                name: "VS Code",
                image: "src/assets/visual_studio_code.png",
            },
            {
                name: "Figma",
                image: "https://img.icons8.com/color/48/figma--v1.png",
            },
            {
                name: "Scrum",
                image: "https://img.icons8.com/color/48/sprint-iteration.png",
            },
            {
                name: "GitHub",
                image: "https://img.icons8.com/material-outlined/24/github.png",
            },
            {
                name: "Postman",
                image: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
            },
            {
                name: "WordPress",
                image: "https://img.icons8.com/color/48/wordpress.png",
            },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: "src/assets/incluit_logo.png",
        role: "Mobile Programmer internship",
        company: "IncluIT powered by Avenga",
        date: "Aug 2022 - jul 2023",
        description: `I worked daily using .NET and .NET MAUI technology.
My responsibilities included developing new features for mobile applications and troubleshooting bugs that came up in those apps.`,
        skills: [
            ".NET",
            "C#",
            ".NET Maui",
            "XAML",
            "JSON",
            "Android",
            "Git",
            "Scrum",
            "GitHub",
            "SQLite",
        ],
    },
    {
        id: 1,
        img: "src/assets/finca_logo.png",
        role: "Fullstack Django (Tesis)",
        company: "Sanchez Amezcua S.A",
        date: "Mar 2023 - Dec 2023",
        description: `I worked daily using Python and Django as principal technologies to build a complete project that helps the company to maintain grape traceability. My responsibilities were develop the entire system.`,
        skills: [
            "Python",
            "Django",
            "JSON",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "GitHub",
            "SQLite",
            "PostgreSQL",
        ],
    },
];

export const projects = [
    {
        id: 3,
        title: "Menu Blog",
        date: "oct 2023 - Nov 2023",
        description:
            "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee",
        tags: [
            "Python",
            "Django",
            "Django-Rest-Framework",
            "React Js",
            "JSX",
            "Material UI",
            "Vite",
        ],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/proyecto-menu",
        webapp: "",
        img: "src/assets/menu_blog.png",
    },
    {
        id: 4,
        title: "Sistema Finca",
        date: "Jan 2023 - Dec 2023",
        description:
            "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee",
        tags: [
            "Python",
            "Django",
            "Javascript",
            "JSON",
            "HTML",
            "CSS",
            "Bootstrap",
        ],
        category: "web page",
        repo: "",
        webapp: "https://mateolohola.pythonanywhere.com/",
        img: "src/assets/sistema_finca.png",
    },
    {
        id: 5,
        title: "My portfolio",
        date: "Nov 2023 - Dec 2023",
        description:
            "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee",
        tags: ["React", "JSX", "Javascript", "HTML", "CSS", "Tailwind"],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/portfolio",
        webapp: "",
        img: "src/assets/my_portfolio.png",
    },
    {
        id: 0,
        title: "Travel page",
        date: "Jun 2022 - Jul 2022",
        description:
            "Travel website created as a practice test to enhance HTML, CSS, and JavaScript skills.",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "Eslint",
            "Swiperjs",
            "ScrollRevealjs",
        ],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/Travel-page",
        webapp: "https://mateoloholaberry.github.io/Travel-page/",
        img: "src/assets/travel_page.png",
    },
    {
        id: 1,
        title: "Login Page",
        date: "Jun 2022 - Jun 2022",
        description:
            "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee",
        tags: ["HTML", "CSS", "Javascript", "Eslint"],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/Login-form",
        webapp: "https://mateoloholaberry.github.io/Login-form/",
        img: "src/assets/login_page.png",
    },
    {
        id: 2,
        title: "Calculator",
        date: "Nov 2022 - Nov 2022",
        description:
            "Trackify is a web application designed to streamline task management and enhance productivity in the workplace. It provides a user-friendly interface for employers to keep track of their employees' daily work activities and empowers employees to log their tasks efficiently. Admin Credentials: # Email: testadmin@gmail.com #Password- 123@testadmin, Employee Credentials: #Email: testemployee@gmail.com #Password- 123@Testemployee",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/calculadora-js",
        webapp: " https://mateoloholaberry.github.io/calculadora-js/",
        img: "src/assets/calculator.png",
    },
];

export const education = [
    {
        id: 0,
        img: "src/assets/carena_logo.png",
        school: "Instituto Superior Dr.Carlos María Carena",
        date: "Jan 2021 - Dec 2023",
        grade: "9.56 CGPA",
        description:
            "I am currently finishing a Higher Technician degree in software development at Carena institute, in Mina Clavero. I have completed 3 years and have a CGPA of 9.56. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
        degree: "Higher Technician - Software development",
    },
];
