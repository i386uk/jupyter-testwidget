// Copyright (c) Xiaofan Li.
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel, DOMWidgetView, ISerializers
} from '@jupyter-widgets/base';

import {
  EXTENSION_SPEC_VERSION
} from './version';

// var $ = require("jquery");
// require("jquery-ui/ui/widgets/slider");

export
class ExampleModel extends DOMWidgetModel {
  defaults() {
    return {...super.defaults(),
      _model_name: ExampleModel.model_name,
      _model_module: ExampleModel.model_module,
      _model_module_version: ExampleModel.model_module_version,
      _view_name: ExampleModel.view_name,
      _view_module: ExampleModel.view_module,
      _view_module_version: ExampleModel.view_module_version,
      value : 'Hello SpecialWorld'
    };
  }

  static serializers: ISerializers = {
      ...DOMWidgetModel.serializers,
      // Add any extra serializers here
    }

  static model_name = 'ExampleModel';
  static model_module = 'jupyter-testwidget';
  static model_module_version = EXTENSION_SPEC_VERSION;
  static view_name = 'ExampleView';  // Set to null if no view
  static view_module = 'jupyter-testwidget';   // Set to null if no view
  static view_module_version = EXTENSION_SPEC_VERSION;
}


export
class ExampleView extends DOMWidgetView {
    testArea: HTMLDivElement;
    model: ExampleModel;

  render() {
      // super.render();
      // this.testArea = document.createElement('div');
      // let newContent = document.createTextNode("Hi there and greetings!");
      // this.testArea.appendChild(newContent);
      // this.el.appendChild(this.testArea);
    this.value_changed();
    this.model.on('change:value', this.value_changed, this);
  }

  value_changed() {
    this.el.textContent = this.model.get('value');
  }
}
