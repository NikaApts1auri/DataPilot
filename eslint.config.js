import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginReact from "eslint-plugin-react";
import { configs as tsConfigs } from "@typescript-eslint/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      js, 
      react: pluginReact, 
    },
    extends: [
      "js/recommended", 
      "plugin:react/recommended", 
      "plugin:react/jsx-runtime",
      tsConfigs.recommended, 
    ],
    rules: {
      "react/react-in-jsx-scope": "off", 
      "react/prop-types": "off", 
     
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser, 
    },
  },
]);
