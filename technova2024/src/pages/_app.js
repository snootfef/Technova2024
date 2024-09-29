import "@/styles/globals.css";
import { AuthProvider } from "@propelauth/react";


export default function App({ Component, pageProps }) {
  // return <AuthProvider authUrl={process.env.NEXT_PUBLIC_PROPELAUTH_AUTH_URL}>
  //       <Component {...pageProps} />
  //   </AuthProvider>
  return <Component {...pageProps} />;
}
