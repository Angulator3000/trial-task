import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  formElements: any[] = [
    {
      type: 'input',
      id: 'name',
      label: 'Имя*',
      required: true
    },
    {
      type: 'number',
      id: 'age',
      label: 'Возраст*',
      required: true
    },
    {
      type: 'select',
      id: 'maritalStatus',
      label: 'Семейное положение*',
      required: true,
      choices: [
        { value: 'не женат / не замужем', label: 'Не женат / не замужем' },
        { value: 'женат / замужем', label: 'Женат / замужем' },
        { value: 'разведен / разведена', label: 'Разведен / разведена' },
        { value: 'вдовец / вдова', label: 'Вдовец / вдова' }
      ]
    },
    {
      type: 'input',
      id: 'university',
      label: 'ВУЗ',
      description: 'Например, ВолгГУ',
      addField: true,
      removeField: false
    },
    {
      type: 'input',
      id: 'birthplace',
      label: 'Место рождения'
    },
    {
      type: 'checkbox',
      id: 'skills',
      label: 'Навыки',
      choices: [
        { id: 'communication', label: 'Общение', selected: false },
        { id: 'driving', label: 'Вождение', selected: false },
        { id: 'languages', label: 'Иностранные языки', selected: false },
        { id: 'programming', label: 'Программирование', selected: false },
        { id: 'obstacleRun', label: 'Бег с препятствиями', selected: false },
        { id: 'helicopterControl', label: 'Управление вертолетом', selected: false },
        { id: 'speedReading', label: 'Быстрое чтение', selected: false },
        { id: 'operaSinging', label: 'Оперное пение', selected: false },
        { id: 'selfDefense', label: 'Самозащита', selected: false },
        { id: 'chooseAll', label: 'Выбрать все', selected: false }
      ]
    }
  ];

  testFormModel: any = {};

  constructor() { }

  ngOnInit(): void {
    this.formElements.forEach(element => {
      if (element.type === 'checkbox') {
        this.testFormModel[element.id] = element.choices.filter((choice: any) => choice.selected).map((choice: any) => choice.id);
      } else {
        this.testFormModel[element.id] = '';
      }
    });
  }

  onValueChange(elementId: string, newValue: any) {
    console.log(`Value changed for ${elementId}: ${newValue}`);
    this.testFormModel[elementId] = newValue;
  }

  submitForm() {
    console.log('Form submitted:', this.testFormModel);
  }

  addField(elementId: string) {
    const elementIndex = this.formElements.findIndex(element => element.id === elementId);
    const newElement = {
      type: 'input',
      id: `additionalField${this.formElements.length + 1}`,
      label: 'ВУЗ',
      description: 'Например, ВолгГУ',
      addField: false,
      removeField: true
    };
    this.formElements.splice(elementIndex + 1, 0, newElement);
  }

  removeField(elementId: string) {
    const elementIndex = this.formElements.findIndex(element => element.id === elementId);
    this.formElements.splice(elementIndex, 1);
  }
}
