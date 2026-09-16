export default function (path) {
  if (!path) return path;

  if (/^https?:\/\//i.test(path)) return path;

  return `https://minch.dev${path.startsWith('/') ? path : `/${path}`}`;
}
