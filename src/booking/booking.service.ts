import { Injectable } from '@nestjs/common';
import { BookingRequestDTO } from './dto/booking-request.dto';
import { Logger } from 'nestjs-pino';

@Injectable()
export class BookingService {
  constructor(private readonly logger: Logger) {}

  async createBooking(data: BookingRequestDTO, xtraceId: string): Promise<any> {
    this.logger.log({
      message: 'Creating booking',
      traceId: xtraceId,
      bookingData: data,
    });
    return { message: 'Booking created successfully' };
  }
}
