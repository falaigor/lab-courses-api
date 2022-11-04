import { Controller, UseGuards, Post, Request, Query } from '@nestjs/common';
import { AllowAny } from 'src/custom-decorations/allow-any.decorator.ts ';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @AllowAny()
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('refresh')
  @AllowAny()
  async refreshToken(@Query('token') token: string) {
    const tokenToRefresh = token;
    return this.authService.refresh(tokenToRefresh);
  }
}
