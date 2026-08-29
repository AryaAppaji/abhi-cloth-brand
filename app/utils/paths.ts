// Helper utility to resolve local asset paths under GitHub Pages subpaths
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'abhi-cloth-brand';

export const basePath = isProd ? `/${repoName}` : '';

export const prefixPath = (path: string): string => {
  if (!path) return "";
  
  // If the path already has the base path prepended, return as is
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  
  return `${basePath}${path}`;
};
