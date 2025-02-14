export class CreateUserRequestDto {
  id: number;
  name: string;
  username: string;
  lastname: string;
  email: string;
  password_hash: string;
  role: string;
}
