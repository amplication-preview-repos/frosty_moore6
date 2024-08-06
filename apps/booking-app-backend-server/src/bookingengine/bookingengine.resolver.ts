import * as graphql from "@nestjs/graphql";
import { BookingEngineService } from "./bookingengine.service";

export class BookingEngineResolver {
  constructor(protected readonly service: BookingEngineService) {}
}
