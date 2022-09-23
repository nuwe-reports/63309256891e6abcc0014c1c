import { useEffect, useRef } from "react";
import gsap from "gsap";

const useGsap = () => {
  const rickPortalRef = useRef(null);
  const mortyPortalRef = useRef(null);
  const rickRef = useRef(null);
  const mortyRef = useRef(null);
  
  useEffect(() => {
    const rickTimeLine = gsap.timeline();
    const mortyTimeLine = gsap.timeline();

    rickTimeLine
      .fromTo(
        rickPortalRef.current,
        { transform: "Scale(0)", opacity: 0 },
        { transform: "Scale(1)", opacity: 1, duration: 3, ease: "back" }
      )
      .fromTo(
        rickRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.8"
      )
      .to(rickPortalRef.current, {
        transform: "Scale(0)",
        opacity: 1,
        duration: 2,
      });

    mortyTimeLine
      .fromTo(
        mortyPortalRef.current,
        { transform: "Scale(0)", opacity: 0 },
        { transform: "Scale(1)", opacity: 1, duration: 3, ease: "back" }
      )
      .fromTo(
        mortyRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=0.8"
      )
      .to(mortyPortalRef.current, {
        transform: "Scale(0)",
        opacity: 1,
        duration: 2,
      });
  }, []);

  return [rickPortalRef, mortyPortalRef, rickRef, mortyRef];
};

export default useGsap;
