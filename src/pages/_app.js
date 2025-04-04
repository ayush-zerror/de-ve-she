import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
// import SmoothScroller from "@/components/smoothScroll/SmoothScroll";
import "@/styles/globals.css";
import "@/styles/profile.css";
import "@/styles/login.css";
import "@/styles/checkout2.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <SmoothScroller /> */}
      <HomeWrapper>
        <Component {...pageProps} />
      </HomeWrapper>
    </>
  );
}
