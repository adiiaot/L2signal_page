import { PrismaClient } from '@prisma/client'
import { demoTweets, propTweets } from '../data/tweets'

const prisma = new PrismaClient()

async function main() {
  const all = [...demoTweets, ...propTweets]
  for (const t of all) {
    await prisma.proofTweet.upsert({
      where: { id: t.id },
      update: {
        account: t.account,
        date: t.date,
        signalNo: t.signalNo ?? null,
        result: t.result,
        pnl: t.pnl ?? null,
        rr: t.rr ?? null,
        capitalAfter: t.capitalAfter ?? null,
        tweetUrl: t.tweetUrl || '',
        imagePath: t.imagePath,
        caption: t.caption,
      },
      create: {
        id: t.id,
        account: t.account,
        date: t.date,
        signalNo: t.signalNo ?? null,
        result: t.result,
        pnl: t.pnl ?? null,
        rr: t.rr ?? null,
        capitalAfter: t.capitalAfter ?? null,
        tweetUrl: t.tweetUrl || '',
        imagePath: t.imagePath,
        caption: t.caption,
      },
    })
  }
  console.log(`Seeded ${all.length} tweets (${demoTweets.length} demo, ${propTweets.length} prop)`)
}

main().catch(e=>{console.error(e); process.exit(1)}).finally(()=>prisma.$disconnect())
