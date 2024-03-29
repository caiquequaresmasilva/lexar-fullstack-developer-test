import { TokenGenerator } from "../../src/application/adapters";
import { UserProps } from "../../src/domain";

export class InMemoryTokenAdapter implements TokenGenerator{
  generate(payload: Omit<UserProps, "password">): string {
    return payload.name + payload.email
  }
  
}