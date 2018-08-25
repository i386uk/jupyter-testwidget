// Copyright (c) Xiaofan Li.
// Distributed under the terms of the Modified BSD License.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "@jupyter-widgets/base", "./version"], function (require, exports, base_1, version_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // var $ = require("jquery");
    // require("jquery-ui/ui/widgets/slider");
    var ExampleModel = /** @class */ (function (_super) {
        __extends(ExampleModel, _super);
        function ExampleModel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExampleModel.prototype.defaults = function () {
            return __assign({}, _super.prototype.defaults.call(this), { _model_name: ExampleModel.model_name, _model_module: ExampleModel.model_module, _model_module_version: ExampleModel.model_module_version, _view_name: ExampleModel.view_name, _view_module: ExampleModel.view_module, _view_module_version: ExampleModel.view_module_version, value: 'Hello SpecialWorld' });
        };
        ExampleModel.serializers = __assign({}, base_1.DOMWidgetModel.serializers);
        ExampleModel.model_name = 'ExampleModel';
        ExampleModel.model_module = 'jupyter-testwidget';
        ExampleModel.model_module_version = version_1.EXTENSION_SPEC_VERSION;
        ExampleModel.view_name = 'ExampleView'; // Set to null if no view
        ExampleModel.view_module = 'jupyter-testwidget'; // Set to null if no view
        ExampleModel.view_module_version = version_1.EXTENSION_SPEC_VERSION;
        return ExampleModel;
    }(base_1.DOMWidgetModel));
    exports.ExampleModel = ExampleModel;
    var ExampleView = /** @class */ (function (_super) {
        __extends(ExampleView, _super);
        function ExampleView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExampleView.prototype.render = function () {
            // super.render();
            // this.testArea = document.createElement('div');
            // let newContent = document.createTextNode("Hi there and greetings!");
            // this.testArea.appendChild(newContent);
            // this.el.appendChild(this.testArea);
            this.value_changed();
            this.model.on('change:value', this.value_changed, this);
        };
        ExampleView.prototype.value_changed = function () {
            this.el.textContent = this.model.get('value');
        };
        return ExampleView;
    }(base_1.DOMWidgetView));
    exports.ExampleView = ExampleView;
});
//# sourceMappingURL=widget.js.map