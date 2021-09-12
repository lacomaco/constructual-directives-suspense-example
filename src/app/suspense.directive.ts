import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { timer, of, EMPTY, merge } from 'rxjs';
import { catchError, map, shareReplay, switchMap, tap } from 'rxjs/operators';

@Directive({
  selector: '[appSuspense]'
})
export class SuspenseDirective {
  wait = of('wait');
  timer = timer(3000).pipe(map(() => 'done'));
  status = merge(this.wait, this.timer).pipe(
    shareReplay(1),
    catchError(() => of('error'))
  );
  constructor(private vcr: ViewContainerRef, private tpl: TemplateRef<any>) {}

  ngOnInit() {
    this.vcr.createEmbeddedView(this.tpl);
  }
}
