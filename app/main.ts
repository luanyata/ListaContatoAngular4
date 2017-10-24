import { platformBrowserDynamic } from '@angular/platform-browser-dynamic' //Usar apenas em DEV, mudar pra o platformBrowser quando for pra producao
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule); //Start da aplicacao