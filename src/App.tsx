import React from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import beacons from './beacons.json';
import icon from './beacon-icon';
import './App.css';
import beaconIcon from './beacon-icon';




function App() {


  return (
    <section className="App">
      <header>
        <p>2 Survey Jobs</p>
      </header>
      <main>
        <MapContainer
          className="map"
          zoom={11}
          scrollWheelZoom={true}
          attributionControl={true}
          center={[6.460188, 7.584494]}>
          <TileLayer
            id="mapbox/streets-v11"
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmNhbGx5IiwiYSI6ImNrN3Vud3N5bzE1cWwzbXFyc3lpaHlldWoifQ.-HWevPOSU8PIR6HSP4R8Lw`} />

          {
            beacons.map(beacon => (
              <Marker
                icon={beaconIcon}
                position={
                  [Number(beacon.latitude), Number(beacon.longitude)]
                }></Marker>
            )
            )
          }
        </MapContainer>
      </main>
      <footer>
        <ul>
          <li>
            <a href="#">Map View</a>
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default App;
