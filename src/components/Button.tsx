import { PropsWithChildren } from "react";

export default function Button({ children }: PropsWithChildren) {
  return <button>IXO:{children}</button>;
}
