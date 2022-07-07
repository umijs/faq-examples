import { history } from 'umi';

console.log('history in app.ts', history);

export function render(oldRender) {
  console.log('history in app.ts/render:before', history);
  oldRender();
  console.log('history in app.ts/render:after', history);
}

export function rootContainer(container) {
  console.log('history in app.ts/rootContainer', history);
  return container;
}
