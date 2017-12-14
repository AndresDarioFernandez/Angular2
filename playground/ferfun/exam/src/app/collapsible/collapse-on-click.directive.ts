import { Directive, EventEmitter, Output, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[collapse-on-click]',
  exportAs: "cp"
})
export class CollapseOnClick {

  @Input("collapsed")
  isCollapsed = false;

  @Output("collapsed")
  collapsedOutput = new EventEmitter();

  get collapsed() {
      return this.isCollapsed;
  }

  @HostListener('dblclick') 
  onDblClick() {
      this.isCollapsed = !this.isCollapsed;
      this.collapsedOutput.emit(this.isCollapsed);
  }

}
