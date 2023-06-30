import { ReactNode } from "react";
import Back from "./Back";
import Code from "./Code";

export default function CssContainer({
  children,
  code,
}: {
  children?: ReactNode;
  code?: string;
}) {
  return (
    <>
      <Back />
      {children}
      {code && <Code code={code} />}
    </>
  );
}
