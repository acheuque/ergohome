/**
 * Helper function to get the correct image URL based on the environment.
 * It prepends the NEXT_PUBLIC_IMAGE_HOST when available.
 * 
 * @param path The relative image path (e.g., "/images/hero.jpg", "images/hero.jpg")
 * @returns The absolute URL to the image depending on the current environment.
 */
export function getImageUrl(path: string): string {
  // Grab the image host from environment variables.
  // This will be http://localhost:3000 locally, and your live domain in production
  const host = process.env.NEXT_PUBLIC_IMAGE_HOST || '';

  if (!path) return '';

  // If the path is already an absolute URL (starts with http/https), just return it
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Ensure we don't end up with formatting issues with the slash separating host and path
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Clean up trailing slash on host if present
  const cleanHost = host.endsWith('/') ? host.slice(0, -1) : host;

  return `${cleanHost}${cleanPath}`;
}
