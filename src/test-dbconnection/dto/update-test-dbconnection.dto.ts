import { PartialType } from '@nestjs/mapped-types';
import { CreateTestDbconnectionDto } from './create-test-dbconnection.dto';

export class UpdateTestDbconnectionDto extends PartialType(CreateTestDbconnectionDto) {}
