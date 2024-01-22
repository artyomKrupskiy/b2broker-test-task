export interface IRow {
  id: string;
  int: number;
  float: number;
  color: string;
  child: IRowChild;
}

export interface IRowChild {
  id: string;
  color: string;
}
