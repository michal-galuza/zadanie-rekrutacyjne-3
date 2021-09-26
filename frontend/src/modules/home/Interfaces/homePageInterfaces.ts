import { LatLngExpression } from 'leaflet';

export interface SkillsInterface {
	name: string;
	level: number;
}
export interface OfferInterface {
	id: string;
	title: string;
	street: string;
	city: string;
	country_code: string;
	marker_icon: string;
	remote: boolean;
	experience_level: string;
	salary_from: number;
	salary_to: number;
	salary_currency: string;
	latitude: number;
	longitude: number;
	employment_type: string;
	published_at: string;
	company_name: string;
	company_url: string;
	company_size: string;
	company_logo_url: string;
	skills: SkillsInterface[];
}

export interface GetOffersI {
	offers: OfferInterface[];
	searchParams: {
		title: string;
	};
}
export interface HomePagePropsI {
	initialData: GetOffersI;
}
export interface ActiveLocationI {
	position: LatLngExpression;
	id: string;
}
export interface HandleMapAndListClickI {
	(position: LatLngExpression, id: string, isFromList?: boolean): void;
}
export interface MapPropsI {
	offers: OfferInterface[];
	activeLocation: ActiveLocationI;
	onClick: HandleMapAndListClickI;
}
export interface CustomMarkerI {
	point: OfferInterface;
	activeLocation: ActiveLocationI;
	onClick: HandleMapAndListClickI;
	isActive: boolean;
}
