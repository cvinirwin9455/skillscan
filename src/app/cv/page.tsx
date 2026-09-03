import type { Metadata } from 'next'
import PrintButton from './PrintButton'

export const metadata: Metadata = {
  title: 'Curtis Irwin | CV',
  description:
    'Curriculum Vitae of Curtis Irwin — Learning & Development Leader at Amazon. 20+ years designing and scaling learning across EMEA.',
  alternates: { canonical: 'https://curtisirwin.com/cv' },
  robots: { index: true, follow: true },
}

type Role = {
  title: string
  period: string
  location: string
  points: string[]
}

const amazonRoles: Role[] = [
  {
    title: 'Sr. Learning Program Manager, Leadership Development',
    period: '2025 – Present',
    location: 'London, UK',
    points: [
      'Co-own the "Leaders as Facilitator" certification programme, qualifying experienced business leaders to facilitate leadership development at scale.',
      'Enabled the organisation to reach 40,000+ leaders through a scalable facilitation model.',
    ],
  },
  {
    title: 'Manager, Learning Product Design',
    period: '2023 – 2025',
    location: 'London, UK',
    points: [
      'Led a team of 6 Product Managers and Technologists building the technical learning infrastructure for EU Transportation Services.',
      'Applied product-management thinking to people development, treating learning as a product discipline.',
    ],
  },
  {
    title: 'Manager, Learning Experience Design',
    period: '2022 – 2023',
    location: 'London, UK',
    points: [
      'Scaled and led a team of 20 designers and 4 managers across EU & UK Sort Centers.',
      'Reached 10,000 employees with training that closed skill gaps through diverse modalities and emerging technology.',
    ],
  },
  {
    title: 'Sr. Learning Experience Designer',
    period: '2019 – 2022',
    location: 'London, UK',
    points: [
      'Designed end-to-end learning for Amazon 4-Star physical stores and EU Vendor Managers.',
      'Built mobile-first training apps, evaluation frameworks, and performance-support tools that improved measurable outcomes.',
    ],
  },
  {
    title: 'Global Payroll Training Program Manager',
    period: '2016 – 2019',
    location: 'Bratislava, Slovakia',
    points: [
      'Built instructor-led and eLearning programmes for global payroll compliance.',
      'Created the "Peculiar Partnership" programme connecting vendors to Amazon\u2019s culture.',
    ],
  },
]

const attRoles: Role[] = [
  {
    title: 'Senior Project Manager',
    period: '2012 – 2015',
    location: 'Bratislava, Slovakia',
    points: [
      'Managed an India-based team supporting enterprise customers.',
      'Designed global learning programmes on access-path diversity for sales teams and enhanced processes with outsourced vendors.',
    ],
  },
  {
    title: 'Senior Project Manager, Communications & Training',
    period: '2011 – 2012',
    location: 'Bratislava, Slovakia',
    points: [
      'Designed and deployed operational-process and professional-skills training.',
      'Built training roadmaps across job families and implemented social-networking tools for global collaboration.',
    ],
  },
  {
    title: 'Operations Manager, Project Management',
    period: '2009 – 2011',
    location: 'Bratislava, Slovakia',
    points: [
      'Established go-to-market service-delivery operations from scratch.',
      'Hired and developed 15 Project Managers for a new business model; led training on Future Methods of Operations.',
    ],
  },
  {
    title: 'Transition Project Manager',
    period: '2007 – 2008',
    location: 'Bratislava, Slovakia',
    points: [
      'Led a business-unit transition and expansion to the Kosice Center.',
      'Implemented engineering and leadership learning programmes while managing regulatory compliance.',
    ],
  },
  {
    title: 'Trainer & Leadership Development Program Manager',
    period: '2005 – 2007',
    location: 'Bratislava, Slovakia',
    points: [
      'Designed training programmes for managers and engineers.',
      'Developed leadership programmes for first- and second-level managers and led the high-visibility Management Assessment Program.',
    ],
  },
]

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-section">
      <h2 className="cv-section-title">{title}</h2>
      {children}
    </section>
  )
}

function ExperienceGroup({
  company,
  period,
  summary,
  roles,
}: {
  company: string
  period: string
  summary: string
  roles: Role[]
}) {
  return (
    <div className="cv-company">
      <div className="cv-company-head">
        <h3 className="cv-company-name">{company}</h3>
        <span className="cv-company-period">{period}</span>
      </div>
      <p className="cv-company-summary">{summary}</p>
      {roles.map((role) => (
        <div key={role.title + role.period} className="cv-role">
          <div className="cv-role-head">
            <span className="cv-role-title">{role.title}</span>
            <span className="cv-role-period">{role.period}</span>
          </div>
          <p className="cv-role-loc">{role.location}</p>
          <ul className="cv-role-points">
            {role.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default function CVPage() {
  return (
    <div className="cv-root">
      <PrintButton />

      <main className="cv-page">
        {/* Header */}
        <header className="cv-header">
          <h1 className="cv-name">Curtis Irwin</h1>
          <p className="cv-headline">Learning &amp; Development Leader</p>
          <div className="cv-contact">
            <span>Greater London Area, UK</span>
            <span>curtisirwin@me.com</span>
            <a href="https://curtisirwin.com">curtisirwin.com</a>
          </div>
        </header>

        {/* Summary */}
        <Section title="Professional Summary">
          <p className="cv-summary">
            Learning &amp; Development leader with 20+ years designing and scaling learning across
            EMEA. Currently building the future of leadership development at Amazon, where I turn
            skill gaps into career breakthroughs through technology, product thinking, and strong
            facilitation. I have led teams of 50+, trained 1,100+ leaders directly, delivered in 9
            countries, and reached 40,000+ leaders through scalable programmes — consistently
            earning high satisfaction (97%) and a combined NPS of +74.
          </p>
        </Section>

        {/* Key Achievements */}
        <Section title="Key Achievements">
          <ul className="cv-stats">
            <li><strong>1,100+</strong> leaders trained directly</li>
            <li><strong>40,000+</strong> leaders reached through programmes</li>
            <li><strong>50+</strong> team members led</li>
            <li><strong>9</strong> countries delivered in</li>
            <li><strong>80+</strong> workshops delivered</li>
            <li><strong>97%</strong> satisfaction rate</li>
            <li><strong>+74</strong> combined NPS</li>
            <li><strong>20+</strong> years in L&amp;D</li>
          </ul>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <ExperienceGroup
            company="Amazon"
            period="2016 – Present"
            summary="From payroll training in Bratislava to scaling leadership development for 40K+ leaders across EMEA — building teams of 30+, reaching 10,000 employees, and turning L&D into a product discipline."
            roles={amazonRoles}
          />
          <ExperienceGroup
            company="AT&T"
            period="2005 – 2015"
            summary="Built operations from scratch, led global teams across India and Europe, and designed leadership programmes that shaped hundreds of managers."
            roles={attRoles}
          />
          <ExperienceGroup
            company="Independent"
            period="2003 – 2005"
            summary="Delivered professional-communications training independently in Bratislava — the entrepreneurial start to a global L&D career."
            roles={[
              {
                title: 'Independent Trainer — Professional Communications',
                period: '2003 – 2005',
                location: 'Bratislava, Slovakia',
                points: [
                  'Delivered professional-communications training to individuals and organisations before joining AT&T.',
                ],
              },
            ]}
          />
        </Section>

        {/* Core Skills */}
        <Section title="Core Skills">
          <ul className="cv-skills">
            <li>Learning Design</li>
            <li>Team Leadership</li>
            <li>Change Management</li>
            <li>EdTech &amp; AI</li>
            <li>Performance Strategy</li>
            <li>Leadership Facilitation</li>
            <li>Instructional Design</li>
            <li>Learning Product Management</li>
            <li>Program Management</li>
          </ul>
        </Section>

        {/* Certifications */}
        <Section title="Certifications">
          <ul className="cv-certs">
            <li>Core Strengths SDI Facilitator</li>
            <li>Liz Wiseman Multipliers &amp; Impact Players Facilitator</li>
            <li>Situational Leadership II Facilitator</li>
            <li>FranklinCovey Leading at the Speed of Trust</li>
            <li>CrossFit Level 1</li>
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="cv-role">
            <div className="cv-role-head">
              <span className="cv-role-title">B.S. Communications</span>
            </div>
            <p className="cv-role-loc">Drury University — Springfield, MO, USA</p>
          </div>
        </Section>

        <footer className="cv-footer">
          Curtis Irwin · curtisirwin.com · curtisirwin@me.com
        </footer>
      </main>
    </div>
  )
}
