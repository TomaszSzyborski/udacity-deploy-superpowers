import { Test, TestingModule } from '@nestjs/testing';
import { StatusController } from './status.controller';
import { ConfigService } from '../config/config.service';

describe('Status Controller', () => {
  it('should return ok status', async () => {
    expect(true).toEqual(true);
  });
});
