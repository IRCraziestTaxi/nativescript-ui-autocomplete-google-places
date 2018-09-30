import { Component, ViewChild, OnInit, ElementRef } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { getCurrentLocation, isEnabled as locationIsEnabled, Location as Geolocation } from "nativescript-geolocation";
import { MapView } from "nativescript-google-maps-sdk";
import { makeText } from "nativescript-toast";
import { RadAutoCompleteTextView, TokenModel } from "nativescript-ui-autocomplete";
import { from, Observable, of } from "rxjs";
import { catchError, finalize, flatMap } from "rxjs/operators";
import { GooglePlacesService } from "../../services/GooglePlacesService";
import { IGooglePlacesService } from "../../services/interfaces/IGooglePlacesService";

registerElement("MapView", () => MapView);
registerElement("RadAutoCompleteTextView", () => RadAutoCompleteTextView);

@Component({
    selector: "ns-location-browse",
    moduleId: module.id,
    templateUrl: "./location-browse.component.html",
    providers: [GooglePlacesService]
})
export class LocationBrowseComponent implements OnInit {
    @ViewChild("locationMap")
    private readonly _map: ElementRef<MapView>;
    @ViewChild("locationSearch")
    private readonly _search: ElementRef<RadAutoCompleteTextView>;

    private readonly _placesService: IGooglePlacesService;

    private _currentLocation: Geolocation;
    private _failureLocation: boolean;
    private _loadingLocation: boolean;
    private _mapMarkerSelected: boolean;

    public constructor(
        placesService: GooglePlacesService
    ) {
        this._placesService = placesService;

        this._currentLocation = null;
        this._failureLocation = false;
        this._loadingLocation = false;
        this._mapMarkerSelected = false;

        // this.getLocation();
        // TODO: Remove once getLocation is put back in.
        const lat: number = this.currentLocationLatitude;
        const lon: number = this.currentLocationLongitude;
        this._currentLocation = { latitude: lat, longitude: lon } as Geolocation;
    }

    public ngOnInit(): void {
        this._search.nativeElement.loadSuggestionsAsync = (search: string) => {
            // return this.searchLocations(search);
            return new Promise<any[]>((resolve: (val: any[]) => void) => {
                resolve([]);
            });
        };
    }

    public get currentLocation(): Geolocation {
        return this._currentLocation;
    }

    public get currentLocationLatitude(): number {
        // TODO: Change this later; for now, default to coordinates of Huntsville, AL.
        // return this._currentLocation && this._currentLocation.latitude || null;
        return this._currentLocation && this._currentLocation.latitude || 34.7304;
    }

    public get currentLocationLongitude(): number {
        // TODO: Change this later; for now, default to coordinates of Huntsville, AL.
        // return this._currentLocation && this._currentLocation.longitude || null;
        return this._currentLocation && this._currentLocation.longitude || -86.5861;
    }

    public get failureLocation(): boolean {
        return this._failureLocation;
    }

    public get failureLocationMessage(): string {
        return "Could not find location.";
    }

    public get initialZoom(): number {
        return 10;
    }

    public get loadingLocation(): boolean {
        return this._loadingLocation;
    }

    public get mapMarkerSelected(): boolean {
        return this._mapMarkerSelected;
    }

    public get unknownLocationMessage(): string {
        return "Sorry, we could not determine where you are.";
    }

    private get noLocationServicesMessage(): string {
        return "Please enable location services on your device to show current location.";
    }

    public onMarkerSelect(event: any): void {
        if (!this._currentLocation) {
            makeText(this.noLocationServicesMessage).show();
            return;
        }

        // TODO: Debug this since the documentation for this sucks.
        event;
    }

    public onSuggestionSelect(event: TokenModel): void {
        // TODO: Type?
        event;
    }

    private getLocation(): void {
        from(locationIsEnabled()).pipe(
            finalize(() => {
                this._loadingLocation = false;
            }),
            flatMap(locationEnabled => {
                if (locationEnabled) {
                    return from(getCurrentLocation({
                    }));
                }

                makeText(this.noLocationServicesMessage).show();
                return of(null);
            })
        ).subscribe((location: Geolocation) => {
            if (location) {
                this._currentLocation = location;
            }
        }, (error: string | Error) => {
            this._failureLocation = true;

            if (error instanceof Error) {
                // TODO: Do not display exception messages to end users.
                error = error.message;
            }

            makeText(error).show();
        });
    }

    // TODO: Type?
    private searchLocations(search: string): Promise<any[]> {
        return this._placesService
            .getLocationSuggestions(search, this._currentLocation)
            .pipe(
                catchError((error: string) => {
                    makeText(error).show();
                    return of([]);
                })
            )
            .toPromise();
    }
}
