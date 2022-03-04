import { APIGatewayProxyHandler } from "aws-lambda";

export const main: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: `[OK] Healthcheck User Service.`,
  };
};
