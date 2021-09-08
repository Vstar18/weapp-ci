import { Controller, All, Res } from "@nestjs/common";
import { Response } from "express";

@Controller("/*")
export class PageWrongController {
    construtor () {}
    @All() 
    PageWrong (@Res() res:Response):void {
        res.redirect('/404')
    }
}