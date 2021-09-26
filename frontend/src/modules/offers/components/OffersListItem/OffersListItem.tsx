import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import moment from 'moment';
import React, { FC } from 'react';
import { itemStyles } from './OffersListItem.styles';
import {
	HandleMapAndListClickI,
	OfferInterface,
} from '../../../home/Interfaces/homePageInterfaces';
interface offersListItemProps {
	data: OfferInterface;
	isActive: boolean;
	onClick: HandleMapAndListClickI;
}
const OffersListItem: FC<offersListItemProps> = ({
	data,
	isActive,
	onClick,
}) => {
	return (
		//@ts-ignore
		<Flex
			id={data.id}
			key={data.id}
			{...itemStyles}
			backgroundColor={isActive ? 'rgb(136,133,1)' : 'white'}
			color={isActive ? 'white' : 'black'}
			onClick={() => onClick([data.latitude, data.longitude], data.id, true)}
		>
			<Image
				objectFit="scale-down"
				layout="intrinsic"
				height="100%"
				width="60px"
				src={data.company_logo_url}
				alt={data.company_name}
			/>
			<Flex
				margin="0 20px"
				width="300px"
				flexDirection="column"
				justifyContent="flex-start"
			>
				<Text fontSize={26}> {data.title}</Text>
				<Text color="orange" fontSize={20}>
					{data.salary_from}
					{data.salary_currency} - {data.salary_to}
					{data.salary_currency}
				</Text>
			</Flex>

			<Text fontSize={20} width="200px">
				{moment(data.published_at).format('DD-MM-YYYY HH:MM')}
			</Text>
		</Flex>
	);
};
export default OffersListItem;
