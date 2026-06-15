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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
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
        className="max-h-[85vh] max-w-full rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-2xl text-white hover:bg-white/20"
        onClick={(e) => {
          e.stopPropagation()
          onNavigate((index! + 1) % images.length)
        }}
        aria-label="Next image"
      >
        ›
      </button>

      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
        {current.alt} — {index! + 1} / {images.length}
      </p>
    </div>
  )
}
