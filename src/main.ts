import './polyfills';
declare var jasmine;

import { enableProdMode } from '@angular/core';
import './test/jasmine-setup';
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot0.js';
import 'jasmine-core/lib/jasmine-core/boot1.js';

import './test.ts';
// import jasmine from 'jasmine';
import { AppModule } from './app/app.module';
import { TestBed, async } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

platformBrowserDynamicTesting()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherise, log the boot error
  })
  .catch((err) => console.error(err));

(function bootstrap() {
  if ((window as any).jasmineRef) {
    location.reload();

    return;
  }

  window.onload(new Event('anything'));
  (window as any).jasmineRef = jasmine.getEnv();
})();
