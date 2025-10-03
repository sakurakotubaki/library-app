import type { AddBookRequestDto } from "../../dtos/book/addBookRequestDto.js";
import type { AddBookResponseDto } from "../../dtos/book/addBookResponseDto.js";

export interface AddBookUseCaseInterface {
    // 実行するためのexecuteメソッド
    execute(requestDto: AddBookRequestDto): Promise<AddBookResponseDto>;
}