import "@/styles/globals.css";
import "../styles/layout.module.css"
import "@/styles/component-styles.css"
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
