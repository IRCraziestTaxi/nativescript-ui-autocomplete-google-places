"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var nativescript_ui_autocomplete_1 = require("nativescript-ui-autocomplete");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var AppConstants_1 = require("../constants/AppConstants");
var GooglePlacesService = /** @class */ (function () {
    function GooglePlacesService(http) {
        this._http = http;
    }
    // TODO: Type?
    GooglePlacesService.prototype.getLocationSuggestions = function (search, location) {
        if (location === void 0) { location = null; }
        var route = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
        route += "?key=" + AppConstants_1.AppConstants.GOOGLE_MAPS_API_DEV_KEY;
        route += "&input=" + search;
        // if (location) {
        //     route += `&location=${location.latitude},${location.longitude}`;
        //     route += `&radius=${AppConstants.GOOGLE_MAPS_SEARCH_RADIUS}`;
        // }
        return this._http.get(route).pipe(operators_1.map(function (response) {
            return response.json();
        }), operators_1.map(function (response) {
            if (response.error_message) {
                // TODO: Do not show developer error messages to end users.
                throw new Error(response.status + ": " + response.error_message);
            }
            return response.predictions.map(function (p) {
                return new nativescript_ui_autocomplete_1.TokenModel(p.description, null);
            });
            // return response.predictions;
        }), operators_1.catchError(function (error) {
            return rxjs_1.throwError(error.message);
        }));
    };
    GooglePlacesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GooglePlacesService);
    return GooglePlacesService;
}());
exports.GooglePlacesService = GooglePlacesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR29vZ2xlUGxhY2VzU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdvb2dsZVBsYWNlc1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQStDO0FBRS9DLDZFQUEwRDtBQUMxRCw2QkFBOEM7QUFDOUMsNENBQWlEO0FBQ2pELDBEQUF5RDtBQUl6RDtJQUdJLDZCQUNJLElBQVU7UUFFVixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsY0FBYztJQUNQLG9EQUFzQixHQUE3QixVQUNJLE1BQWMsRUFDZCxRQUE0QjtRQUE1Qix5QkFBQSxFQUFBLGVBQTRCO1FBRTVCLElBQUksS0FBSyxHQUFXLDhEQUE4RCxDQUFDO1FBQ25GLEtBQUssSUFBSSxVQUFRLDJCQUFZLENBQUMsdUJBQXlCLENBQUM7UUFDeEQsS0FBSyxJQUFJLFlBQVUsTUFBUSxDQUFDO1FBRTVCLGtCQUFrQjtRQUNsQix1RUFBdUU7UUFDdkUsb0VBQW9FO1FBQ3BFLElBQUk7UUFFSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDN0IsZUFBRyxDQUFDLFVBQUMsUUFBa0I7WUFDbkIsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLEVBQ0YsZUFBRyxDQUFDLFVBQUMsUUFNSjtZQUNHLElBQUksUUFBUSxDQUFDLGFBQWEsRUFBRTtnQkFDeEIsMkRBQTJEO2dCQUMzRCxNQUFNLElBQUksS0FBSyxDQUFJLFFBQVEsQ0FBQyxNQUFNLFVBQUssUUFBUSxDQUFDLGFBQWUsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUM7Z0JBQzdCLE9BQU8sSUFBSSx5Q0FBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0MsQ0FBQyxDQUFDLENBQUM7WUFFSCwrQkFBK0I7UUFDbkMsQ0FBQyxDQUFDLEVBQ0Ysc0JBQVUsQ0FBQyxVQUFDLEtBQVk7WUFDcEIsT0FBTyxpQkFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ04sQ0FBQztJQWpEUSxtQkFBbUI7UUFEL0IsaUJBQVUsRUFBRTt5Q0FLQyxXQUFJO09BSkwsbUJBQW1CLENBa0QvQjtJQUFELDBCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgTG9jYXRpb24gYXMgR2VvbG9jYXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCI7XHJcbmltcG9ydCB7IFRva2VuTW9kZWwgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEFwcENvbnN0YW50cyB9IGZyb20gXCIuLi9jb25zdGFudHMvQXBwQ29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IElHb29nbGVQbGFjZXNTZXJ2aWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9JR29vZ2xlUGxhY2VzU2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR29vZ2xlUGxhY2VzU2VydmljZSBpbXBsZW1lbnRzIElHb29nbGVQbGFjZXNTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2h0dHA6IEh0dHA7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGh0dHA6IEh0dHBcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2h0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IFR5cGU/XHJcbiAgICBwdWJsaWMgZ2V0TG9jYXRpb25TdWdnZXN0aW9ucyhcclxuICAgICAgICBzZWFyY2g6IHN0cmluZyxcclxuICAgICAgICBsb2NhdGlvbjogR2VvbG9jYXRpb24gPSBudWxsXHJcbiAgICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XHJcbiAgICAgICAgbGV0IHJvdXRlOiBzdHJpbmcgPSBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9wbGFjZS9hdXRvY29tcGxldGUvanNvblwiO1xyXG4gICAgICAgIHJvdXRlICs9IGA/a2V5PSR7QXBwQ29uc3RhbnRzLkdPT0dMRV9NQVBTX0FQSV9ERVZfS0VZfWA7XHJcbiAgICAgICAgcm91dGUgKz0gYCZpbnB1dD0ke3NlYXJjaH1gO1xyXG5cclxuICAgICAgICAvLyBpZiAobG9jYXRpb24pIHtcclxuICAgICAgICAvLyAgICAgcm91dGUgKz0gYCZsb2NhdGlvbj0ke2xvY2F0aW9uLmxhdGl0dWRlfSwke2xvY2F0aW9uLmxvbmdpdHVkZX1gO1xyXG4gICAgICAgIC8vICAgICByb3V0ZSArPSBgJnJhZGl1cz0ke0FwcENvbnN0YW50cy5HT09HTEVfTUFQU19TRUFSQ0hfUkFESVVTfWA7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQocm91dGUpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzcG9uc2U6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgbWFwKChyZXNwb25zZToge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JfbWVzc2FnZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVHlwZT9cclxuICAgICAgICAgICAgICAgIC8vIHByZWRpY3Rpb25zOiB7IGRlc2NyaXB0aW9uOiBzdHJpbmcgfVtdLFxyXG4gICAgICAgICAgICAgICAgcHJlZGljdGlvbnM6IGFueVtdLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdHJpbmdcclxuICAgICAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yX21lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBEbyBub3Qgc2hvdyBkZXZlbG9wZXIgZXJyb3IgbWVzc2FnZXMgdG8gZW5kIHVzZXJzLlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtyZXNwb25zZS5zdGF0dXN9OiAke3Jlc3BvbnNlLmVycm9yX21lc3NhZ2V9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnByZWRpY3Rpb25zLm1hcChwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRva2VuTW9kZWwocC5kZXNjcmlwdGlvbiwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UucHJlZGljdGlvbnM7XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXX0=