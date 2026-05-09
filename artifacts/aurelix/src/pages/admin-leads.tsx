import { useState, useEffect, useMemo } from 'react'
import { Link } from 'wouter'
import { ArrowLeft, RefreshCw, Download, Lock, TrendingUp, Users, BarChart2 } from 'lucide-react'

type Lead = {
  id: number
  email: string
  source: string
  createdAt: string
}

const SOURCE_LABELS: Record<string, string> = {
  contact: 'Main Waitlist',
  afromuse: 'AfroMuse',
  gtpro: 'GTPro',
}

const SOURCE_COLORS: Record<string, string> = {
  contact: 'text-gold bg-gold/10 border-gold/20',
  afromuse: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  gtpro: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
}

const SOURCE_BAR_COLORS: Record<string, string> = {
  contact: '#D4AF37',
  afromuse: '#F59E0B',
  gtpro: '#34D399',
}

function TokenGate({ onUnlock }: { onUnlock: (token: string) => void }) {
  const [token, setToken] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!token.trim()) { setError(true); return }
    onUnlock(token.trim())
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-sm p-8 glass-card-gold rounded-lg text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-gold/10 text-gold flex items-center justify-center">
          <Lock size={24} />
        </div>
        <h1 className="font-display text-xl tracking-wider text-gold-gradient mb-2">Admin Access</h1>
        <p className="text-sm text-muted-foreground mb-8">Enter your admin token to view leads.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={token}
            onChange={(e) => { setToken(e.target.value); setError(false) }}
            placeholder="Admin token"
            autoFocus
            className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors"
          />
          {error && <p className="text-xs text-red-400">Please enter a token.</p>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gold text-background font-medium rounded-sm hover:bg-gold-light transition-all"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  )
}

// ── Mini sparkline (SVG) ─────────────────────────────────────────────────────
function Sparkline({ data, color }: { data: number[]; color: string }) {
  if (data.length < 2) return null
  const max = Math.max(...data, 1)
  const w = 120, h = 36, pad = 2
  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2)
    const y = h - pad - (v / max) * (h - pad * 2)
    return `${x},${y}`
  }).join(' ')
  return (
    <svg width={w} height={h} className="opacity-80">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

// ── Growth chart ─────────────────────────────────────────────────────────────
function GrowthChart({ leads }: { leads: Lead[] }) {
  const daily = useMemo(() => {
    const map: Record<string, number> = {}
    leads.forEach(l => {
      const day = new Date(l.createdAt).toISOString().slice(0, 10)
      map[day] = (map[day] ?? 0) + 1
    })
    const sorted = Object.entries(map).sort(([a], [b]) => a.localeCompare(b))
    // cumulative
    let cum = 0
    return sorted.map(([date, count]) => {
      cum += count
      return { date, count, cum }
    })
  }, [leads])

  const bySource = useMemo(() => {
    const map: Record<string, number> = {}
    leads.forEach(l => { map[l.source] = (map[l.source] ?? 0) + 1 })
    return map
  }, [leads])

  const total = leads.length
  const maxCum = Math.max(...daily.map(d => d.cum), 1)
  const chartH = 120
  const chartW = 600

  if (daily.length === 0) return null

  // SVG line points for cumulative growth
  const linePoints = daily.map((d, i) => {
    const x = (i / Math.max(daily.length - 1, 1)) * chartW
    const y = chartH - (d.cum / maxCum) * chartH
    return `${x},${y}`
  }).join(' ')

  return (
    <div className="mb-10 space-y-6">
      {/* Cumulative growth */}
      <div className="p-6 border border-gold/15 rounded-lg bg-secondary/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground tracking-widest mb-1">TOTAL GROWTH</p>
            <p className="font-display text-2xl text-gold">{total} signups</p>
          </div>
          <TrendingUp size={20} className="text-gold opacity-60" />
        </div>
        <div className="overflow-x-auto">
          <svg width={chartW} height={chartH + 24} className="w-full" viewBox={`0 0 ${chartW} ${chartH + 24}`} preserveAspectRatio="none">
            {/* Grid lines */}
            {[0.25, 0.5, 0.75, 1].map(t => (
              <line key={t} x1={0} y1={chartH * (1 - t)} x2={chartW} y2={chartH * (1 - t)}
                stroke="rgba(212,175,55,0.08)" strokeWidth="1" strokeDasharray="4 4" />
            ))}
            {/* Area fill */}
            <defs>
              <linearGradient id="gold-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <polygon
              points={`0,${chartH} ${linePoints} ${chartW},${chartH}`}
              fill="url(#gold-grad)"
            />
            {/* Line */}
            <polyline points={linePoints} fill="none" stroke="#D4AF37" strokeWidth="2"
              strokeLinejoin="round" strokeLinecap="round" />
            {/* Dots */}
            {daily.map((d, i) => {
              const x = (i / Math.max(daily.length - 1, 1)) * chartW
              const y = chartH - (d.cum / maxCum) * chartH
              return <circle key={i} cx={x} cy={y} r="3" fill="#D4AF37" />
            })}
            {/* X-axis labels */}
            {daily.filter((_, i) => daily.length <= 7 || i % Math.ceil(daily.length / 7) === 0).map((d, i, arr) => {
              const idx = daily.indexOf(d)
              const x = (idx / Math.max(daily.length - 1, 1)) * chartW
              return (
                <text key={i} x={x} y={chartH + 18} textAnchor="middle"
                  fontSize="9" fill="rgba(255,255,255,0.3)" fontFamily="monospace">
                  {d.date.slice(5)}
                </text>
              )
            })}
          </svg>
        </div>
      </div>

      {/* Source breakdown */}
      <div className="grid grid-cols-3 gap-4">
        {(['contact', 'afromuse', 'gtpro'] as const).map(source => {
          const count = bySource[source] ?? 0
          const pct = total > 0 ? Math.round((count / total) * 100) : 0
          const sparkData = daily.map(d => {
            // per-day count for this source
            return leads.filter(l =>
              l.source === source &&
              new Date(l.createdAt).toISOString().slice(0, 10) === d.date
            ).length
          })
          return (
            <div key={source} className="p-5 border border-gold/10 rounded-lg bg-secondary/10">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs border px-2.5 py-0.5 rounded-full ${SOURCE_COLORS[source]}`}>
                  {SOURCE_LABELS[source].toUpperCase()}
                </span>
                <Users size={13} className="text-muted-foreground" />
              </div>
              <p className="font-display text-3xl text-foreground mb-1">{count}</p>
              <p className="text-xs text-muted-foreground mb-3">{pct}% of total</p>
              {/* Bar */}
              <div className="h-1 bg-secondary rounded-full overflow-hidden mb-3">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, backgroundColor: SOURCE_BAR_COLORS[source] }}
                />
              </div>
              <Sparkline data={sparkData} color={SOURCE_BAR_COLORS[source]} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function AdminLeadsPage() {
  const [adminToken, setAdminToken] = useState<string | null>(() =>
    sessionStorage.getItem('admin_token')
  )
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<'chart' | 'table'>('chart')

  const fetchLeads = async (token: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/leads', {
        headers: { 'x-admin-token': token },
      })
      if (res.status === 401) {
        setAdminToken(null)
        sessionStorage.removeItem('admin_token')
        setError('Invalid token. Please try again.')
        return
      }
      if (!res.ok) throw new Error('Failed to load')
      const data = await res.json()
      setLeads(data)
    } catch {
      setError('Failed to load leads. Make sure the API server is running.')
    } finally {
      setLoading(false)
    }
  }

  const handleUnlock = (token: string) => {
    sessionStorage.setItem('admin_token', token)
    setAdminToken(token)
  }

  useEffect(() => {
    if (adminToken) fetchLeads(adminToken)
  }, [adminToken])

  if (!adminToken) return <TokenGate onUnlock={handleUnlock} />

  const downloadCsv = () => {
    const header = 'ID,Email,Source,Submitted At\n'
    const rows = leads.map(l =>
      `${l.id},"${l.email}","${SOURCE_LABELS[l.source] ?? l.source}","${new Date(l.createdAt).toLocaleString()}"`
    ).join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `aurelix-leads-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-gold/10 bg-background/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors text-sm">
              <ArrowLeft size={16} /> Back
            </Link>
            <h1 className="font-display text-xl tracking-wider text-gold-gradient">Leads Admin</h1>
          </div>
          <div className="flex items-center gap-3">
            {/* View toggle */}
            <div className="flex border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setView('chart')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition-all ${view === 'chart' ? 'bg-gold/10 text-gold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <BarChart2 size={12} /> Charts
              </button>
              <button
                onClick={() => setView('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition-all ${view === 'table' ? 'bg-gold/10 text-gold' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Users size={12} /> Table
              </button>
            </div>
            <button
              onClick={() => fetchLeads(adminToken)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground border border-border rounded-sm hover:border-gold/30 transition-all"
            >
              <RefreshCw size={14} /> Refresh
            </button>
            <button
              onClick={downloadCsv}
              disabled={leads.length === 0}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gold/10 text-gold border border-gold/20 rounded-sm hover:bg-gold/20 disabled:opacity-40 transition-all"
            >
              <Download size={14} /> Export CSV
            </button>
            <button
              onClick={() => { sessionStorage.removeItem('admin_token'); setAdminToken(null) }}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-red-400 border border-border rounded-sm transition-all"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        {loading && <p className="text-center text-muted-foreground py-20">Loading leads...</p>}
        {error && <p className="text-center text-red-400 py-20">{error}</p>}

        {!loading && !error && leads.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No leads yet. Share the site and submissions will appear here.</p>
        )}

        {!loading && !error && leads.length > 0 && (
          <>
            {view === 'chart' && <GrowthChart leads={leads} />}

            {view === 'table' && (
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-secondary/30">
                      <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">#</th>
                      <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">Email</th>
                      <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">Source</th>
                      <th className="px-4 py-3 text-left text-xs text-muted-foreground tracking-wider font-medium">Submitted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead, i) => (
                      <tr
                        key={lead.id}
                        className={`border-b border-border/50 hover:bg-secondary/20 transition-colors ${i % 2 === 0 ? '' : 'bg-secondary/10'}`}
                      >
                        <td className="px-4 py-3 text-muted-foreground">{lead.id}</td>
                        <td className="px-4 py-3 text-foreground">{lead.email}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs border px-2 py-0.5 rounded-full ${SOURCE_COLORS[lead.source] ?? 'text-foreground border-border'}`}>
                            {SOURCE_LABELS[lead.source] ?? lead.source}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(lead.createdAt).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
