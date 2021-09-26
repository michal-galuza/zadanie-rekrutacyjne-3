import {
	Controller,
	DefaultValuePipe,
	Get,
	Param,
	ParseIntPipe,
	Query,
} from "@nestjs/common";
import { OffersService } from "./offers.service";

@Controller("offers")
export class OffersController {
	constructor(private readonly offersService: OffersService) {}

	@Get("/")
	async findAll(@Query("title", new DefaultValuePipe("")) title: string) {
		return this.offersService.getOffers(title);
	}
}
