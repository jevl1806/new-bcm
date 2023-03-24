export interface IAPIRest {
  Get: () => any;
  Post: () => any;
  Delete: () => any;
  Patch?: () => any;
  Put: () => any;
}
