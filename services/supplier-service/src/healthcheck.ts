import { sample } from "sample";
import { lib } from "../../../libs";
import { APIGatewayProxyHandler } from "aws-lambda";

export const main: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: `Healthcheck! Via ${sample()} and ${lib()}.`,
  };
};
