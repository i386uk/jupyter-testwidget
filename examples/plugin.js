// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
define(["require", "exports", "@jupyter-widgets/base", "./widget", "./version"], function (require, exports, base_1, widget_1, version_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EXTENSION_ID = 'test.extension.example';
    /**
     * The example plugin.
     */
    var examplePlugin = {
        id: EXTENSION_ID,
        requires: [base_1.IJupyterWidgetRegistry],
        activate: activateWidgetExtension,
        autoStart: true
    };
    exports.default = examplePlugin;
    /**
     * Activate the widget extension.
     */
    function activateWidgetExtension(app, registry) {
        registry.registerWidget({
            name: 'jupyter-testwidget',
            version: version_1.EXTENSION_SPEC_VERSION,
            exports: {
                ExampleModel: widget_1.ExampleModel,
                ExampleView: widget_1.ExampleView
            }
        });
    }
});
//# sourceMappingURL=plugin.js.map