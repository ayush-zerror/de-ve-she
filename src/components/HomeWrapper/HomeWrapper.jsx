import React, { useEffect, useRef } from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import Header from "../Common/Header";
import { useRouter } from "next/router";
import gsap from "gsap";

const HomeWrapper = ({ children }) => {
  const route = useRouter();
  const homeRef = useRef(null);
  const headerRef = useRef(null);

  // Set initial position based on localStorage (fixes direct jump issue)
  useEffect(() => {
    const previousRoute = localStorage.getItem("previousRoute");
    if (!previousRoute || previousRoute !== "/") {
      gsap.set(homeRef.current, { top: "-92%" });
      gsap.set(headerRef.current, { top: "8%" });
      gsap.set(headerRef.current.querySelector("#header-logo"), { opacity: 1 });
    } else {
      gsap.set(homeRef.current, { top: "0%" });
      gsap.set(headerRef.current, { top: "calc(100% - 130px)" });
      gsap.set(headerRef.current.querySelector("#header-logo"), { opacity: 0 });
    }
  }, []); 

  useEffect(() => {
    const previousRoute = localStorage.getItem("previousRoute");

    // Save the current route for the next navigation
    localStorage.setItem("previousRoute", route.pathname);

    // If both previous and current routes are NOT "/", stay at -90% (prevents shivering)
    if (previousRoute !== "/" && route.pathname !== "/") {
      return;
    }

    // If previous route was "/" and current route is NOT "/", move to -90%
    if (previousRoute === "/" && route.pathname !== "/") {
      var tl = gsap.timeline()
      tl
      .to(homeRef.current, {
        top: "-92%",
        duration: 0.8,
        ease: "power2.out",
      })
      .to(headerRef.current, {
        top: "8%",
        duration: 0.8,
        ease: "power2.out",
        delay:-0.2
      },"a")
      .to(headerRef.current.querySelector("#header-logo"), {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      },"a")
    }


    // If previous route was NOT "/" and current route IS "/", move to 0%
    if (previousRoute !== "/" && route.pathname === "/") {
      var home = gsap.timeline();
      home
      .to(headerRef.current.querySelector("#header-logo"), {
        opacity:0,
        duration: 0.3,
        ease: "power2.out",
      },"a")
      .to(headerRef.current, {
        top: "calc(100% - 130px)",
        duration: 0.8,
        ease: "power2.out",
      },"a")
      .to(homeRef.current, {
        top: "0%",
        duration: 0.8,
        ease: "power2.out",
      })
    }
  }, [route.pathname]);

  return (
    <div className="home-wrapper">
      <HomeSlider homeRef={homeRef} />
      <Header headerRef={headerRef} />
      {children}
    </div>
  );
};

export default HomeWrapper;
