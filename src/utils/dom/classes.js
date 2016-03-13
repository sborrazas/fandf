import object from "../object.js";

const classes = {
  set(...args) {
    let className = "";

    for (var arg of args) {
      const argtype = typeof arg;

      if (arg) {
        if ("string" === argtype) {
          className += " " + arg;
        }
        else if (Array.isArray(arg)) {
          className += " " + classes.set(arg);
        }
        else if (object.isObject(arg)) {
          object.each(arg, (key, val) => {
            if (val) {
              className += " " + key;
            }
          });
        }
      }
    }

    return className.substr(1);
  }
};

export default classes;
