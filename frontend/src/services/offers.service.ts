import axiosInstance from './axiosInstance';
import { GetOffersI } from '../modules/home/Interfaces/homePageInterfaces';
export const getOffers = (title = ''): Promise<GetOffersI> => {
	return axiosInstance
		.get('/offers', {
			params: {
				title,
			},
		})
		.then(r => r.data);
};
