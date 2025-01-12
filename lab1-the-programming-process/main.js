import "./style.css";
import Feature from "ol/Feature.js";
import Map from "ol/Map.js";
import Point from "ol/geom/Point.js";
import View from "ol/View.js";
import { Circle, Fill, Stroke, Style } from "ol/style.js";
import { Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import OSM from "ol/source/OSM";

const points = [
  {
    name: "Fresno",
    feature: new Feature({
      geometry: new Point([-119.755815, 36.779008]),
    }),
    style: new Style({
      image: new Circle({
        radius: 16,
        fill: new Fill({
          color: "black",
        }),
        stroke: new Stroke({
          color: "white",
          width: 4,
        }),
      }),
    }),
  },
  {
    name: "San Mateo",
    feature: new Feature({
      geometry: new Point([-122.322823, 37.55111]),
    }),
    style: new Style({
      image: new Circle({
        radius: 16,
        fill: new Fill({
          color: "red",
        }),
        stroke: new Stroke({
          color: "white",
          width: 4,
        }),
      }),
    }),
  },
];

for (const point of points) {
  point.feature.setStyle([point.style]);
}

const vectorSource = new VectorSource({
  features: points.map((point) => point.feature),
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    vectorLayer,
  ],
  target: "map",
  view: new View({
    projection: "EPSG:4326",
    center: [-120.663503, 35.299102],
    zoom: 16,
  }),
});
