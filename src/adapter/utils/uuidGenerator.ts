import { v4 as uuidv4 } from 'uuid';

export class UuidGenerator implements UuidGenerator {
    generate(): string {
        return uuidv4();
    }
}