import { z } from "zod";
import { publicProcedure, router } from "../utils/createTrpcRouter";

export const exampleRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      })
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? "world"}`,
      };
    }),
});
