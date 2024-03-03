import { TransformService } from "../../application/services";
import { TransformMiddleware } from "../http/middlewares";


export function makeTransformMiddleware(): TransformMiddleware {
  const service = new TransformService();
  return new TransformMiddleware(service);
}
