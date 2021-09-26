import { Test, TestingModule } from "@nestjs/testing";
import { OffersController } from "../offers.controller";
import { OffersService } from "../offers.service";
import { serviceMock } from "./mocks/service.mock";

describe("Offers Controller", () => {
	let controller: OffersController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [OffersController],
			providers: [OffersService],
		})
			.overrideProvider(OffersService)
			.useValue(serviceMock)
			.compile();

		controller = module.get<OffersController>(OffersController);
	});

	it("should be defined", async () => {
		expect(controller).toBeDefined();
	});

	it("should pass values tp getOffers", async () => {
		await controller.findAll("Canada");
		expect(serviceMock.getOffers).toBeCalledWith("Canada");
	});
});
