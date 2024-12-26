import "./Accordion.css";

import { LanguageProp } from "../../ts/interfaces/props";
import { Language } from "../../ts/interfaces/languageInterfaces";

import texts from "../../assets/json/texts.json";
// import greenShot from "../../assets/images/green-shot.PNG";
import drinkCookShot from "../../assets/images/drink-cook-shot.PNG";
import rocasecaShot from "../../assets/images/rocaseca-shot.PNG";
import amplipodShot from "../../assets/images/amplipod-shot.PNG";
import backroadsShot from "../../assets/images/backroads.PNG";

const Accordion = ({ language }: LanguageProp) => {
  const { projects } = texts;

  const changeShow = (e: any) => {
    e.target.nextSibling.classList.toggle("show");
  };

  return (
    <section className="proyects-container">
      {/* <div className="green">
        <h3 onClick={changeShow}>Green</h3>
        <div className="expandable">
          <div className="expandable-img">
            <a
              href="https://green-vert.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={greenShot} alt="Green site screen capture" />
            </a>
          </div>
          <p>{projects.green[language as keyof Language]}</p>
        </div>
      </div> */}
      <div className="drink-and-cook">
        <h3 onClick={changeShow}>Drink & Cook</h3>
        <div className="expandable">
          <div className="expandable-img">
            <a
              href="https://drink-cook.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={drinkCookShot} alt="Drink & Cook site screen capture" />
            </a>
          </div>
          <p>{projects.drinkCook[language as keyof Language]}</p>
        </div>
      </div>
      <div className="rocaseca">
        <h3 onClick={changeShow}>Rocaseca</h3>
        <div className="expandable">
          <div className="expandable-img">
            <a
              href="https://rocaseca.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rocasecaShot} alt="Rocaseca site screen capture" />
            </a>
          </div>
          <p>{projects.rocaseca[language as keyof Language]}</p>
        </div>
      </div>
      <div className="amplipod">
        <h3 onClick={changeShow}>Amplipod</h3>
        <div className="expandable">
          <div className="expandable-img">
            <a href="https://app.amplipod.io" target="_blank" rel="noreferrer">
              <img src={amplipodShot} alt="Amplipod site screen capture" />
            </a>
          </div>
          <p>{projects.amplipod[language as keyof Language]}</p>
        </div>
      </div>
      <div className="Backroads">
        <h3 onClick={changeShow}>Backroads</h3>
        <div className="expandable">
          <div className="expandable-img">
            <a
              href="https://backroads-front.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={backroadsShot} alt="Backroads site screen capture" />
            </a>
          </div>
          <p>{projects.backroads[language as keyof Language]}</p>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
