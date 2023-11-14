import { Slide } from "react-awesome-reveal";
import logo from "./assets/arconica_logo.svg";
import "./styles/global.scss";
import "animate.css";

const App = () => {
  return (
    <div className="screen">
      <main className="screen__content">
        <Slide cascade direction="up" duration={1000}>
          <div className="screen__content__logo">
            <Slide
              direction="down"
              triggerOnce={true}
              duration={1000}
              delay={100}
            >
              <img src={logo} alt="logo" className="logotype" />
            </Slide>
            <Slide
              direction="up"
              triggerOnce={true}
              duration={1000}
              className="animation"
              delay={200}
            >
              <span className="under-text">Create Your Future Now</span>
            </Slide>
            <Slide
              direction="up"
              triggerOnce={true}
              duration={1000}
              className="animation"
              delay={200}
            >
              <div className="screen__content__plus-nav">
                <div className="screen__content__plus-nav--top-left">
                  <span className="text">AS Partners Architecs</span>
                </div>
                <div className="screen__content__plus-nav--top-right">
                  <span className="text">Special Solutions</span>
                </div>
                <div className="screen__content__plus-nav--bottom-right">
                  <span className="text">HoReCa Solutions</span>
                </div>
                <div className="screen__content__plus-nav--bottom-left">
                  <span className="text">Urban Projects</span>
                </div>
              </div>
            </Slide>
          </div>
        </Slide>
      </main>
      <main className="screen__content-pc">
        <div className="screen__content-pc__logo">
          <div className="screen__content-pc__logo__container">
            <img src={logo} alt="logo" className="logotype" />
            <span className="under-text">Create Your Future Now</span>
          </div>
          <div className="screen__content-pc__logo__plus-nav">
            <div className="screen__content-pc__logo__plus-nav--top-left">
              <span className="text">AS Partners Architecs</span>
            </div>
            <div className="screen__content-pc__logo__plus-nav--top-right">
              <span className="text">Special Solutions</span>
            </div>
            <div className="screen__content-pc__logo__plus-nav--bottom-right">
              <span className="text">HoReCa Solutions</span>
            </div>
            <div className="screen__content-pc__logo__plus-nav--bottom-left">
              <span className="text">Urban Projects</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
