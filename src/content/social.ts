export const social = [
  {
    url: "mailto:mpham3421@gmail.com",
    name: "mail",
  },
  {
    url: "https://github.com/ducmanh9898-sudo",
    name: "github",
  },
  {
    url: "https://www.linkedin.com/in/pham-duc-manh-70483b34a/",
    name: "linkedin",
  },
] as const satisfies {
  url: string;
  name: "mail" | "github" | "instagram" | "linkedin" | "x";
}[];