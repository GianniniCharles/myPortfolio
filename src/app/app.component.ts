import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { trigger, transition, group, query, style, animate} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routeAnimation', [
        transition('1 => 2', [
            style({ height: '!' }),
            query(':enter', style({ opacity: 0 })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('2s cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })),
                ]),
                // and now reveal the enter
                query(':enter', animate('2s 1s cubic-bezier(.35,0,.25,1)', style({ opacity: 1 }))),
            ]),
        ]),
       
        transition('2 => 1', [
            style({ height: '!' }),
            query(':enter', style({ opacity: 0 })),
            query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
            // animate the leave page away
            group([
                query(':leave', [
                    animate('1s cubic-bezier(.35,0,.25,1)', style({ opacity: 0 })),
                ]),
                // and now reveal the enter
                query(':enter', animate('1s 0.5s cubic-bezier(.35,0,.25,1)', style({ opacity: 1 }))),
            ]),
        ])
    ])
]
})
export class AppComponent {
  title = 'app';





  getDepth(outlet) {
    return outlet.activatedRouteData['depth'];
  }
}