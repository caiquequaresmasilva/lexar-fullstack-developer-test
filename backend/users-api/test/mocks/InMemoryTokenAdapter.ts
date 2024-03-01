import { ITokenAdapter } from "../../src/application/adapters";
import { UserProps } from "../../src/domain";

export class InMemoryTokenAdapter extends ITokenAdapter{
  generate(payload: Omit<UserProps, "password">): string {
    return payload.name + payload.email
  }
  
}