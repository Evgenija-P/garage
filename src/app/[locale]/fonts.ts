import { Jura } from "next/font/google";
import localFont from "next/font/local";

const jura = Jura({
  weight: ["400", "500", "600", "700"],
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "kayah-li",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
  display: "swap",
  variable: "--jura-font",
});

const thousand = localFont({
  src: "../../fonts/SAThousandMedium.woff2",
});

export { jura, thousand };
