import React from 'react'

const Card = () => {
  return (
    <div className='flex justify-between space-x-14'>

        <div className="card-1 bg-black opacity-90  drop-shadow-md h-[600px] mt-[260px] w-[350px] rounded-2xl p-8 space-y-20">
           
            <div className=''>
            <h1 className='border-l-2 font-[600] border-cyan-500 text-3xl text-white pl-4'>Fast</h1>

            <p className='text-gray-300 text-lg'>Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.</p>

            <div className='space-y-4 mt-8'>
            <h1 className='text-4xl'>3,898</h1>
            <p>TRANSACTION PER SECOND</p>
            </div>
            </div>


{/* card 1/2 */}

            <div className=''>
            <h1 className='border-l-2 font-[600] border-violet-600 text-3xl text-white pl-4'>Scalable</h1>

            <p className='text-gray-300 text-lg'>Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.</p>

            <div className='space-y-4 mt-8'>
            <h1 className='text-4xl'>322,898,1117</h1>
            <p>TOTAL TRANSACTIONS</p>
            </div>
            </div>


        </div>



{/* card 2 */}
        <div>
        <div className="card-1 bg-gray-900 opacity-60 drop-shadow-md h-[300px] mt-[200px] w-[380px] rounded-2xl p-4 justify-start">
            <div className='space-x-4 space-y-4'>
            <h1 className='text-3xl border-l-2 border-yellow-500 pl-4 font-[600]'>Decentralized</h1>

            <p>The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.</p>
            </div>


            <div className='space-y-4 mt-8'>
            <h1 className='text-4xl'>322,898,1117</h1>
            <p>TOTAL TRANSACTIONS</p>
            </div>
        </div>

        {/* card 1/2 */}


        <div className="card-1 bg-black opacity-60 drop-shadow-md h-[300px] mt-[30px] w-[380px] rounded-2xl p-4 justify-start">
            <div className='space-x-4 space-y-4'>
            <h1 className='text-3xl border-l-2 border-green-500 pl-4 font-[600]'>Energy Efficient</h1>

            <p>Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.</p>
            </div>


            <div className='space-y-4 mt-8'>
            <h1 className='text-4xl'>0%</h1>
            <p>NET CARBON IMPACT</p>
            </div>
        </div>
        </div>
       



    </div>
  )
}

export default Card