import gradient from "gradient-string";
import { TITLE_TEXT, SUBTITLE_TEXT } from "~/consts.js";
import { getUserPkgManager } from "~/utils/getUserPkgManager.js";

// colors brought in from vscode poimandres theme
const poimandresTheme = {
  blue: "#add7ff",
  cyan: "#89ddff",
  green: "#5de4c7",
  magenta: "#fae4fc",
  red: "#d0679d",
  yellow: "#fffac2",
};
const subTitleTheme = {
    red: "#d0679d",
  yellow: "#fffac2",
};

export const renderTitle = () => {
  const xummGradient = gradient(Object.values(poimandresTheme));

  // resolves weird behavior where the ascii is offset
  const pkgManager = getUserPkgManager();
  if (pkgManager === "yarn" || pkgManager === "pnpm") {
    console.log("");
  }
  console.log(xummGradient.multiline(TITLE_TEXT));
};

export const renderSubTitle = () => {
  const xummGradient = gradient(Object.values(subTitleTheme));

  // resolves weird behavior where the ascii is offset
  const pkgManager = getUserPkgManager();
  if (pkgManager === "yarn" || pkgManager === "pnpm") {
    console.log("");
  }
  console.log(xummGradient.multiline(SUBTITLE_TEXT));
};
