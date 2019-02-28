import {AjsCounterDirective, AjsShowHideDirective,} from './app.ajs';
import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {downgradeComponent, UpgradeModule} from '@angular/upgrade/static';
import * as angular from 'angular';

import { AppComponent } from './app.component';

@Component({
  selector: 'aio-app',
  template: `
    <ajs-show-hide>
      <aio-counter></aio-counter>
    </ajs-show-hide>
  `
})
class AIoApp {}

@Component({
  selector: 'aio-counter',
  template: `
    <ajs-counter></ajs-counter>
  `
})
class AIoCounter {}

angular
  .module('ajsApp')
  .directive('aioApp', downgradeComponent({component: AIoApp}));

@NgModule({
  declarations: [
    AppComponent,
    AIoApp,
    AIoCounter,
    AjsCounterDirective,
    AjsShowHideDirective
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [AIoApp],
  providers: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['ajsApp'], { strictDi: true });
  }
}
