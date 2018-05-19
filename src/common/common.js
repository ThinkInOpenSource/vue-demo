exports.install = function (Vue, options) {

  Vue.prototype.helloWorld = function(msg) {
    console.info('hello world ' + msg);
  }

};
