const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const BASE_PATH = configuredBasePath.endsWith("/")
  ? configuredBasePath.slice(0, -1)
  : configuredBasePath;

export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  return `${BASE_PATH}${path}`;
}
