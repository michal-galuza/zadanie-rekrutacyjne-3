import React, { FC, useMemo } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CustomMarker from './components/CustomMarker/CustomMarkers';
import { MapPropsI } from '../home/Interfaces/homePageInterfaces';

const Map: FC<MapPropsI> = ({ offers, activeLocation, onClick }) => {
	const displayMap = useMemo(() => {
		return (
			<MapContainer
				style={{ width: '100%', height: '100%' }}
				center={activeLocation.position}
				zoom={13}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{offers.length &&
					offers.map(item => (
						<CustomMarker
							activeLocation={activeLocation}
							point={item}
							key={item.id}
							onClick={onClick}
							isActive={activeLocation.id === item.id}
						/>
					))}
			</MapContainer>
		);
	}, [offers, activeLocation, onClick]);

	return <> {displayMap}</>;
};
export default Map;
