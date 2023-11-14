type AccordianProps = {
  bgColor?: string;
  headerBgColor?: string;
  headerColor?: string;
  color?: string;
  fontWeight?: string | number;
  fontSize?: string;
  lineColor?: string;
  headerHeight?: string;
  removeIcon?: React.ReactNode;
  addIcon?: React.ReactNode;
  data: object;
  isChildren?: boolean;
};

type AccordianContent = {
  title: string;
  isChildren?: boolean;
  children?: object;
  component?: React.ReactNode;
};

export type { AccordianContent, AccordianProps };
