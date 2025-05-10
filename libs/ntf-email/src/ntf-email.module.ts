import { Module } from '@nestjs/common';
import { NtfEmailService } from './ntf-email.service';

@Module({
  providers: [NtfEmailService],
  exports: [NtfEmailService],
})
export class NtfEmailModule {}
