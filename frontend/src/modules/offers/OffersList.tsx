import { Box } from '@chakra-ui/react';
import React, { FC } from 'react';

import OffersListItem from './components/OffersListItem/OffersListItem';
import {
	ActiveLocationI,
	HandleMapAndListClickI,
	OfferInterface,
} from '../home/Interfaces/homePageInterfaces';
export interface OffersListProps {
	offers: OfferInterface[];
	onClick: HandleMapAndListClickI;
	activeLocation: ActiveLocationI;
}
export const OffersList: FC<OffersListProps> = ({
	offers,
	onClick,
	activeLocation,
}) => {
	return (
		<Box
			backgroundColor="rgb(255, 228, 156)"
			width="100%"
			height="100%"
			overflowY="auto"
		>
			{offers?.map(item => (
				<OffersListItem
					key={item.id}
					data={item}
					onClick={onClick}
					isActive={activeLocation.id === item.id}
				/>
			))}
		</Box>
	);
};
