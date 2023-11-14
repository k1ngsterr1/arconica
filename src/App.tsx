import { Slide } from "react-awesome-reveal";
import { useTextAnimation } from "./animations/useTextAnimation";
import logo from "./assets/arconica_logo.svg";
import "./styles/global.scss";
import "animate.css";

const App = () => {
  const {
    topRightTextRef,
    topRightAdditionalRef,
    bottomRightTextRef,
    bottomRightAdditionalRef,
    topLeftTextRef,
    topLeftAdditionalRef,
    bottomLeftTextRef,
    bottomLeftAdditionalRef,
    textOnHoverRightTop,
    resetTextOnHoverRightTop,
    textOnHoverRightBottom,
    resetTextOnHoverRightBottom,
    textOnHoverLeftTop,
    resetTextOnHoverLeftTop,
    textOnHoverLeftBottom,
    resetTextOnHoverLeftBottom,
  } = useTextAnimation();

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
                <div
                  className="screen__content__plus-nav--top-left"
                  onClick={() =>
                    window.open("https://special-solutions.kz/", "_blank")
                  }
                >
                  <span className="text">AS Partners Architecs</span>
                </div>
                <div
                  className="screen__content__plus-nav--top-right"
                  onClick={() =>
                    window.open("https://special-solutions.kz/", "_blank")
                  }
                >
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
            <Slide
              direction="left"
              className="animate"
              triggerOnce={true}
              duration={1000}
            >
              <img src={logo} alt="logo" className="logotype" />
              <span className="under-text">Create Your Future Now</span>
            </Slide>
          </div>
          <Slide
            direction="right"
            className="animate"
            triggerOnce={true}
            duration={1000}
            delay={200}
          >
            <div className="screen__content-pc__logo__plus-nav">
              <div
                className="screen__content-pc__logo__plus-nav--top-left"
                onClick={() =>
                  window.open("https://special-solutions.kz/", "_blank")
                }
                onMouseEnter={textOnHoverLeftTop}
                onMouseLeave={resetTextOnHoverLeftTop}
              >
                <span className="text" ref={topLeftTextRef}>
                  AS Partners Architecs
                </span>
                <span className="text-hidden" ref={topLeftAdditionalRef}>
                  Интерьеры
                </span>
              </div>
              <div
                className="screen__content-pc__logo__plus-nav--top-right"
                onClick={() =>
                  window.open("https://special-solutions.kz/", "_blank")
                }
                onMouseEnter={textOnHoverRightTop}
                onMouseLeave={resetTextOnHoverRightTop}
              >
                <span className="text" ref={topRightTextRef}>
                  Special Solutions
                </span>
                <span className="text-hidden" ref={topRightAdditionalRef}>
                  Строительная компания
                </span>
              </div>
              <div
                className="screen__content-pc__logo__plus-nav--bottom-right"
                onMouseEnter={textOnHoverRightBottom}
                onMouseLeave={resetTextOnHoverRightBottom}
              >
                <span className="text" ref={bottomRightTextRef}>
                  HoReCa Solutions
                </span>
                <span className="text-hidden" ref={bottomRightAdditionalRef}>
                  В Разработке
                </span>
              </div>
              <div
                className="screen__content-pc__logo__plus-nav--bottom-left"
                onMouseEnter={textOnHoverLeftBottom}
                onMouseLeave={resetTextOnHoverLeftBottom}
              >
                <span className="text" ref={bottomLeftTextRef}>
                  Urban Projects
                </span>
                <span className="text-hidden" ref={bottomLeftAdditionalRef}>
                  В Разработке
                </span>
              </div>
            </div>
          </Slide>
        </div>
      </main>
    </div>
  );
};

export default App;
