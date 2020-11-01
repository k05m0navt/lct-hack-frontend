/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function Map(props) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const [pageNum, setPageNum] = useState(1);
    var url =
        "https://ict-hack-api.herokuapp.com/api/objects/all?page=" + pageNum;
    const [contr, setContr] = useState([]);

    useEffect(() => {
        fetch(proxyUrl + url)
            .then((response) => response.json())
            .then((json) => {
                setContr(json);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const coordinates = {
        type: "Polygon",
        coordinates: [],
    };
    // eslint-disable-next-line array-callback-return
    contr.map((obj) => {
        console.log(obj.items);
        var tmp_arr = [];
        obj.geometry[0].points.map((coord) => {
            var coordin = coord.coordinates.split(";");
            var lat = parseFloat(coordin[0]);
            var long = parseFloat(coordin[1]);
            return tmp_arr.push([lat, long]);
        });
        coordinates.coordinates.push(tmp_arr);
    });

    var map = window.egip.layers.createMap({
        target: "map",
        layers: [window.egip.layers.createTiles2GIS()],
        view: window.egip.layers.createViewWGS({}),
    });

    map.setView(window.egip.layers.createView77());
    window.egip.layers.fit77(map);
    map.getView().setZoom(10);

    async function main() {
        await window.egip.api
            .login({
                login: "user_api",
                password: '-5V2wJO"!"X4',
            })
            .catch((err) => console.warn(err));

        var layer = window.egip.layers.createVectorLayer({
            id: "polygone",
            type: "random",
            source: window.egip.layers.createVectorSource({}),
            style: new window.ol.style.Style({
                stroke: new window.ol.style.Stroke({
                    color: "red",
                    width: 8,
                }),
                fill: new window.ol.style.Fill({
                    color: "rgba(0, 0, 255, 0.1)",
                }),
            }),
        });
        map.addLayer(layer);

        coordinates.coordinates.map((obj) => {
            window.egip.layers
                .getLayerById(map, "polygone")
                .getSource()
                .addFeature(
                    new window.ol.Feature(
                        new window.ol.geom.Polygon([
                            obj.map((coord) => {
                                return coord;
                            }),
                        ])
                    )
                );
        });
    }

    main();

    return <div id='map' className={props.className}></div>;
}

export default Map;
