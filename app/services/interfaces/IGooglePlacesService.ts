import { Location as Geolocation } from "nativescript-geolocation";
import { TokenModel } from "nativescript-ui-autocomplete";
import { Observable } from "rxjs";

// TODO: Type?
export interface IGooglePlacesService {
    getLocationSuggestions(
        search: string,
        location?: Geolocation
    ): Observable<any[]>;
}