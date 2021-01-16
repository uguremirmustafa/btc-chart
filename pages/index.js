/** @format */

import Head from 'next/head';
import Chart from '@components/Chart';
import ChartBTC from '@components/ChartBTC';
import twelvedata from 'twelvedata';
export default function Home({ data, btc }) {
  console.log(btc);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Chart stocks={data} /> */}
      <h2>
        btc price for last {btc.status === 'ok' && btc.values.length}{' '}
        {btc.status === 'ok' && JSON.stringify(btc.meta.interval).substring(2, 6)}
      </h2>
      <ChartBTC btc={btc} />
    </div>
  );
}

export async function getStaticProps() {
  const config = {
    key: process.env.TWELVE_API_KEY,
  };

  const client = twelvedata(config);

  // let params = {
  //   symbols: ['AAPL', 'MSFT', 'GOOG'],
  //   intervals: ['1month'],
  //   outputsize: 30,
  //   methods: ['time_series'],
  //   order: 'ASC',
  // };

  // const data = await client.complexData(params);

  let paramsBTC = {
    symbol: 'BTC/USD',
    interval: '1week',
    exchange: 'Bitfinex',
    outputsize: 200,
    order: 'ASC',
  };
  const btc = await client.timeSeries(paramsBTC);
  return {
    props: {
      // data,
      btc,
    },
  };
}
