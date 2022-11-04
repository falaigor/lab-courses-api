import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { compareHash } from 'src/utils/helper';
import { TokenProps } from 'src/models/TokenProps';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService, private prisma: PrismaService) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    const passwordTrue = await compareHash(password, user.password);

    if (user && passwordTrue) {
      const { id, name, email } = user;
      return { id, name, email };
    }

    return null;
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async refresh(token: string) {
    try {
      const tokenDecode = (await this.jwtService.verifyAsync(
        token,
      )) as TokenProps;
      const payload = { email: tokenDecode.email, sub: tokenDecode.sub };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
    }
  }
}
