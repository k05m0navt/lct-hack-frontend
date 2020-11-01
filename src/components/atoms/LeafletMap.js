import { Map, TileLayer } from "react-leaflet";

function LeafletMap(props) {
    return (
        <Map center={props.center} zoom={props.zoom}>
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>
    );
}

export default LeafletMap;
