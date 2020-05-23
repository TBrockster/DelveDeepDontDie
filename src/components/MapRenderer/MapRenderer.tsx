import React from 'react';
import { Coords } from './utils';

interface MapRendererProps {
  rooms: Coords[];
}

function MapRenderer({ rooms }: MapRendererProps): JSX.Element {
  return <div>Hi! This is MapRenderer</div>;
}

export default MapRenderer;
