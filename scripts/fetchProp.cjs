const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

const servicePath = 'C:\\My Workspace\\Aotsecure-V1\\projects\\AI Systems\\L2 Signals\\l2signal_web\\l2-signals-firebase-adminsdk.json';
const serviceAccount = require(servicePath);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}
const db = admin.firestore();

async function main() {
  const tradesSnap = await db.collection('trades').orderBy('timestamp', 'desc').limit(100).get();
  let trades = tradesSnap.docs.map(d => ({ id: d.id, ...d.data(), timestamp: d.data().timestamp?.toDate ? d.data().timestamp.toDate().toISOString() : d.data().timestamp }));
  trades = trades.filter(t => (t.accountId || 'demo') === 'prop');
  console.log(`Found ${trades.length} prop trades`);
  trades.forEach(t => {
    console.log(JSON.stringify({
      id: t.id,
      tradeId: t.tradeId,
      timestamp: t.timestamp,
      entryPrice: t.entryPrice,
      exitPrice: t.exitPrice,
      entryPrice2: t.entryPrice2,
      exitPrice2: t.exitPrice2,
      stopLoss: t.stopLoss,
      takeProfit: t.takeProfit,
      riskRewardRatio: t.riskRewardRatio,
      pnl: t.pnl,
      result: t.result,
      signalId: t.signalId,
      direction: t.direction,
      trend: t.trend,
      entrySize: t.entrySize,
    }, null, 2));
  });

  // also fetch signals for those signalIds
  const signalIds = [...new Set(trades.map(t => t.signalId).filter(Boolean))];
  console.log(`\nSignalIds: ${signalIds.join(', ')}`);
  for (const sid of signalIds) {
    try {
      const doc = await db.collection('signals').doc(sid).get();
      if (doc.exists) {
        const s = doc.data();
        console.log(`\nSignal ${sid}:`, JSON.stringify({
          id: doc.id,
          timestamp: s.timestamp?.toDate ? s.timestamp.toDate().toISOString() : s.timestamp,
          trend: s.trend,
          signalType: s.signalType,
          confidence: s.confidence,
          entry: s.entry,
          stopLoss: s.stopLoss,
          takeProfit: s.takeProfit,
          tp1: s.tp1,
          tp2: s.tp2,
          entries: s.entries,
          orderType: s.orderType,
          status: s.status,
          outcome: s.outcome,
          signalOutcome: s.signalOutcome,
          realizedR: s.realizedR,
        }, null, 2));
      } else {
        console.log(`Signal ${sid} not found`);
      }
    } catch (e) { console.error(e); }
  }
}

main().catch(console.error);
