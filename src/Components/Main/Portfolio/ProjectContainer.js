import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import nykaaSm from "../../../Assets/img/Portfolio items/Nykaaman.PNG";
import nykaaLg from "../../../Assets/img/Portfolio items/Nykaaman.PNG";
import tictactoeSm from "../../../Assets/img/Portfolio items/TicTacToe.gif";
import tictactoeLg from "../../../Assets/img/Portfolio items/TicTacToe.gif";
import EStore from "../../../Assets/img/Portfolio items/EStore.PNG";
import lumenSm from "../../../Assets/img/Portfolio items/Lumen.PNG";
import lumenLg from "../../../Assets/img/Portfolio items/Lumen.PNG";


import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";


import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";


const ProjectContainer = () => {
    const { isLight } = useContext(ThemeContext);
    const projects = [
      {
        image: [lumenSm, lumenLg],
        alt: "Lumen5_web_clone.com",
        heading: "Lumen5.com clone",
        p1: "This is a clone of lumen5.com, where we have used HTML, CSS, and Javascript to achieve this.",
        l1: "https://github.com/Aayush771/Lumen-5-Clone",
        a1: "Github page for a project.",
        l2: "https://lumen5-clone.netlify.app/",
        a2: "lumen5.com_web_clone",
        tech: [html, css, js],
      },
      {
        image: [nykaaSm, nykaaLg],
        alt: "Nykaaman Clone",
        heading: "NykaaMan web clone",
        p1: "Here we have tried to optimize the previous project cloning of Nykaaman website by adding backend to it and some more functionality in the frontend.",
        l1: "https://github.com/vadivelan1998/NYKAAMAN-PROJECT-UNIT4",
        a1: "Github page for a Nykaaman project.",
        l2: "https://nykaaman-clone.netlify.app/",
        a2: "Nykaaman live website.",
        tech: [html, css, js, expressjs, nodejs],
      },
      {
        image: [tictactoeSm, tictactoeLg],
        alt: "Tic-Tac-Toe Game",
        heading: "Tic-Tac-Toe Game",
        p1: "Created React App using npx create-react-app Designing the UI  Game board using JSX and CSS Used React Hooks to manage the state of the application For the winning state it shows an alert with Winner's name",
        l1: "https://github.com/vadivelan1998/Tic-Tac-Toe",
        a1: "Github page for a project.",
        l2: "https://velu-tic-tac-tac.netlify.app/",
        a2: "Tic Tac Toe Game live website.",
        tech: [html, css, react, js],
      },
      {
        image: [EStore, EStore],
        alt: "E Store",
        heading: "E Store App",
        p1: "This project is about building an E-commerce web application with backend integration showing the functionalities of ans E-commerce website like filtering,sorting the products, add Too cart, wishlist etc.,",
        l1: "https://github.com/vadivelan1998/E-KART-FRONTEND",
        a1: "Github page for a project.",
        l2: "https://e-kart-store.netlify.app/",
        a2: "E Store App live website",
        tech: [html, css, js, react, expressjs, nodejs],
      }
     
    ];
    return (
        <div
            className={`${styles.projectContainer} ${!isLight && styles.dark}`}
        >
            {projects.map((data, index) => {
                return <ProjectItem data={data} index={index} key={index} />;
            })}
        </div>
    );
};

export default ProjectContainer;
