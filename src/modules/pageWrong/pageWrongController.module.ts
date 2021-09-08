import { Module } from "@nestjs/common";
import { PageWrongController }  from './pageWrongController.controller';

@Module({
    imports:[],
    controllers:[PageWrongController]
})
export class PageWrongModule {}