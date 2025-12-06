import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class BookingRequestDTO {
  @ApiProperty({
    description: 'ID of the user making the booking',
    example: 'user_12345',
  })
  @IsString()
  @IsNotEmpty()
  userId!: string;

  @ApiProperty({
    description: 'Email address of the user',
    example: 'someEmail@domian.com',
  })
  @IsString()
  @IsNotEmpty()
  emailAddress!: string;

  @ApiProperty({
    description: 'ID of the show to book tickets for',
    example: 'show_67890',
  })
  @IsString()
  @IsNotEmpty()
  showId!: string;

  @ApiProperty({
    description: 'Number of tickets to book',
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  numberOfTickets!: number;

  @ApiProperty({
    description: 'Date of the event',
    example: '2024-12-31',
  })
  @IsString()
  @IsNotEmpty()
  dateOfEvent!: string;
}
