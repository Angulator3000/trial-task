import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent {
  @Input() element: any;
  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Output() addField = new EventEmitter<void>();
  @Output() removeField = new EventEmitter<void>();

  onValueChange(newValue: string) {
    console.log(`Input value changed: ${newValue}`);
    this.value = newValue;
    this.valueChange.emit(newValue);
  }

  onAddField() {
    this.addField.emit();
  }

  onRemoveField() {
    this.removeField.emit();
  }
}
