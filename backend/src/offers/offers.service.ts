import { Injectable, Scope } from "@nestjs/common";
import { OfferInterface } from "./interfaces/offer.interface";
import { data } from "../../data";
@Injectable({ scope: Scope.DEFAULT })
export class OffersService {
	private offers: OfferInterface[] = data.sort(
		(a, b) =>
			new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
	);

	public async findByTitle(title: string) {
		const results = title.length
			? this.offers.filter(item =>
					item.title.toLowerCase().includes(title.toLowerCase()),
			  )
			: this.offers;
		return results;
	}
	public async getOffers(title: string) {
		const offers = await this.findByTitle(title);
		return {
			offers: offers,
			searchParams: {
				title,
			},
		};
	}
}
