'use client';
import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';

interface Location {
  lat: number;
  lng: number;
  name: string;
  color: string;
  description: string;
}

interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: string[];
}

const locations: Location[] = [
  { lat: 19.3133, lng: -81.2546, name: 'Cayman Islands', color: '#FF6B6B', description: 'Home' },
  { lat: 18.1096, lng: -77.2975, name: 'Jamaica', color: '#4ECDC4', description: 'Home' },
  { lat: 41.8719, lng: 12.5674, name: 'Italy', color: '#45B7D1', description: 'UWC' },
  { lat: 35.0527, lng: -78.8784, name: 'Fayetteville, NC', color: '#9B59B6', description: 'University' }
];

const destination = locations.find(loc => loc.name === 'Fayetteville, NC')!;
const arcs: Arc[] = locations
  .filter(loc => loc.name !== destination.name)
  .map(loc => ({
    startLat: loc.lat,
    startLng: loc.lng,
    endLat: destination.lat,
    endLng: destination.lng,
    color: ['#56CCF2', '#2D9CDB']
  }));

const GlobeComponent = () => {
  const globeEl = useRef<any>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!globeEl.current) return;

    const timeout = setTimeout(() => {
      try {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.6;
        globeEl.current.pointOfView({ altitude: 2.5 });
        setIsInitialized(true);
      } catch (e) {
        console.error('Globe initialization error:', e);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden bg-black">
      {!isInitialized && (
        <div className="text-center text-gray-300 pt-20">Initializing globe...</div>
      )}
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={locations}
        pointColor="color"
        pointLabel={(d: Location) => `${d.name}: ${d.description}`}
        pointRadius={0.5}
        pointAltitude={0.1}
        atmosphereColor="deepskyblue"
        atmosphereAltitude={0.15}
        labelText={(d: Location) => d.name}
        labelSize={1.5}
        labelDotRadius={0.4}
        labelColor={() => 'rgba(255,255,255,0.75)'}
        onPointClick={(loc) => {
          globeEl.current.pointOfView({ lat: loc.lat, lng: loc.lng, altitude: 1.5 }, 1000);
        }}
        arcsData={arcs}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={1}
        arcDashInitialGap={() => Math.random()}
        arcDashAnimateTime={3000}
        arcAnimationDuration={3000}
        arcAnimationEasing={t => t}
      />
    </div>
  );
};

export default GlobeComponent; 