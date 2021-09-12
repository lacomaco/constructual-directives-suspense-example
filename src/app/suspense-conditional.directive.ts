import {
  Directive,
  Input,
  Optional,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { SuspenseDirective } from './suspense.directive';

@Directive({
  selector: '[appSuspensConditional]'
})
export class SuspenseConditionalDirective {
  private _appSuspensConditionalState: string;
  private _appSuspensConditional: string;

  @Input() set appSuspensConditional(value: string) {
    this._appSuspensConditional = value;
  }

  @Input()
  set appSuspensConditionalState(value: string) {
    this._appSuspensConditionalState = value;
  }

  constructor(
    private vcr: ViewContainerRef,
    private tpl: TemplateRef<any>,
    private suspense: SuspenseDirective
  ) {}

  ngOnInit() {
    this.suspense.status.subscribe(state => {
      if (this._appSuspensConditionalState === state) {
        this.vcr.createEmbeddedView(this.tpl);
      } else {
        this.vcr.remove();
      }
    });
  }
}
