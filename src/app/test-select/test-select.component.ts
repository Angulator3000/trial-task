import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-select',
  templateUrl: './test-select.component.html',
  styleUrls: ['./test-select.component.scss']
})
export class TestSelectComponent {
  @Input() element: any;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(newValue: string) {
    console.log(`Select value changed: ${newValue}`);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }
}
