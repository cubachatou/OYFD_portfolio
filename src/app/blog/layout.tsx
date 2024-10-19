import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glowy Spotlight Effect",
};

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <section>
      {children}
    </section>
  );
}