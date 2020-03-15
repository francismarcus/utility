export const curry = (fn: any, arr: any[] = [], length = fn.length) => (
  ...args: any
) => (a => (a.length === length ? fn(...a) : curry(fn, a)))([...arr, ...args]);


export const map = (cb: () => any) => (array: any[]) => {
  return array.map(cb);
};

export const flatMap = (cb: () => any) => (array: any[]) => {
  return array.flatMap(cb);
};

export const filter = (cb: () => any) => (array: any[]) => {
  return array.filter(cb);
};

export const reduce = (cb: () => any) => (array: any[]) => {
  return array.reduce(cb);
};

export const compose = <F extends any[]>(...fns: F) => (x: any) => {
  return fns.reduceRight((g, f) => f(g), x);
};

export const pipe = <F extends any[]>(...fns: F) => (x: any) => {
  return fns.reduce((g, f) => f(g), x);
};

export const prop = curry((path: string, obj: any) => {
  return obj[path];
});

export const propEq = curry((value: string | number | boolean, path: string, obj: any) => {
  return prop(path)(obj) === value;
})