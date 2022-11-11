import "../styles/index.css";
import type { AppType } from "next/app";
import { trpc } from "../server/utils/createTrpcHooks";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
