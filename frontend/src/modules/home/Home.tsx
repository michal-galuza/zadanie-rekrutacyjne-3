import React, { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { getOffers } from '../../services/offers.service';
import { Box, Flex } from '@chakra-ui/react';
import { OffersList } from '../offers/OffersList';
import { Header } from '../header/Header';
import _ from 'lodash';
import dynamic from 'next/dynamic';
import {
	ActiveLocationI,
	GetOffersI,
	HandleMapAndListClickI,
	HomePagePropsI,
} from './Interfaces/homePageInterfaces';

const Map = dynamic(() => import('../map/Map'), {
	ssr: false,
	loading: () => <p>Loading</p>,
});

const Home: React.FC<HomePagePropsI> = ({ initialData }) => {
	const [title, setTitle] = useState<string>('');
	const [activeLocation, setActiveLocation] = useState<ActiveLocationI>({
		position: [52.232222, 21.008333],
		id: '',
	});
	const { data, isLoading, isError, refetch, error } = useQuery<
		GetOffersI,
		Error
	>(
		'offers',
		() => getOffers(title),

		{
			cacheTime: 300000,
			retry: false,
			initialData: initialData,
		},
	);

	const throttledRefetch = useCallback(
		_.debounce(() => refetch({ cancelRefetch: true }), 500),
		[],
	);

	const handleHeaderOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
		return throttledRefetch();
	};
	const handleHeaderOnClick = () => throttledRefetch();
	const handleMapAndListClick: HandleMapAndListClickI = (
		position,
		id,
		isFromList = false,
	) => {
		console.log(position, id);
		setActiveLocation({ position, id });
		if (!isFromList) {
			// @ts-ignore
			document.getElementById(id).scrollIntoView();
		}
	};
	return (
		<Flex height="100%" flexDirection="column">
			<Header
				onClick={handleHeaderOnClick}
				value={title}
				onChange={handleHeaderOnChange}
			/>
			<Flex flexDirection="row" flex={1} minHeight={0}>
				<Flex flex={1} width="100%" alignItems="center" justifyContent="center">
					{data && (
						<OffersList
							activeLocation={activeLocation}
							onClick={handleMapAndListClick}
							offers={data.offers}
						/>
					)}
					{isLoading && 'Loading'}
					{(isError || data === null) &&
						(error?.message || 'Something went wrong')}
				</Flex>
				<Box flex={1}>
					<Map
						offers={!data ? [] : data.offers}
						activeLocation={activeLocation}
						onClick={handleMapAndListClick}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default Home;
