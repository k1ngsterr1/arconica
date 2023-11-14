import { useRef, useCallback } from "react";
import gsap from "gsap";

type useTextAnimationReturnType = {
  // Refs
  topRightTextRef: React.RefObject<HTMLSpanElement>;
  topRightAdditionalRef: React.RefObject<HTMLSpanElement>;
  bottomRightTextRef: React.RefObject<HTMLSpanElement>;
  bottomRightAdditionalRef: React.RefObject<HTMLSpanElement>;
  topLeftTextRef: React.RefObject<HTMLSpanElement>;
  topLeftAdditionalRef: React.RefObject<HTMLSpanElement>;
  bottomLeftTextRef: React.RefObject<HTMLSpanElement>;
  bottomLeftAdditionalRef: React.RefObject<HTMLSpanElement>;
  // Function
  textOnHoverRightTop: () => void;
  resetTextOnHoverRightTop: () => void;
  textOnHoverRightBottom: () => void;
  resetTextOnHoverRightBottom: () => void;
  textOnHoverLeftTop: () => void;
  resetTextOnHoverLeftTop: () => void;
  textOnHoverLeftBottom: () => void;
  resetTextOnHoverLeftBottom: () => void;
};

// On Hover Animation:

export const useTextAnimation = (): useTextAnimationReturnType => {
  const topRightTextRef = useRef<HTMLSpanElement>(null);
  const topRightAdditionalRef = useRef<HTMLSpanElement>(null);
  const bottomRightTextRef = useRef<HTMLSpanElement>(null);
  const bottomRightAdditionalRef = useRef<HTMLSpanElement>(null);
  const topLeftTextRef = useRef<HTMLSpanElement>(null);
  const topLeftAdditionalRef = useRef<HTMLSpanElement>(null);
  const bottomLeftTextRef = useRef<HTMLSpanElement>(null);
  const bottomLeftAdditionalRef = useRef<HTMLSpanElement>(null);

  const textOnHoverRightTop = useCallback(() => {
    topRightTextRef.current &&
      gsap.to(topRightTextRef.current, {
        width: "50%",
        y: -30,
        opacity: 1,
        fontSize: "clamp(10px,1.0416vw,40px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    topRightAdditionalRef.current &&
      gsap.to(topRightAdditionalRef.current, {
        y: 30,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const resetTextOnHoverRightTop = useCallback(() => {
    topRightTextRef.current &&
      gsap.to(topRightTextRef.current, {
        width: "70%",
        y: 0,
        opacity: 1,
        fontSize: "clamp(15px,1.5624vw,60px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    topRightAdditionalRef.current &&
      gsap.to(topRightAdditionalRef.current, {
        y: -100,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const textOnHoverRightBottom = useCallback(() => {
    bottomRightTextRef.current &&
      gsap.to(bottomRightTextRef.current, {
        width: "60%",
        y: -30,
        opacity: 1,
        fontSize: "clamp(10px,1.0416vw,40px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    bottomRightAdditionalRef.current &&
      gsap.to(bottomRightAdditionalRef.current, {
        y: 30,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const resetTextOnHoverRightBottom = useCallback(() => {
    bottomRightTextRef.current &&
      gsap.to(bottomRightTextRef.current, {
        width: "70%",
        y: 0,
        opacity: 1,
        fontSize: "clamp(15px,1.5624vw,60px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    bottomRightAdditionalRef.current &&
      gsap.to(bottomRightAdditionalRef.current, {
        y: -100,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const textOnHoverLeftTop = useCallback(() => {
    topLeftTextRef.current &&
      gsap.to(topLeftTextRef.current, {
        y: -30,
        opacity: 1,
        fontSize: "clamp(10px,1.0416vw,40px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    topLeftAdditionalRef.current &&
      gsap.to(topLeftAdditionalRef.current, {
        y: 30,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const resetTextOnHoverLeftTop = useCallback(() => {
    topLeftTextRef.current &&
      gsap.to(topLeftTextRef.current, {
        y: 0,
        opacity: 1,
        fontSize: "clamp(15px,1.5624vw,60px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    topLeftAdditionalRef.current &&
      gsap.to(topLeftAdditionalRef.current, {
        y: -100,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const textOnHoverLeftBottom = useCallback(() => {
    bottomLeftTextRef.current &&
      gsap.to(bottomLeftTextRef.current, {
        width: "60%",
        y: -30,
        opacity: 1,
        fontSize: "clamp(10px,1.0416vw,40px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    bottomLeftAdditionalRef.current &&
      gsap.to(bottomLeftAdditionalRef.current, {
        y: 30,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 1,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  const resetTextOnHoverLeftBottom = useCallback(() => {
    bottomLeftTextRef.current &&
      gsap.to(bottomLeftTextRef.current, {
        width: "70%",
        y: 0,
        opacity: 1,
        fontSize: "clamp(15px,1.5624vw,60px)",
        duration: 0.5,
        ease: "power1.inOut",
      });
    bottomRightAdditionalRef.current &&
      gsap.to(bottomRightAdditionalRef.current, {
        y: -100,
        fontSize: "clamp(12.5px,1.302vw,50px)",
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
  }, []);

  return {
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
  };
};
