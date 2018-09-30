import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Location as Geolocation } from "nativescript-geolocation";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AppConstants } from "../constants/AppConstants";
import { IGooglePlacesService } from "./interfaces/IGooglePlacesService";

@Injectable()
export class GooglePlacesService implements IGooglePlacesService {
    private readonly _http: Http;

    public constructor(
        http: Http
    ) {
        this._http = http;
    }

    // TODO: Type?
    public getLocationSuggestions(
        search: string,
        location: Geolocation = null
    ): Observable<any[]> {
        let route: string = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
        route += `?key=${AppConstants.GOOGLE_MAPS_API_DEV_KEY}`;
        route += `&input=${search}`;

        // if (location) {
        //     route += `&location=${location.latitude},${location.longitude}`;
        //     route += `&radius=${AppConstants.GOOGLE_MAPS_SEARCH_RADIUS}`;
        // }

        return this._http.get(route).pipe(
            map((response: Response) => {
                return response.json();
            }),
            map((response: {
                error_message: string,
                // TODO: Type?
                // predictions: { description: string }[],
                predictions: any[],
                status: string
            }) => {
                if (response.error_message) {
                    // TODO: Do not show developer error messages to end users.
                    throw new Error(`${response.status}: ${response.error_message}`);
                }

                return response.predictions.map(p => {
                    return new TokenModel(p.description, null);
                });

                // return response.predictions;
            }),
            catchError((error: Error) => {
                return throwError(error.message);
            })
        );
    }
}