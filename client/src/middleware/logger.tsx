export default function loggerMiddleware(store: any) {
  return (next:any) => (action: {}) => {
    console.log(action);
    return next(action);
  }
}