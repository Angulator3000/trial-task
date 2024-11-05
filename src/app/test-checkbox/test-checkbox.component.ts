import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-checkbox',
  templateUrl: './test-checkbox.component.html',
  styleUrls: ['./test-checkbox.component.scss']
})
export class TestCheckboxComponent {
  @Input() element: any;
  @Output() valueChange = new EventEmitter<string[]>();

  onValueChange(choice: any) {
    if (choice.id === 'chooseAll') {
      const allSelected = choice.selected;
      this.element.choices.forEach((c: any) => c.selected = allSelected);
    } else {
      choice.selected = !choice.selected;
    }

    const selectedValues = this.element.choices.filter((c: any) => c.selected).map((c: any) => c.id);
    console.log(`Checkbox value changed: ${selectedValues}`);
    this.valueChange.emit(selectedValues);
  }
}
