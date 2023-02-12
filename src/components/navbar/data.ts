interface INavLink {
  to: string;
  title: string;
}

export const navLink: INavLink[] = [
  { to: "/courses", title: "دوره ها" },
  { to: "/articles", title: "مقالات" },
  { to: "/services", title: "خدمات" },
  { to: "/aboutUs", title: "درباره ما" },
];
