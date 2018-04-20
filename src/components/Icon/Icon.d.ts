import * as React from "react";

declare namespace Icon {
  export interface IconProps {
    className?: string;
    link?: boolean;
    prefix?: "fa" | "fe";
    name: string;
    isAriaHidden?: boolean;
  }
}

declare const Icon: React.SFC<Icon.IconProps>;
export = Icon;
