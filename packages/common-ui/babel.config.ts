module.exports = {
  presets: [
    "react-app",
    "@babel/preset-typescript", // TS 쓰실 경우
  ],
  plugins: [["styled-components", { displayName: true }]],
};