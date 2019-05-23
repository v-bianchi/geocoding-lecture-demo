import "bootstrap";
import { initMapbox } from "../plugins/init_mapbox";
import { initAutocomplete } from "../plugins/init_autocomplete";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

initMapbox();
initAutocomplete();
