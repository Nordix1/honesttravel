// This is a custom image loader that works with static exports
export default function customImageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  // For local images, prepend the base path if needed
  if (src.startsWith('/')) {
    // You can modify this to add a base path if needed
    // return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`;
    return src;
  }
  
  // For remote images, return as is
  return src;
}
