declare module 'react-globe.gl' {
  import { Component } from 'react';

  interface GlobeProps {
    globeImageUrl?: string;
    bumpImageUrl?: string;
    backgroundImageUrl?: string;
    pointsData?: any[];
    pointColor?: string | ((d: any) => string);
    pointLabel?: string | ((d: any) => string);
    pointRadius?: number | ((d: any) => number);
    pointAltitude?: number | ((d: any) => number);
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    pointsMerge?: boolean;
    onPointClick?: (point: any) => void;
    onPointHover?: (point: any) => void;
    labelText?: string | ((d: any) => string);
    labelSize?: number;
    labelDotRadius?: number;
    labelColor?: string | ((d: any) => string);
    labelResolution?: number;
  }

  class Globe extends Component<GlobeProps> {
    controls(): {
      autoRotate: boolean;
      autoRotateSpeed: number;
    };
    pointOfView(lat: number, lng: number, altitude: number, transitionDuration?: number): void;
  }

  export default Globe;
} 