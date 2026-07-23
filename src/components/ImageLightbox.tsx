import { useEffect, useCallback } from 'react'
import { X } from 'lucide-react'

type ImageLightboxProps = {
  images: { src: string; alt: string }[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function ImageLightbox({ images, index, onClose, onNavigate }: ImageLightboxProps) {
  const open = index !== null && index >= 0 && index < images.length

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index! + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index! - 1 + images.length) % images.length)
    },
    [open, index, images.length, onClose, onNavigate]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    if (open) document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey, open])

  if (!open) return null

  const current = images[index!]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-[max(0.75rem,env(safe-area-inset-top))] right-[max(0.75rem,env(safe-area-inset-right))] rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <button
        type="button"
        className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20 sm:left-4 sm:h-11 sm:w-11 sm:text-2xl"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index! - 1 + images.length) % images.length)
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <img
        src={current.src}
        alt={current.alt}
        width={800}
        height={500}
        className="max-h-[75dvh] w-auto max-w-[calc(100%-4.5rem)] rounded-lg object-contain sm:max-h-[85vh] sm:max-w-[min(100%,56rem)]"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white hover:bg-white/20 sm:right-4 sm:h-11 sm:w-11 sm:text-2xl"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index! + 1) % images.length)
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <p className="absolute bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 max-w-[90%] -translate-x-1/2 truncate px-2 text-center text-xs text-white/80 sm:text-sm">
        {current.alt} — {index! + 1} / {images.length}
      </p>
    </div>
  )
}
