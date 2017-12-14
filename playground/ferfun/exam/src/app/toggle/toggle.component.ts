import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})

export class ToggleComponent {
  show = true;
  hidden = false;
  visibility = 'visible';

  toggleShow() {
      this.show = !this.show;
  }

  toggleHidden() {
      this.hidden = !this.hidden;
  }

  toggleVisible() {
      this.visibility = this.visibility == 'visible' ? 'hidden' : 'visible';
  }
}
