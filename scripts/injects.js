hexo.extend.filter.register('theme_inject', function(injects) {
  injects.bodyBegin.file('default', 'loader.html');
});