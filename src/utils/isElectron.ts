export function isElectron(): boolean {
  let ua = navigator.userAgent;
  return /(Electron)/.test(ua);
}
