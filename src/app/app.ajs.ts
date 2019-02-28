import * as angular from 'angular';
import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

angular
  .module('ajsApp', [])
  .component('ajsShowHide', {
    template: `
      <button ng-init="shown = false" ng-click="shown = !shown">Show/Hide!</button>
      <div ng-if="shown">
        <ng-transclude></ng-transclude> 
      </div>
    `
  })
  .component('ajsCounter', {
    template: `
      </br>
      <button ng-init="count = 0" ng-click="count = count + 1" >Bump!</button>
      Count: {{count}}
    `,
  });

@Directive({
  selector: 'ajs-show-hide'
})
export class AjsShowHideDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ajsShowHide', elementRef, injector);
  }
}

@Directive({
  selector: 'ajs-counter'
})
export class AjsCounterDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('ajsCounter', elementRef, injector);
  }
}
