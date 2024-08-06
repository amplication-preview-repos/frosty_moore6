import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SearchModuleBase } from "./base/search.module.base";
import { SearchService } from "./search.service";
import { SearchController } from "./search.controller";
import { SearchResolver } from "./search.resolver";

@Module({
  imports: [SearchModuleBase, forwardRef(() => AuthModule)],
  controllers: [SearchController],
  providers: [SearchService, SearchResolver],
  exports: [SearchService],
})
export class SearchModule {}
