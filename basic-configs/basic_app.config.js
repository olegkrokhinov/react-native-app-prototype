// Check the environment variable provided by GitHub Actions or local terminal
const variant = process.env.APP_VARIANT || "development";

const IS_PROD = variant === "production";
const IS_PREVIEW = variant === "preview";

export default {
  // Dynamic name shown on the home screen
  name: IS_PROD ? "My App" : IS_PREVIEW ? "My App (Preview)" : "My App (Dev)",
  slug: "my-app-slug",
  version: "1.0.0",
  orientation: "portrait",

  // Dynamic Icon selection
  icon: IS_PROD
    ? "./assets/icon-prod.png"
    : IS_PREVIEW
    ? "./assets/icon-preview.png"
    : "./assets/icon-dev.png",

  // Platform specific configurations
  ios: {
    bundleIdentifier: IS_PROD
      ? "com.yourname.myapp"
      : IS_PREVIEW
      ? "com.yourname.myapp.preview"
      : "com.yourname.myapp.dev",
    supportsTablet: true,
  },
  android: {
    package: IS_PROD
      ? "com.yourname.myapp"
      : IS_PREVIEW
      ? "com.yourname.myapp.preview"
      : "com.yourname.myapp.dev",
    adaptiveIcon: {
      foregroundImage: IS_PROD
        ? "./assets/icon-prod.png"
        : "./assets/icon-dev.png",
      backgroundColor: "#ffffff",
    },
  },

  // EAS Project ID (generated after 'eas init')
  extra: {
    eas: {
      projectId: "your-project-id-here",
    },
  },
};
