'use client'

import { useState } from 'react'

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function CompanyAccordion({
  title,
  years,
  summary,
  accentColor,
  borderColor,
  bgFrom,
  bgTo,
  logo,
  badge,
  children,
}: {
  title: React.ReactNode
  years: string
  summary: string
  accentColor: string
  borderColor: string
  bgFrom: string
  bgTo: string
  logo?: React.ReactNode
  badge?: React.ReactNode
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`rounded-2xl border ${borderColor} overflow-hidden transition-colors duration-300 ${open ? '' : 'hover:border-opacity-60'}`}>
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-left p-6 sm:p-8 bg-gradient-to-r ${bgFrom} ${bgTo} flex items-center justify-between gap-4 cursor-pointer`}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            {logo}
            <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
            {badge}
          </div>
          <p className={`text-sm font-medium ${accentColor} mb-2`}>{years}</p>
          <p className="text-slate-400 leading-relaxed">{summary}</p>
        </div>
        <div className="flex-shrink-0 ml-2">
          <ChevronIcon open={open} />
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6 sm:p-8 pt-0 sm:pt-0 space-y-6">
          <div className="h-px bg-slate-700/50 mt-0" />
          {children}
        </div>
      </div>
    </div>
  )
}

function RoleCard({
  title,
  years,
  location,
  description,
  accent = 'text-amber-400/70',
}: {
  title: string
  years: string
  location: string
  description: string
  accent?: string
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-slate-800/30 border border-slate-700/30">
      <div className="sm:w-36 flex-shrink-0">
        <p className="text-slate-500 text-sm font-medium">{years}</p>
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
        <p className={`text-sm ${accent} mb-2`}>{location}</p>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function JourneySection() {
  return (
    <section className="py-20 border-t border-slate-700/50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-center text-amber-400 font-medium tracking-wider uppercase text-sm mb-4">The Journey</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          From trainer to <span className="text-amber-400">product leader</span>.
        </h2>

        <div className="space-y-6">
          {/* Amazon */}
          <CompanyAccordion
            title={<>Amazon</>}
            years="2016 - Present · 8+ years"
            summary="From payroll training in Bratislava to leading product design for EU Transportation. Scaled teams of 30+, reached 10,000 employees, and turned L&D into a product discipline."
            accentColor="text-amber-400"
            borderColor="border-amber-400/20"
            bgFrom="from-amber-400/5"
            bgTo="to-transparent"
            badge={
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-900 text-xs font-bold">
                NOW
              </span>
            }
            logo={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="h-5 brightness-0 invert opacity-80"
              />
            }
          >
            <RoleCard
              title="Manager, Learning Product Design"
              years="2023 - Present"
              location="London"
              description="Leading 6 Product Managers and Technologists building the technical learning infrastructure for EU Transportation Services. Where product thinking meets people development."
              accent="text-amber-400/70"
            />
            <RoleCard
              title="Manager, Learning Experience Design"
              years="2022 - 2023"
              location="London"
              description="Scaled a team of 20 designers and 4 managers across EU & UK Sort Centers. Reached 10,000 employees with training that bridged skill gaps through diverse modalities and cutting-edge tech."
              accent="text-amber-400/70"
            />
            <RoleCard
              title="Sr. Learning Experience Designer"
              years="2019 - 2022"
              location="London"
              description="Designed end-to-end learning for Amazon 4-Star physical stores and EU Vendor Managers. Built mobile-first training apps, evaluation frameworks, and performance support that moved the needle."
              accent="text-amber-400/70"
            />
            <RoleCard
              title="Global Payroll Training Program Manager"
              years="2016 - 2019"
              location="Bratislava"
              description='Built instructor-led and eLearning programs for global payroll compliance. Created the "Peculiar Partnership" program connecting vendors to Amazon&apos;s unique culture. The start of the Amazon chapter.'
              accent="text-amber-400/70"
            />
          </CompanyAccordion>

          {/* AT&T */}
          <CompanyAccordion
            title={<>AT&amp;T</>}
            years="2005 - 2015 · 9 years"
            summary="Built operations from scratch, led global teams across India and Europe, and designed leadership programs that shaped hundreds of managers. The foundation of everything."
            accentColor="text-blue-400"
            borderColor="border-blue-400/20"
            bgFrom="from-blue-400/5"
            bgTo="to-transparent"
            logo={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/31/AT%26T_logo_2016.svg"
                alt="AT&T"
                className="h-5 brightness-0 invert opacity-70"
              />
            }
          >
            <RoleCard
              title="Senior Project Manager"
              years="2012 - 2015"
              location="Bratislava"
              description="Managed India-based team supporting enterprise customers. Designed global learning programs on access path diversity for sales teams and enhanced processes with outsourced vendors."
              accent="text-blue-400/70"
            />
            <RoleCard
              title="Senior Project Manager, Communications & Training"
              years="2011 - 2012"
              location="Bratislava"
              description="Designed and deployed operational process and professional skills training. Built training roadmaps across job families and implemented social networking tools for global collaboration."
              accent="text-blue-400/70"
            />
            <RoleCard
              title="Operations Manager, Project Management"
              years="2009 - 2011"
              location="Bratislava"
              description="Established go-to-market service delivery operations from scratch. Hired and developed 15 Project Managers for a new business model. Led training on Future Methods of Operations."
              accent="text-blue-400/70"
            />
            <RoleCard
              title="Transition Project Manager"
              years="2007 - 2008"
              location="Bratislava"
              description="Led business unit transition and expansion to Kosice Center. Implemented diverse learning programs in engineering and leadership while managing regulatory compliance."
              accent="text-blue-400/70"
            />
            <RoleCard
              title="Trainer & Leadership Development PM"
              years="2005 - 2007"
              location="Bratislava"
              description="Designed training programs for managers and engineers. Developed leadership programs for first and second-level managers and led the high-visibility Management Assessment Program. Where the L&D journey began."
              accent="text-blue-400/70"
            />
          </CompanyAccordion>

          {/* Independent */}
          <CompanyAccordion
            title={<>Independent</>}
            years="2003 - 2005 · 2 years"
            summary="The entrepreneurial beginning. Delivering professional communications training solo in Bratislava before the corporate world came calling."
            accentColor="text-emerald-400"
            borderColor="border-emerald-400/20"
            bgFrom="from-emerald-400/5"
            bgTo="to-transparent"
          >
            <RoleCard
              title="Independent Trainer"
              years="2003 - 2005"
              location="Professional Communications · Bratislava"
              description="Delivered professional communications training independently in Bratislava before joining AT&T. The entrepreneurial start to a global L&D career."
              accent="text-emerald-400/70"
            />
          </CompanyAccordion>
        </div>
      </div>
    </section>
  )
}
