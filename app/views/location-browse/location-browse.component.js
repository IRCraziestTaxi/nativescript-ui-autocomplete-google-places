"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var nativescript_google_maps_sdk_1 = require("nativescript-google-maps-sdk");
var nativescript_toast_1 = require("nativescript-toast");
var nativescript_ui_autocomplete_1 = require("nativescript-ui-autocomplete");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var GooglePlacesService_1 = require("../../services/GooglePlacesService");
element_registry_1.registerElement("MapView", function () { return nativescript_google_maps_sdk_1.MapView; });
element_registry_1.registerElement("RadAutoCompleteTextView", function () { return nativescript_ui_autocomplete_1.RadAutoCompleteTextView; });
var LocationBrowseComponent = /** @class */ (function () {
    function LocationBrowseComponent(placesService) {
        this._placesService = placesService;
        this._currentLocation = null;
        this._failureLocation = false;
        this._loadingLocation = false;
        this._mapMarkerSelected = false;
        // this.getLocation();
        // TODO: Remove once getLocation is put back in.
        var lat = this.currentLocationLatitude;
        var lon = this.currentLocationLongitude;
        this._currentLocation = { latitude: lat, longitude: lon };
    }
    LocationBrowseComponent.prototype.ngOnInit = function () {
        this._search.nativeElement.loadSuggestionsAsync = function (search) {
            // return this.searchLocations(search);
            return new Promise(function (resolve) {
                resolve([]);
            });
        };
    };
    Object.defineProperty(LocationBrowseComponent.prototype, "currentLocation", {
        get: function () {
            return this._currentLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "currentLocationLatitude", {
        get: function () {
            // TODO: Change this later; for now, default to coordinates of Huntsville, AL.
            // return this._currentLocation && this._currentLocation.latitude || null;
            return this._currentLocation && this._currentLocation.latitude || 34.7304;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "currentLocationLongitude", {
        get: function () {
            // TODO: Change this later; for now, default to coordinates of Huntsville, AL.
            // return this._currentLocation && this._currentLocation.longitude || null;
            return this._currentLocation && this._currentLocation.longitude || -86.5861;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "failureLocation", {
        get: function () {
            return this._failureLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "failureLocationMessage", {
        get: function () {
            return "Could not find location.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "initialZoom", {
        get: function () {
            return 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "loadingLocation", {
        get: function () {
            return this._loadingLocation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "mapMarkerSelected", {
        get: function () {
            return this._mapMarkerSelected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "unknownLocationMessage", {
        get: function () {
            return "Sorry, we could not determine where you are.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationBrowseComponent.prototype, "noLocationServicesMessage", {
        get: function () {
            return "Please enable location services on your device to show current location.";
        },
        enumerable: true,
        configurable: true
    });
    LocationBrowseComponent.prototype.onMarkerSelect = function (event) {
        if (!this._currentLocation) {
            nativescript_toast_1.makeText(this.noLocationServicesMessage).show();
            return;
        }
        // TODO: Debug this since the documentation for this sucks.
        event;
    };
    LocationBrowseComponent.prototype.onSuggestionSelect = function (event) {
        // TODO: Type?
        event;
    };
    LocationBrowseComponent.prototype.getLocation = function () {
        var _this = this;
        rxjs_1.from(nativescript_geolocation_1.isEnabled()).pipe(operators_1.finalize(function () {
            _this._loadingLocation = false;
        }), operators_1.flatMap(function (locationEnabled) {
            if (locationEnabled) {
                return rxjs_1.from(nativescript_geolocation_1.getCurrentLocation({}));
            }
            nativescript_toast_1.makeText(_this.noLocationServicesMessage).show();
            return rxjs_1.of(null);
        })).subscribe(function (location) {
            if (location) {
                _this._currentLocation = location;
            }
        }, function (error) {
            _this._failureLocation = true;
            if (error instanceof Error) {
                // TODO: Do not display exception messages to end users.
                error = error.message;
            }
            nativescript_toast_1.makeText(error).show();
        });
    };
    // TODO: Type?
    LocationBrowseComponent.prototype.searchLocations = function (search) {
        return this._placesService
            .getLocationSuggestions(search, this._currentLocation)
            .pipe(operators_1.catchError(function (error) {
            nativescript_toast_1.makeText(error).show();
            return rxjs_1.of([]);
        }))
            .toPromise();
    };
    __decorate([
        core_1.ViewChild("locationMap"),
        __metadata("design:type", core_1.ElementRef)
    ], LocationBrowseComponent.prototype, "_map", void 0);
    __decorate([
        core_1.ViewChild("locationSearch"),
        __metadata("design:type", core_1.ElementRef)
    ], LocationBrowseComponent.prototype, "_search", void 0);
    LocationBrowseComponent = __decorate([
        core_1.Component({
            selector: "ns-location-browse",
            moduleId: module.id,
            templateUrl: "./location-browse.component.html",
            providers: [GooglePlacesService_1.GooglePlacesService]
        }),
        __metadata("design:paramtypes", [GooglePlacesService_1.GooglePlacesService])
    ], LocationBrowseComponent);
    return LocationBrowseComponent;
}());
exports.LocationBrowseComponent = LocationBrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLWJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsMEVBQXdFO0FBQ3hFLHFFQUF1SDtBQUN2SCw2RUFBdUQ7QUFDdkQseURBQThDO0FBQzlDLDZFQUFtRjtBQUNuRiw2QkFBNEM7QUFDNUMsNENBQStEO0FBQy9ELDBFQUF5RTtBQUd6RSxrQ0FBZSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsc0NBQU8sRUFBUCxDQUFPLENBQUMsQ0FBQztBQUMxQyxrQ0FBZSxDQUFDLHlCQUF5QixFQUFFLGNBQU0sT0FBQSxzREFBdUIsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0FBUTFFO0lBYUksaUNBQ0ksYUFBa0M7UUFFbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7UUFFcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUVoQyxzQkFBc0I7UUFDdEIsZ0RBQWdEO1FBQ2hELElBQU0sR0FBRyxHQUFXLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztRQUNqRCxJQUFNLEdBQUcsR0FBVyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDbEQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFpQixDQUFDO0lBQzdFLENBQUM7SUFFTSwwQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLEdBQUcsVUFBQyxNQUFjO1lBQzdELHVDQUF1QztZQUN2QyxPQUFPLElBQUksT0FB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QUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGNBQWM7SUFDTixpREFBZSxHQUF2QixVQUF3QixNQUFjO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDckIsc0JBQXNCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQzthQUNyRCxJQUFJLENBQ0Qsc0JBQVUsQ0FBQyxVQUFDLEtBQWE7WUFDckIsNkJBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLFNBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FDTDthQUNBLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUF6SUQ7UUFEQyxnQkFBUyxDQUFDLGFBQWEsQ0FBQztrQ0FDRixpQkFBVTt5REFBVTtJQUUzQztRQURDLGdCQUFTLENBQUMsZ0JBQWdCLENBQUM7a0NBQ0YsaUJBQVU7NERBQTBCO0lBSnJELHVCQUF1QjtRQU5uQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyx5Q0FBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQWVxQix5Q0FBbUI7T0FkN0IsdUJBQXVCLENBNEluQztJQUFELDhCQUFDO0NBQUEsQUE1SUQsSUE0SUM7QUE1SVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRMb2NhdGlvbiwgaXNFbmFibGVkIGFzIGxvY2F0aW9uSXNFbmFibGVkLCBMb2NhdGlvbiBhcyBHZW9sb2NhdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcclxuaW1wb3J0IHsgTWFwVmlldyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZ29vZ2xlLW1hcHMtc2RrXCI7XHJcbmltcG9ydCB7IG1ha2VUZXh0IH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10b2FzdFwiO1xyXG5pbXBvcnQgeyBSYWRBdXRvQ29tcGxldGVUZXh0VmlldywgVG9rZW5Nb2RlbCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmluYWxpemUsIGZsYXRNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgR29vZ2xlUGxhY2VzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9Hb29nbGVQbGFjZXNTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElHb29nbGVQbGFjZXNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2ludGVyZmFjZXMvSUdvb2dsZVBsYWNlc1NlcnZpY2VcIjtcclxuXHJcbnJlZ2lzdGVyRWxlbWVudChcIk1hcFZpZXdcIiwgKCkgPT4gTWFwVmlldyk7XHJcbnJlZ2lzdGVyRWxlbWVudChcIlJhZEF1dG9Db21wbGV0ZVRleHRWaWV3XCIsICgpID0+IFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3KTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwibnMtbG9jYXRpb24tYnJvd3NlXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2NhdGlvbi1icm93c2UuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHByb3ZpZGVyczogW0dvb2dsZVBsYWNlc1NlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkJyb3dzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFwibG9jYXRpb25NYXBcIilcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX21hcDogRWxlbWVudFJlZjxNYXBWaWV3PjtcclxuICAgIEBWaWV3Q2hpbGQoXCJsb2NhdGlvblNlYXJjaFwiKVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfc2VhcmNoOiBFbGVtZW50UmVmPFJhZEF1dG9Db21wbGV0ZVRleHRWaWV3PjtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9wbGFjZXNTZXJ2aWNlOiBJR29vZ2xlUGxhY2VzU2VydmljZTtcclxuXHJcbiAgICBwcml2YXRlIF9jdXJyZW50TG9jYXRpb246IEdlb2xvY2F0aW9uO1xyXG4gICAgcHJpdmF0ZSBfZmFpbHVyZUxvY2F0aW9uOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfbG9hZGluZ0xvY2F0aW9uOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfbWFwTWFya2VyU2VsZWN0ZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHBsYWNlc1NlcnZpY2U6IEdvb2dsZVBsYWNlc1NlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX3BsYWNlc1NlcnZpY2UgPSBwbGFjZXNTZXJ2aWNlO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyZW50TG9jYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2ZhaWx1cmVMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdMb2NhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX21hcE1hcmtlclNlbGVjdGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgb25jZSBnZXRMb2NhdGlvbiBpcyBwdXQgYmFjayBpbi5cclxuICAgICAgICBjb25zdCBsYXQ6IG51bWJlciA9IHRoaXMuY3VycmVudExvY2F0aW9uTGF0aXR1ZGU7XHJcbiAgICAgICAgY29uc3QgbG9uOiBudW1iZXIgPSB0aGlzLmN1cnJlbnRMb2NhdGlvbkxvbmdpdHVkZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50TG9jYXRpb24gPSB7IGxhdGl0dWRlOiBsYXQsIGxvbmdpdHVkZTogbG9uIH0gYXMgR2VvbG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaC5uYXRpdmVFbGVtZW50LmxvYWRTdWdnZXN0aW9uc0FzeW5jID0gKHNlYXJjaDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNlYXJjaExvY2F0aW9ucyhzZWFyY2gpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55W10+KChyZXNvbHZlOiAodmFsOiBhbnlbXSkgPT4gdm9pZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbXSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50TG9jYXRpb24oKTogR2VvbG9jYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TG9jYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjdXJyZW50TG9jYXRpb25MYXRpdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFRPRE86IENoYW5nZSB0aGlzIGxhdGVyOyBmb3Igbm93LCBkZWZhdWx0IHRvIGNvb3JkaW5hdGVzIG9mIEh1bnRzdmlsbGUsIEFMLlxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9jdXJyZW50TG9jYXRpb24gJiYgdGhpcy5fY3VycmVudExvY2F0aW9uLmxhdGl0dWRlIHx8IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRMb2NhdGlvbiAmJiB0aGlzLl9jdXJyZW50TG9jYXRpb24ubGF0aXR1ZGUgfHwgMzQuNzMwNDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGN1cnJlbnRMb2NhdGlvbkxvbmdpdHVkZSgpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIFRPRE86IENoYW5nZSB0aGlzIGxhdGVyOyBmb3Igbm93LCBkZWZhdWx0IHRvIGNvb3JkaW5hdGVzIG9mIEh1bnRzdmlsbGUsIEFMLlxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9jdXJyZW50TG9jYXRpb24gJiYgdGhpcy5fY3VycmVudExvY2F0aW9uLmxvbmdpdHVkZSB8fCBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50TG9jYXRpb24gJiYgdGhpcy5fY3VycmVudExvY2F0aW9uLmxvbmdpdHVkZSB8fCAtODYuNTg2MTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZhaWx1cmVMb2NhdGlvbigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZmFpbHVyZUxvY2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZmFpbHVyZUxvY2F0aW9uTWVzc2FnZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIkNvdWxkIG5vdCBmaW5kIGxvY2F0aW9uLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaW5pdGlhbFpvb20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsb2FkaW5nTG9jYXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRpbmdMb2NhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG1hcE1hcmtlclNlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tYXBNYXJrZXJTZWxlY3RlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVua25vd25Mb2NhdGlvbk1lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJTb3JyeSwgd2UgY291bGQgbm90IGRldGVybWluZSB3aGVyZSB5b3UgYXJlLlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IG5vTG9jYXRpb25TZXJ2aWNlc01lc3NhZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJQbGVhc2UgZW5hYmxlIGxvY2F0aW9uIHNlcnZpY2VzIG9uIHlvdXIgZGV2aWNlIHRvIHNob3cgY3VycmVudCBsb2NhdGlvbi5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25NYXJrZXJTZWxlY3QoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3VycmVudExvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIG1ha2VUZXh0KHRoaXMubm9Mb2NhdGlvblNlcnZpY2VzTWVzc2FnZSkuc2hvdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUT0RPOiBEZWJ1ZyB0aGlzIHNpbmNlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGlzIHN1Y2tzLlxyXG4gICAgICAgIGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblN1Z2dlc3Rpb25TZWxlY3QoZXZlbnQ6IFRva2VuTW9kZWwpOiB2b2lkIHtcclxuICAgICAgICAvLyBUT0RPOiBUeXBlP1xyXG4gICAgICAgIGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TG9jYXRpb24oKTogdm9pZCB7XHJcbiAgICAgICAgZnJvbShsb2NhdGlvbklzRW5hYmxlZCgpKS5waXBlKFxyXG4gICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2FkaW5nTG9jYXRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZsYXRNYXAobG9jYXRpb25FbmFibGVkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbkVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnJvbShnZXRDdXJyZW50TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBtYWtlVGV4dCh0aGlzLm5vTG9jYXRpb25TZXJ2aWNlc01lc3NhZ2UpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZihudWxsKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApLnN1YnNjcmliZSgobG9jYXRpb246IEdlb2xvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsb2NhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VycmVudExvY2F0aW9uID0gbG9jYXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoZXJyb3I6IHN0cmluZyB8IEVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZhaWx1cmVMb2NhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogRG8gbm90IGRpc3BsYXkgZXhjZXB0aW9uIG1lc3NhZ2VzIHRvIGVuZCB1c2Vycy5cclxuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyb3IubWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFrZVRleHQoZXJyb3IpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBUeXBlP1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hMb2NhdGlvbnMoc2VhcmNoOiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BsYWNlc1NlcnZpY2VcclxuICAgICAgICAgICAgLmdldExvY2F0aW9uU3VnZ2VzdGlvbnMoc2VhcmNoLCB0aGlzLl9jdXJyZW50TG9jYXRpb24pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ha2VUZXh0KGVycm9yKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKFtdKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==