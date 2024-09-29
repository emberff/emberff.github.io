// hexo.extend.injector.register("body_end", '<div class="loader"></div>'); // 注入 loader HTML
// hexo.extend.injector.register("body_end", '<script src="/js/loader.js"></script>'); // 引入 JavaScript

hexo.extend.filter.register('theme_inject', function(injects) {
    injects.bodyBegin.raw('default', `
        <div id="Loadanimation" style="z-index:999999;">
            <div id="Loadanimation-center">
                <div id="Loadanimation-center-absolute">
                    <div class="xccx_object" id="xccx_four"></div>
                    <div class="xccx_object" id="xccx_three"></div>
                    <div class="xccx_object" id="xccx_two"></div>
                    <div class="xccx_object" id="xccx_one"></div>
                </div>
            </div>
        </div>
`);
  });