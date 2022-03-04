import sample from "sample";
import { lib } from "../../../libs";
import { APIGatewayProxyHandler } from "aws-lambda";

export const main: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()} and ${lib()}.`,
  };
};
