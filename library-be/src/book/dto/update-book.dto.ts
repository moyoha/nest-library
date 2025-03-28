import { IsNotEmpty } from 'class-validator';

export class UpdateBookDto {
  @IsNotEmpty({ message: 'The id cannot be empty' })
  id: number;

  @IsNotEmpty({ message: 'The title cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'The author cannot be empty' })
  author: string;

  @IsNotEmpty({ message: 'The description cannot be empty' })
  description: string;

  @IsNotEmpty({ message: 'The cover cannot be empty' })
  cover: string;
}
