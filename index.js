// HYPER-AM 😴
// --
// This file is compiled from src/theme.js. Do not edit directly.

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: "#1c1c1c",
    color: "#dcdcdc",
    css: `
      ${config.css || ""}
      .hyper_main {
        border: 2px solid #f92672;
      }
    `,
  });
};
