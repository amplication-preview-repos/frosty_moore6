import * as graphql from "@nestjs/graphql";
import { PaymentIntegrationService } from "./paymentintegration.service";

export class PaymentIntegrationResolver {
  constructor(protected readonly service: PaymentIntegrationService) {}
}
