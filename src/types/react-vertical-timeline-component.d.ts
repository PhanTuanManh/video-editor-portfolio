declare module "react-vertical-timeline-component" {
  import { FC, ReactNode } from "react";

  interface VerticalTimelineProps {
    children?: ReactNode;
    className?: string;
    layout?: "1-column" | "2-columns";
    animate?: boolean;
  }

  interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: ReactNode;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    position?: "left" | "right";
    visible?: boolean;
  }

  export const VerticalTimeline: FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: FC<VerticalTimelineElementProps>;
}
