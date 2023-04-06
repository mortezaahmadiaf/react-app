import hosting from "../../../config/hosting.json";
export const urls = {
  home: "/",
  about_us: "about-us",
};

export const basename =
  process.env.NODE_ENV === "development" ? "/" : `/${hosting.name}/`;
