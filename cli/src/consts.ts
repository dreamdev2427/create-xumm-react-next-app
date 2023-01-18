import path from "path";
import { fileURLToPath } from "url";

// With the move to TSUP as a build tool, this keeps path routes in other files (installers, loaders, etc) in check more easily.
// Path is in relation to a single index.js file inside ./dist
const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

//export const PKG_ROOT = path.dirname(require.main.filename);

export const TITLE_TEXT = ` 
                       __                                                                       
.----.----.-----.---.-|  |_.-----.______.--.--.--.--.--------.--------.______.---.-.-----.-----.
|  __|   _|  -__|  _  |   _|  -__|______|_   _|  |  |        |        |______|  _  |  _  |  _  |
|____|__| |_____|___._|____|_____|      |__.__|_____|__|__|__|__|__|__|      |___._|   __|   __|
                                                                                   |__|  |__|                                                                                            
`;

export const SUBTITLE_TEXT = ` 
  _           _  __  ___ _ ____ ___    _____       _   __  __          ___ __  __      
 /_| __  __  / )/__)(_  /_| /  (_   __  /  _) __  /_| /__)/__) __  __ (_  /  )/__)/__/ 
(  |        (__/ (  /__(  |(   /__     (  __)    (  |/   /            /  (__// ( /  )                                                                                  
`;

export const DEFAULT_APP_NAME = "my-xumm-app";
export const CREATE_XUMM_APP = "create-xumm-app";
