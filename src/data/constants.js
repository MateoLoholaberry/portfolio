import carena_logo from "../assets/carena_logo.png";
import blazor_logo from "../assets/Blazor.png";
import cSharp_logo from "../assets/csharp-logo.png";
import Maui_logo from "../assets/dotnet_bot.svg";
import xaml_logo from "../assets/xaml_logo.webp";
import vscode_logo from "../assets/Visual_Studio_Code.png";
import finca_logo from "../assets/finca_logo.png";
import menu_logo from "../assets/menu_blog.jpg";
import incluit_logo from "../assets/incluit_logo.png";
import sistema_Finca_logo from "../assets/sistema_finca.png";
import portfolio_logo from "../assets/my_portfolio.jpg";
import travel_page_logo from "../assets/travel_page.jpg";
import login_page_logo from "../assets/login_page.jpg";
import calculator_logo from "../assets/calculator.png";

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
                image: blazor_logo,
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
                image: cSharp_logo,
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
                image: Maui_logo,
            },
            {
                name: "XAML",
                image: xaml_logo,
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
                image: vscode_logo,
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
        img: incluit_logo,
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
        img: finca_logo,
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
            "This is a blog about cooking created with Python, along with Django Rest Framework for the backend and React for the front-end. Within the blog, we have a section where all the recipes are listed, another one featuring highlighted recipes, also separated by categories such as drinks, meats, etc. Additionally, it also includes a general search function for all recipes.",
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
        img: menu_logo,
    },
    {
        id: 4,
        title: "Sistema Finca",
        date: "Jan 2023 - Dec 2023",
        description:
            "Web application designed as a final project for my career. It help the company to maintain grape traceability  and also is useful for employers to keep track of their employees. Admin Credentials: #Username: Mateo #Password: mateo123.",
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
        img: sistema_Finca_logo,
    },
    {
        id: 5,
        title: "My portfolio",
        date: "Nov 2023 - Dec 2023",
        description:
            "Portfolio created with React.js that serves as an online portfolio to showcase my work, skills, and achievements. It provides an overview of my background, displays my projects, and offers a way to contact me.",
        tags: [
            "React",
            "JSX",
            "Javascript",
            "HTML",
            "CSS",
            "Tailwind",
            "Netlify",
        ],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/portfolio",
        webapp: "https://mateo-loholaberry-portfolio.netlify.app",
        img: portfolio_logo,
    },
    {
        id: 0,
        title: "Travel page",
        date: "Jun 2022 - Jul 2022",
        description:
            "Travel website created as a practice test to enhance HTML, CSS, and JavaScript skills. This website is a landing page that have different sections, like places to explore with a carousel function, and a section to subscribe to a newsletter. It also includes a night mode",
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
        img: travel_page_logo,
    },
    {
        id: 1,
        title: "Login Page",
        date: "Jun 2022 - Jun 2022",
        description:
            "Login page created as a practical test to enhance HTML, CSS, and JavaScript skills (non-functional).",
        tags: ["HTML", "CSS", "Javascript", "Eslint"],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/Login-form",
        webapp: "https://mateoloholaberry.github.io/Login-form/",
        img: login_page_logo,
    },
    {
        id: 2,
        title: "Calculator",
        date: "Nov 2022 - Nov 2022",
        description:
            "Calculator that performs basic arithmetic operations, built with html, css and vanilla javascript",
        tags: ["HTML", "CSS", "JavaScript"],
        category: "web page",
        repo: "https://github.com/MateoLoholaberry/calculadora-js",
        webapp: " https://mateoloholaberry.github.io/calculadora-js/",
        img: calculator_logo,
    },
];

export const education = [
    {
        id: 0,
        img: carena_logo,
        school: "Instituto Superior Dr.Carlos María Carena",
        date: "Jan 2021 - Dec 2023",
        grade: "9.56 CGPA",
        description:
            "I am currently finishing a Higher Technician degree in software development at Carena institute, in Mina Clavero. I have completed 3 years and have a CGPA of 9.56. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
        degree: "Higher Technician - Software development",
    },
];
