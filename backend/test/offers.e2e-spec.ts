import { OffersModule } from "../src/offers/offers.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
import exp = require("constants");
describe("OffersController (e2e)", () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [OffersModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		app.useGlobalPipes(
			new ValidationPipe({
				transform: true,
				transformOptions: { enableImplicitConversion: true },
			}),
		);
		await app.init();
	});

	it("/ (GET)", async () => {
		const req = await request(app.getHttpServer())
			.get("/offers")
			.expect(200);

		expect(req.body.offers).toEqual(expect.any(Array));
		expect(req.body.searchParams).toEqual({ title: expect.any(String) });
	});

	it("/?title=Canada (GET)", async () => {
		const req = await request(app.getHttpServer())
			.get("/offers")
			.query({ title: "Canada" })
			.expect(200);

		expect(req.body.offers).toEqual(expect.any(Array));
		expect(req.body.searchParams).toEqual({ title: "Canada" });
	});
});
