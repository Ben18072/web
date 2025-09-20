import { ReactNode } from "react";
import { Header } from "./components/Header";
import { Preloader } from "./components/Preloader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Preloader />
      <Header />
      {children}
    </div>
  );
}


