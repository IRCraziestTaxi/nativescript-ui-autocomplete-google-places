"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_static_1 = require("nativescript-angular/platform-static");
// "./app.module.ngfactory" is a dynamically generated module when compiled with AoT.
var app_module_ngfactory_1 = require("./app.module.ngfactory");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
platform_static_1.platformNativeScript().bootstrapModuleFactory(app_module_ngfactory_1.AppModuleNgFactory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWluLmFvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBHQUEwRztBQUMxRyx3RUFBNEU7QUFFNUUscUZBQXFGO0FBQ3JGLCtEQUE0RDtBQUU1RCxtQ0FBaUM7QUFDakMscUNBQW1DO0FBQ25DLGlDQUErQjtBQUMvQixzQ0FBb0M7QUFFcEMsc0NBQW9CLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyx5Q0FBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxyXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1zdGF0aWNcIjtcclxuXHJcbi8vIFwiLi9hcHAubW9kdWxlLm5nZmFjdG9yeVwiIGlzIGEgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIG1vZHVsZSB3aGVuIGNvbXBpbGVkIHdpdGggQW9ULlxyXG5pbXBvcnQgeyBBcHBNb2R1bGVOZ0ZhY3RvcnkgfSBmcm9tIFwiLi9hcHAubW9kdWxlLm5nZmFjdG9yeVwiO1xyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZmluYWxseVwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWVyZ2VNYXBcIjtcclxuXHJcbnBsYXRmb3JtTmF0aXZlU2NyaXB0KCkuYm9vdHN0cmFwTW9kdWxlRmFjdG9yeShBcHBNb2R1bGVOZ0ZhY3RvcnkpO1xyXG4iXX0=