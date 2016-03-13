export default {
  each: function (obj, iterator) {
    var res = null;

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        res = iterator.call(null, key, obj[key]);
        if (res === false) break;
      }
    }
  },
  merge: function () {
    var self = this
      , objs = Array.prototype.slice.call(arguments, 0)
      , newObj = {}
      , i = null
      , iterator = null;

    iterator = function (key, val) {
      newObj[key] = val;
    };

    for (i = 0; i < objs.length; i += 1) {
      self.each(objs[i], iterator);
    };

    return newObj;
  },
  extends: function (base, properties) {
    this.each(properties, function (key, val) {
      base[key] = val;
    });

    return base;
  },
  omit: function (obj) {
    var attributes = Array.prototype.slice.call(arguments, 0)
      , newObj = {};

    this.each(obj, function (key, val) {
      if (attributes.indexOf(key) === -1) {
        newObj[key] = val;
      }
    });

    return newObj;
  },
  isObject: function (obj) {
    return typeof obj === "object";
  },
  keys: function (obj) {
    return Object.keys(obj);
  },
  clone: function (obj) {
    return this.merge(obj);
  },
  deepClone: function (obj) {
    return JSON.parse(JSON.stringify(obj));
  }
};
