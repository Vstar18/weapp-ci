import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get('/all')
    findAll () {
        return 'this is cats all'
    }
}
