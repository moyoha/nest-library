import { Inject, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {
  @Inject(DbService)
  dbService: DbService;

  async register(registerUserDto: RegisterUserDto) {
    const users: User[] = await this.dbService.read();
  }
}
