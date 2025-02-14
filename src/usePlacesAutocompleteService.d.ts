interface usePlacesAutocompleteServiceConfig {
  apiKey?: string;
  googleMapsScriptBaseUrl?: string;
  debounce?: number;
  options?: google.maps.places.QueryAutocompletionRequest;
  sessionToken?: boolean;
  language?: string;
}

interface usePlacesAutocompleteServiceResponse {
  placesAutocompleteService: google.maps.places.AutocompleteService | null;
  placePredictions: google.maps.places.AutocompletePrediction[];
  isPlacePredictionsLoading: boolean;
  getPlacePredictions: (opt: google.maps.places.AutocompletionRequest) => void;
  queryPredictions: google.maps.places.QueryAutocompletePrediction[];
  isQueryPredictionsLoading: boolean;
  getQueryPredictions: (
    opt: google.maps.places.QueryAutocompletionRequest
  ) => void;
}

export default function usePlacesAutocompleteService(
  options: usePlacesAutocompleteServiceConfig
): usePlacesAutocompleteServiceResponse;
