import { Component, OnInit, ContentChildren, QueryList, AfterContentInit, TemplateRef } from '@angular/core';
import { SlideComponent } from './slide/slide.component';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.sass']
})
export class CarousselComponent implements OnInit, AfterContentInit {

  index = 0;

  childrenList: SlideComponent[];

  @ContentChildren(SlideComponent) children: QueryList<SlideComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.childrenList = Array.from(this.children);

    console.log(this.children, this.childrenList);

    this.childrenList[this.index].show()
  }

  next() {
    this.hideSlide()
    this.index + 1 < this.childrenList.length ? this.index++ : null;
    this.showSlide()
  }

  prev() {
    this.hideSlide()
    this.index - 1 >= 0 ? this.index-- : null;
    this.showSlide()
  }

  hideSlide() {
    if (this.childrenList[this.index]) {
      this.childrenList[this.index].hide()
    }
  }

  showSlide() {
    if (this.childrenList[this.index]) {
      this.childrenList[this.index].show()
    }
  }

  setSlide(index: number) {
    this.hideSlide()
    this.index = index;
    this.showSlide()
  }

}
