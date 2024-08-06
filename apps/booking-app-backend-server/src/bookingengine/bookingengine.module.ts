import { Module } from "@nestjs/common";
import { BookingEngineService } from "./bookingengine.service";
import { BookingEngineController } from "./bookingengine.controller";
import { BookingEngineResolver } from "./bookingengine.resolver";

@Module({
  controllers: [BookingEngineController],
  providers: [BookingEngineService, BookingEngineResolver],
  exports: [BookingEngineService],
})
export class BookingEngineModule {}
