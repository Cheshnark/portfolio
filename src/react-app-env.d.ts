/// <reference types="react-scripts" />

declare module '*.PNG' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }