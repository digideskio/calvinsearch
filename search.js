// Generated by CoffeeScript 1.4.0
(function() {

  importScripts('calvin-data.js');

  self.addEventListener('message', (function(e) {
    var comic, found, result_list, text, word;
    if (e.data) {
      word = e.data.toLowerCase();
      result_list = {};
      for (comic in calvin) {
        text = calvin[comic];
        found = calvin[comic].toLowerCase().indexOf(word);
        if (found !== -1) {
          result_list[comic] = calvin[comic].toLowerCase().replace(word, "<b>" + word + "</b>");
        }
      }
      return self.postMessage({
        type: 'result',
        data: result_list
      });
    }
  }), false);

}).call(this);
