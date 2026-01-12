## 📱 Development & Deployment Cheat Sheet

### 1. Local Development

To run the app locally with a specific variant and icon:

| Variant         | Command                                  |
| --------------- | ---------------------------------------- |
| **Development** | `APP_VARIANT=development npx expo start` |
| **Preview**     | `APP_VARIANT=preview npx expo start`     |
| **Production**  | `APP_VARIANT=production npx expo start`  |

---

### 2. Manual Cloud Builds (EAS CLI)

If you need to trigger a build manually from your terminal without using GitHub Actions:

- **Android (Preview/APK):** `eas build --platform android --profile preview`
- **iOS (Preview/TestFlight):** `eas build --platform ios --profile preview`
- **Production (All platforms):** `eas build --platform all --profile production`

---

### 3. Git Workflow & Automation

Our CI/CD pipeline follows these rules based on the branch:

| Branch     | Action                     | Result                                                |
| ---------- | -------------------------- | ----------------------------------------------------- |
| `dev`      | **Push / Merge**           | Automated **Preview Build** (internal testing)        |
| `hotfix/*` | **Pull Request to master** | Automated **Preview Build** (verification)            |
| `master`   | **Push / Merge**           | Automated **Production Build & App Store Submission** |

---
