import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BookingEngineService } from "./bookingengine.service";

@swagger.ApiTags("bookingEngines")
@common.Controller("bookingEngines")
export class BookingEngineController {
  constructor(protected readonly service: BookingEngineService) {}
}
