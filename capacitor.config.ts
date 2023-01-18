import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "nl.misker.nl.ionic.jsonparseerror",
  appName: "JSONParseError",
  webDir: "build",
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
