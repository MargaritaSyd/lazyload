import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const ShoppingPage = lazy(() => import(/*webpackChunkName: "ShoppingPage"*/'../component-patterns/pages/ShoppingPage'));
const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
  {
    to: '/shopping',
    path: '/shopping',
    Component: ShoppingPage,
    name: 'Shopping',
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    Component: Lazy2,
    name: 'Lazy2',
  },
  {
    to: '/lazy3',
    path: '/lazy3',
    Component: Lazy3,
    name: 'Lazy3',
  }
]
