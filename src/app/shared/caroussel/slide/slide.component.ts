import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.sass']
})
export class SlideComponent implements OnInit {

  @HostBinding('style.backgroundColor')
  @Input() backgroundColor = '#ffffff';

  @HostBinding('style.borderRadius')
  @Input() borderRadius = '5px';

  @HostBinding('style.display')
  private display = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  show() {
    this.display = 'flex';
  }

  hide() {
    this.display = 'none';
  }

}
