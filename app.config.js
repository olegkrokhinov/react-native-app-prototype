// Check the environment variable provided by GitHub Actions or local terminal
const variant = process.env.APP_VARIANT || "development";

const IS_PROD = variant === "production";
const IS_PREVIEW = variant === "preview";

const getUniqueIdentifier = () => {
  if (IS_PROD) return "com.olegandco.reactnativeappprototype";
  if (IS_PREVIEW) return "com.olegandco.reactnativeappprototype.preview";
  return "com.olegandco.reactnativeappprototype.dev";
};

const getAppName = () => {
  if (IS_PROD) return "React Native App Prototype";
  if (IS_PREVIEW) return "Prototype (Preview)";
  return "Prototype (Dev)";
};

export default {
  // Dynamic name shown on the home screen
  name: getAppName(),
  slug: "react-native-app-prototype",
  version: "1.0.0",
  orientation: "portrait",
  owner: "olegandco",

  // Dynamic Icon selection
  // Note: Ensure these icon files exist in your assets folder
  icon: IS_PROD
    ? "./assets/images/icon.png" // Using default icon for now, replace if you have specific variant icons
    : IS_PREVIEW
    ? "./assets/images/icon.png"
    : "./assets/images/icon.png",

  scheme: "reactnativeappprototype",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,

  // Platform specific configurations
  ios: {
    bundleIdentifier: getUniqueIdentifier(),
    supportsTablet: true,
  },
  android: {
    package: getUniqueIdentifier(),
    adaptiveIcon: {
      foregroundImage: "./assets/images/android-icon-foreground.png",
      backgroundColor: "#E6F4FE",
    },
    edgeToEdgeEnabled: true,
  },
  web: {
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
        dark: {
          backgroundColor: "#000000",
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
    reactCompiler: true,
  },

  // EAS Project ID (generated after 'eas init')
  extra: {
    router: {},
    eas: {
      projectId: "0ba198b0-e45c-4618-92c7-9807d1ac28f1",
    },
  },
};
