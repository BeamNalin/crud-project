import { IsNotEmpty } from "class-validator";
import { IsBoolean, IsString } from "class-validator";

export class CreateUserDto {
    id: number;
    
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName : string;

    @IsBoolean()
    isActive : boolean;
}
