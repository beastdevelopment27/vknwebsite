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
      <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
        {badge}
      </span>
      <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">{title}</h2>
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed text-white/70 md:text-base ${
            centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
