import { create } from "jss";
import reactJss from "react-jss";
import JSSvendorPrefixer from "jss-vendor-prefixer";
import JSSNested from "jss-nested";

export let jss = create();
export let useSheet = reactJss(jss);

jss.use(JSSvendorPrefixer);
jss.use(JSSNested());
