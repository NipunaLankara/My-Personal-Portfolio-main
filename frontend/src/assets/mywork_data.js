import project1_img from '../assets/project_1.png'
import project2_img from '../assets/project_2.png'
import project3_img from '../assets/project_3.png'
import project4_img from '../assets/project_4.png'
import project5_img from '../assets/project_5.png'
import project6_img from '../assets/project_6.jpg'

const mywork_data = [

    {
        w_no: 1,
        w_name: "Moodlyze",
        w_Disciption: "Moodlyze is an AI-powered task management and emotion analysis platform built using microservices architecture with secure authentication and intelligent emotion detection features.",

        w_Technologies: [
            "SpringBoot",
            "React.js",
            "MYSQL",
            "Python",
            "Machine Learning",
            "Microservices Architecture",
            "CSS",
            "Context API",
            "JWT",
            "Spring Security"
        ],

        w_img: project1_img,

        w_links: [
            {
                label: "Frontend",
                url: "https://github.com/NipunaLankara/moodlyze-frontend_1.0.git"
            },
            {
                label: "Backend",
                url: "https://github.com/NipunaLankara/moodlyze_backend_1.0.git"
            },
            {
                label: "Config Server",
                url: "https://github.com/NipunaLankara/moodlyze_1.0_config_server.git"
            }
        ]
    },

    {
        w_no: 2,
        w_name: "Car Rental System",
        w_Disciption: "Secure backend system for a car rental service with booking management, vehicle handling, and JWT-based authentication using Spring Boot.",

        w_Technologies: [
            "Java",
            "SpringBoot",
            "MYSQL",
            "JWT",
            "Spring Security",
            "REST API",
            "Maven"
        ],

        w_img: project2_img,

        w_links: [
            {
                label: "GitHub",
                url: "https://github.com/NipunaLankara/car_rental_backend.git"
            }
        ]
    },

    {
        w_no: 3,
        w_name: "PahanaEdu POS System",
        w_Disciption: "Full-stack bookshop Point of Sale web application with customer management, inventory handling, billing, and transaction processing features.",

        w_Technologies: [
            "Java",
            "JSP",
            "Servlet",
            "MYSQL",
            "Maven",
            "HTML",
            "CSS",
            "Layered Architecture"
        ],

        w_img: project3_img,

        w_links: [
            {
                label: "GitHub",
                url: "https://github.com/NipunaLankara/PahanaEdu.git"
            }
        ]
    },

    {
        w_no: 4,
        w_name: "City Cab System",
        w_Disciption: "Cab booking web application developed with JSP and Servlet technologies featuring booking management and frontend-backend integration.",

        w_Technologies: [
            "Java",
            "JSP",
            "Servlet",
            "MYSQL",
            "HTML",
            "CSS",
            "Maven"
        ],

        w_img: project4_img,

        w_links: [
            {
                label: "GitHub",
                url: "https://github.com/NipunaLankara/city_cab_jsp_servlet.git"
            }
        ]
    },

    {
        w_no: 5,
        w_name: "Simple POS System",
        w_Disciption: "Backend-only Point of Sale system focused on inventory management, sales transaction handling, and REST API development.",

        w_Technologies: [
            "Java",
            "Spring Framework",
            "MYSQL",
            "REST API",
            "Maven"
        ],

        w_img: project5_img,

        w_links: [
            {
                label: "GitHub",
                url: "https://github.com/NipunaLankara/simple_pos_system.git"
            }
        ]
    },

    {
        w_no: 6,
        w_name: "Ceylon Spice Restaurant Website",
        w_Disciption: "Responsive restaurant website with online table reservation functionality and customer interaction features for modern restaurant management.",

        w_Technologies: [
            "PHP",
            "HTML",
            "CSS",
            "JavaScript",
            "MYSQL"
        ],

        w_img: project6_img,

        w_links: [
            {
                label: "GitHub",
                url: "https://github.com/NipunaLankara/ceylon_spice_restaurant_web_stie.git"
            }
        ]
    }

]

export default mywork_data;