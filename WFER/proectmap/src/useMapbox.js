import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

export default function useMapbox(
  container = "map",
  center = [37.61192, 55.76199],
  zoom = 10
) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoib3RyaWNhbGEiLCJhIjoiY2tqMjFjcTNzMnp2djJ1bW05NW9zd2h6NCJ9.0w535oE4G9JjDpDxC_vVuw";
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: container,
      style: "mapbox://styles/mapbox/dark-v10",
      center: center,
      zoom: zoom
    });
  }, []);
}
