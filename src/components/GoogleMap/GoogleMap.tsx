import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

interface OwnProps {
  lat: number;
  lng: number;
  color: string;
  name: string;
  zoom: number;
}

type Props = OwnProps;

const GoogleMap: React.FC<Props> = props => {
    const { lat, lng, color, name, zoom } = props;

    const getMapOptions = () => {
      return {
        disableDefaultUI: true,
        mapTypeControl: true,
        streetViewControl: true,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }]
      };
    };

    return (
        <div style={{
          height: '400px',
          width: '100%',
          boxShadow:
            '0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)'
        }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY || '' }}
          defaultCenter={{lat, lng }}
          defaultZoom={zoom}
          options={getMapOptions}
        >
          <Marker
            lat={lat}
            lng={lng}
            name={name}
            color={color}
          />
        </GoogleMapReact>
      </div>
    );
};

export default GoogleMap;