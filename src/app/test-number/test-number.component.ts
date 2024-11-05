import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-number',
  templateUrl: './test-number.component.html',
  styleUrls: ['./test-number.component.scss']
})
export class TestNumberComponent {
  @Input() element: any;
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();

  onValueChange(newValue: number) {
    console.log(`Number value changed: ${newValue}`);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
