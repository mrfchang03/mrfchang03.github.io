// app/page.jsx (server wrapper)
export const metadata = {
  title: "Matthew Chang",
  description: "Aspiring Software Engineer",
};

import HomeClient from "./HomeClient";

export default function Page() {
  return <HomeClient />;
}
