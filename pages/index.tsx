import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div data-theme="bumblebee">
      <Head>
        <title>test</title>
      </Head>
      <div className='w-screen h-screen flex justify-center items-center bg-base-100'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
