import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.service';
import { BookingRequestDTO } from './dto/booking-request.dto';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createBooking(
    @Headers('x-trace-id') traceId: string,
    @Body() bookingRequest: BookingRequestDTO,
  ): Promise<any> {
    return this.bookingService.createBooking(bookingRequest, traceId);
  }
}
