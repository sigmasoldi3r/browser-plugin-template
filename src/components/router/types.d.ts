import { PropsWithChildren } from "react";

export type RouterProps<T extends string> = PropsWithChildren<{
  page: T;
}>;
