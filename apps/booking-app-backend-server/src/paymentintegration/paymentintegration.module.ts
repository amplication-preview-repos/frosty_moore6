import { Module } from "@nestjs/common";
import { PaymentIntegrationService } from "./paymentintegration.service";
import { PaymentIntegrationController } from "./paymentintegration.controller";
import { PaymentIntegrationResolver } from "./paymentintegration.resolver";

@Module({
  controllers: [PaymentIntegrationController],
  providers: [PaymentIntegrationService, PaymentIntegrationResolver],
  exports: [PaymentIntegrationService],
})
export class PaymentIntegrationModule {}
