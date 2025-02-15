import HomeWrapper from "@/components/HomeWrapper/HomeWrapper";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <HomeWrapper>
      <Component {...pageProps} />
    </HomeWrapper>
  );
}
