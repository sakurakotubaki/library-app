import type { FindBookByIdRequestDto } from "../../dtos/book/findBookByIdRequestDto.js";
import type { FindBookByIdResponseDto } from "../../dtos/book/findBookByIdResponseDto.js";

export interface FindBookByIdUseCaseInterface {
    execute(request: FindBookByIdRequestDto): Promise<FindBookByIdResponseDto | null>;  
}