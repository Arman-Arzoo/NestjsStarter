import { IsEmail, IsString ,IsBoolean} from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  rememberMe?: boolean;
}
