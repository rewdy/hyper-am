exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: "#1c1c1c",
    color:"#dcdcdc",
    css: `
      ${config.css || ""}
      {{css}}
    `,
  });
};
