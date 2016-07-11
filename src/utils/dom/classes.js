import _ from "lodash";

const classes = {
  set(...args) {
    let className = "";

    _.forOwn(args, (arg) => {
      const argtype = typeof arg;

      if (arg && typeof arg === "string") {
        className += " " + arg;
      }
      else {
        throw new Error(`Invalid class name \`${arg}\`, it must be a string.`);
      }
    });

    return className.substr(1);
  }
};

export default classes;
