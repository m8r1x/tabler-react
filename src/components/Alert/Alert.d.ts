import * as React from "react";

declare namespace Alert {
  export type AlertType =
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger";
  export interface AlertProps {
    children?: React.ReactNode;
    className?: string;
    type: AlertType;
    icon?: string;
    hasExtraSpace?: boolean;
    isDismissible?: boolean;
    avatar?: string;
  }
}

declare const Alert: React.SFC<Alert.AlertProps>;
export = Alert;
