export abstract class ITokenAdapter {
  abstract validate(token: string): boolean
}