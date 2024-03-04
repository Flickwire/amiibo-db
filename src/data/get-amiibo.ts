import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "./axios";
import { AmiiboListSchema } from "./schema/amiibo";
import { AmiiboResponse } from "@/types/types";

export async function getAmiibo(context: QueryFunctionContext): Promise<AmiiboResponse> {
  return axios.get('',{signal: context.signal}).then((res) => res.data).then((data) => AmiiboListSchema.parse(data))
}