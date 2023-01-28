import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      {children}
      <div>qweqweqweqweqweqe</div>
    </Suspense>
  );
}
