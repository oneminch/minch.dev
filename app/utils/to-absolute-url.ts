export default function (path?: string | null) {
  if (!path) return path;

  if (/^https?:\/\//i.test(path)) return path;

  const { origin } = useRequestURL();

  return `${origin}${path.startsWith('/') ? path : `/${path}`}`;
}
