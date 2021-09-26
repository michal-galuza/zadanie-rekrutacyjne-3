import { Marker, Popup, useMapEvents } from 'react-leaflet';
import React, { FC, useEffect } from 'react';
import { CustomMarkerI } from '../../../home/Interfaces/homePageInterfaces';
import L from 'leaflet';
const icon = L.icon({ iconUrl: '/icons/mapMarker.svg' });
const iconActive = L.icon({ iconUrl: '/icons/mapMarkerActive.svg' });
const CustomMarker: FC<CustomMarkerI> = ({
	point,
	activeLocation,
	onClick,
	isActive,
}) => {
	const map = useMapEvents({});
	useEffect(() => {
		if (isActive) {
			map.setView([point.latitude, point.longitude], 15);
		}
	}, [isActive]);
	return (
		<Marker
			autoPan={true}
			title={point.title}
			alt={point.title}
			key={point.id}
			zIndexOffset={isActive ? 1 : 0}
			position={[point.latitude, point.longitude]}
			icon={isActive ? iconActive : icon}
			eventHandlers={{
				click: e => onClick([e.latlng.lat, e.latlng.lng], point.id),
			}}
		>
			<Popup>{point.title}</Popup>
		</Marker>
	);
};
export default CustomMarker;
