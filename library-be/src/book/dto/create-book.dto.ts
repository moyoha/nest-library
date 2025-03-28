import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'The title cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'The author cannot be empty' })
  author: string;

  @IsNotEmpty({ message: 'The description cannot be empty' })
  description: string;

  @IsNotEmpty({ message: 'The cover cannot be empty' })
  cover: string;
}
