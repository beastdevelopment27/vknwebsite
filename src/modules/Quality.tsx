import SectionHeader from '../components/SectionHeader.tsx'
import { certifications, processSteps, qualityChecks } from '../data/company.ts'

const qcWorkflow = [
  'Incoming raw material inspection',
  'In-process moisture monitoring',
  'Pearl size grading & sieving',
  'Final batch approval',
  'Packaging verification',
  'Dispatch documentation',
]

export default function Quality() {
  return (
    <div className="w-full px-4 py-10 md:px-8 md:py-14">
      <SectionHeader
        badge="Quality Assurance"
        title="Quality You Can Trust in Every Batch"
        description="Rigorous quality control from raw material to dispatch — built for wholesalers who cannot afford inconsistency."
      />

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 lg:min-h-0">
          <img src="/carousel/sabudana.svg" alt="Quality control" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">Certified Process</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span key={cert} className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs text-white/85">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-emerald-200">Quality Control Workflow</h2>
          <ol className="mt-5 space-y-3">
            {qcWorkflow.map((step, index) => (
              <li key={step} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-400">
                  {index + 1}
                </span>
                <span className="text-sm text-white/80">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-center text-xl font-bold text-white">Testing & Inspection</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualityChecks.map((check) => (
            <article key={check.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-emerald-200">{check.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{check.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <h2 className="text-lg font-bold text-white">Manufacturing Stages Under QC</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-white/70">
          {processSteps.map((step, index) => (
            <span key={step.title} className="flex items-center gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">{step.title}</span>
              {index < processSteps.length - 1 && <span className="text-amber-400/50">&rarr;</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
