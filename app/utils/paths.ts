// Helper utility to resolve local asset paths under GitHub Pages subpaths
export const prefixPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  if (!path) return "";
  
  // If the path already has the base path prepended, return as is
  if (basePath && path.startsWith(basePath)) {
    return path;
  }
  
  return `${basePath}${path}`;
};
