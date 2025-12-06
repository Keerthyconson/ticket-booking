import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [
    BookingModule,
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: false,
        base: { hostname: 'Booking-Service' },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
