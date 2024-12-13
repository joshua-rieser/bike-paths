/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
let map;
var markers = []; // Array to store markers


async function initMap() {
  // The location of Uluru
  const position = { lat: 40.730610, lng: -73.935242  };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  // map = new Map(document.getElementById("map"), {
  //   zoom: 10,
  //   center: position,
  //   mapId: "DEMO_MAP_ID",
  // });


}

initMap();
