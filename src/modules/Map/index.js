import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import styled from 'styled-components';
import { withRouter, Route } from 'react-router-dom';

import FilterView from './Views/FilterView';
import Tooltip from 'components/Tooltip';

import c from 'config';

const mapConfig = c.map.config;

const MapGL = ReactMapboxGl({ ...mapConfig });

const MapWrapper = styled.div`
  height: 100vh;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-grow: 1;
  position: relative;
  opacity: 1;
`;

const Map = p => {
  const {
    mapCenter,
    mapZoom,
    style,
    data
  } = p;

  return (
    <MapWrapper>
      <MapGL
        zoom={mapZoom}
        center={mapCenter}
        style={style}
        containerStyle={{ height: '100%', width: '100%' }}
        // onStyleLoad={map => this.onStyleLoad(map)}
        // onData={map => this.onData(map)}
        // onClick={(map, e) => {this.posArray(e)}}
        // flyToOptions={config.map.flyToOptions}
      >
        <Route
          exact path={['/', '/suche', '/liste', '/favoriten', '/info']} 
          component={() => <FilterView data={data}/>}
        />
        <Tooltip />
      </MapGL>
    </MapWrapper>
  )
}

export default withRouter(Map);