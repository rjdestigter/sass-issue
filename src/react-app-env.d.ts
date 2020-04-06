/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_E2E?: 'on' | 'off';
    readonly REACT_APP_MOCK_API_FAILURE?: 'TRUE' | 'FALSE';
    readonly REACT_APP_API_BASE_PATH?: string;
    readonly REACT_APP_X_API_KEY?: string;
    readonly REACT_APP_ENV_TARGET?: "dev" | "qa" | "prod" | "uat";
  }
}
declare module 'debug' {
  export default any
}