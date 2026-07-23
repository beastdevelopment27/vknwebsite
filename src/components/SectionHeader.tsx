type SectionHeaderProps = {
  badge: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-400 sm:px-4 sm:text-xs">
        {badge}
      </span>
      <h2 className="mt-2.5 text-xl font-bold text-white sm:mt-3 sm:text-2xl md:text-3xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-2 text-xs leading-relaxed text-white/65 sm:mt-2.5 sm:text-sm md:text-base ${
            centered ? 'mx-auto max-w-xl' : 'max-w-xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
