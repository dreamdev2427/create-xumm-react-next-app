import type { PkgInstallerMap } from "~/installers/index.js";
import path from "path";
import { installPackages } from "~/helpers/installPackages.js";
import { scaffoldProject } from "~/helpers/scaffoldProject.js";
import { selectAppFile, selectIndexFile } from "~/helpers/selectBoilerplate.js";
import { getUserPkgManager } from "~/utils/getUserPkgManager.js";

interface CreateProjectOptions {
  projectName: string;
  framework: string;
  language: string;
  packages: PkgInstallerMap;
  noInstall: boolean;
}

export const createProject = async ({
  projectName,
  framework,
  language,
  packages,
  noInstall,
}: CreateProjectOptions) => {
  const pkgManager = getUserPkgManager();
  const projectDir = path.resolve(process.cwd(), projectName);

  // Bootstraps the base application
  await scaffoldProject({
    projectName,
    framework,
    language,
    projectDir,
    pkgManager,
    noInstall,
  });

  // Install the selected packages only for next framework
  // TODO - update to include package customization for react
  if (framework.includes("next"))
    installPackages({
      projectDir,
      framework,
      language,
      pkgManager,
      packages,
      noInstall,
    });

  // TODO: Look into using handlebars or other templating engine to scaffold without needing to maintain multiple copies of the same file
  selectAppFile({ projectDir, framework, language, packages });
  selectIndexFile({ projectDir, framework, language, packages });

  return projectDir;
};
