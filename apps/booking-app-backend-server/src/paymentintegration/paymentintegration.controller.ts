import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaymentIntegrationService } from "./paymentintegration.service";

@swagger.ApiTags("paymentIntegrations")
@common.Controller("paymentIntegrations")
export class PaymentIntegrationController {
  constructor(protected readonly service: PaymentIntegrationService) {}
}
