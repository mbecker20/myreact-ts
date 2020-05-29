export interface ContainerProps {
  children?: any,
  style?: object
}

export interface ItemProps {
  gridPos: [number, number],
  grid: string[][],
  style?: object,
  children?: any
}

export interface GIProps {
  gridPos: [number, number],
  style?: object,
  children?: any
}

export interface GIAbsProps {
  gridPos: [string, string],
  style?: object,
  children?: any
}

export interface LayoutGrid {
  grid: string[][],
  Container: (props: ContainerProps) => JSX.Element,
  StaticContainer: (props: ContainerProps) => JSX.Element,
  Item: (props: GIProps) => JSX.Element,
  StaticItem: (props: GIProps) => JSX.Element,
  AbsoluteItem: (props: GIAbsProps) => JSX.Element,
}