import { ReactNode } from "react";
import SiteLayout from "./SiteLayout";

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}


