type ImageLoaderProps = {
  src: string
  width: number
  quality?: number
}

export default function imageLoader({ src, width, quality = 75 }: ImageLoaderProps) {
  return `${src}?w=${width}&q=${quality}`
} 