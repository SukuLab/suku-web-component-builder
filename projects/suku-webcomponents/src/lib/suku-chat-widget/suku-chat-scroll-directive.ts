import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[scrollToBottom]'
})
export class ScrollToBottomDirective {
    constructor(private _el: ElementRef) { }
    public scrollToBottom() {
        const el: HTMLDivElement = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    }
}
