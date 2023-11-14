import { useRef } from "react";
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
  textOnHover: () => void;
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

  const textOnHover = () => {
    // Define your GSAP animation logic here, for example:
    // gsap.to(topRightTextRef.current, { opacity: 1 });
  };

  return {
    topRightTextRef,
    topRightAdditionalRef,
    bottomRightTextRef,
    bottomRightAdditionalRef,
    topLeftTextRef,
    topLeftAdditionalRef,
    bottomLeftTextRef,
    bottomLeftAdditionalRef,
    textOnHover,
  };
};
