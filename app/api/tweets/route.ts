import { NextResponse } from 'next/server'
import { demoTweets, propTweets } from '../../../data/tweets'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const account = searchParams.get('account')
  // Try Neon first, fallback to static data/tweets.ts
  try {
    const { prisma } = await import('../../../lib/prisma')
    const rows = await prisma.proofTweet.findMany({ orderBy: { date: 'asc' } })
    if (rows.length > 0) {
      const map = (r: any) => ({
        id: r.id,
        account: r.account,
        date: r.date,
        signalNo: r.signalNo ?? undefined,
        result: r.result,
        pnl: r.pnl ?? undefined,
        rr: r.rr ?? undefined,
        capitalAfter: r.capitalAfter ?? undefined,
        tweetUrl: r.tweetUrl || '',
        imagePath: r.imagePath,
        caption: r.caption || '',
      })
      if (account === 'demo') return NextResponse.json(rows.filter((r:any)=>r.account==='demo').map(map))
      if (account === 'prop') return NextResponse.json(rows.filter((r:any)=>r.account==='prop').map(map))
      return NextResponse.json({ demo: rows.filter((r:any)=>r.account==='demo').map(map), prop: rows.filter((r:any)=>r.account==='prop').map(map) })
    }
  } catch {}
  if (account === 'demo') return NextResponse.json(demoTweets)
  if (account === 'prop') return NextResponse.json(propTweets)
  return NextResponse.json({ demo: demoTweets, prop: propTweets })
}
