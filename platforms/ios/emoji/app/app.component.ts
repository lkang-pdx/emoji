import { Component } from "@angular/core";
import { isIOS } from 'platform';
import { topmost } from 'ui/frame';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
    
    constructor() {
        if (isIOS) {
            topmost().ios.controller.navigationBar.barStyle = 1;
        }
    }
}
