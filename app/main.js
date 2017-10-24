"use strict";
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic"); //Usar apenas em DEV, mudar pra o platformBrowser quando for pra producao
const app_module_1 = require("./app.module");
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule); //Start da aplicacao
//# sourceMappingURL=main.js.map