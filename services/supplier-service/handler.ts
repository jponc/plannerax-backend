import sample from "sample";
import lib from "../../libs";

export async function main(event: any, context: any) {
  return {
    statusCode: 200,
    body: `Hello World! Via ${sample()} and ${lib()}.`,
  };
}
