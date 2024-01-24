export interface IRoute {
  key: string;
  value: string;
}
export const routes = {
  home: "/",
  create: "/create",
  edit: "/edit",
  history: "/history",

};


export const routeList: IRoute[] = Object.entries(routes).map(([key, value]) => ({ key, value }));
