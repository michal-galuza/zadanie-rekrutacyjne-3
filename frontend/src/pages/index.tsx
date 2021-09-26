import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { getOffers } from '../services/offers.service';
import { GetOffersI } from '../modules/home/Interfaces/homePageInterfaces';
import Head from 'next/head';
export const getServerSideProps = async () => {
	const data = await getOffers('').catch(e => null);
	return {
		props: {
			data,
		},
	};
};
const Home = dynamic(() => import('../modules/home/Home'));
interface HomeProps {
	data: GetOffersI;
}

const HomePage: FC<HomeProps> = ({ data }: HomeProps) => {
	return (
		<>
			<Head>
				<title>Michał Gałuza </title>
			</Head>
			<Home initialData={data} />
		</>
	);
};
export default HomePage;
