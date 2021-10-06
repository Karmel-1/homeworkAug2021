import * as views from "./views";

export default () => `
  ${views["Home"]()}
  ${views["Gallery"]()}
  ${views["Bio"]()}
  `;


  export default {
    header: "Main",
    view: "Main"

    };
