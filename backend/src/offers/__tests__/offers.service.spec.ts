import { Test, TestingModule } from "@nestjs/testing";
import { OffersService } from "../offers.service";

describe("OffersService", () => {
	let service: OffersService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [OffersService],
		}).compile();

		service = module.get<OffersService>(OffersService);
	});

	it("should be defined", async () => {
		expect(service).toBeDefined();
	});

	it("should call findByTitle() ", async () => {
		const findByTitleSpy = jest.spyOn(service, "findByTitle");
		const offers = await service.getOffers("");
		expect(findByTitleSpy).toHaveBeenCalled();
	});

	it("should return offers ", async () => {
		const { offers, searchParams } = await service.getOffers("");
		expect(searchParams).toEqual({
			title: expect.any(String),
		});
		expect(offers[0]).toMatchObject({
			id: expect.any(String),
			title: expect.any(String),
			published_at: expect.any(String),
			latitude: expect.any(Number),
			longitude: expect.any(Number),
			company_name: expect.any(String),
			company_logo_url: expect.any(String),
		});
	});
});
