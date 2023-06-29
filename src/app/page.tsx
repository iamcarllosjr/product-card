import Image from 'next/image'
import { LogoDesk, LogoMob } from '../../public'
import { ShoppingCart } from 'lucide-react'

export default function Home() {
  return (
    <main className='bg-slate-300 h-screen flex items-center justify-center'>
      <div className='flex flex-col md:flex-row rounded-lg bg-slate-200'>

        <div className='images'>
          <Image width={250} src={LogoDesk} alt='Imagem de um Perfume desktop' className='h-full rounded-l-lg hidden md:flex' />
          <Image width={290} src={LogoMob} alt='Imagem de um Perfume mobile' className='rounded-t-lg md:hidden'/>
        </div>


        <div className='flex flex-col p-7 gap-3 px-12'>
          <span className='tracking-widest text-xs font-light'>PERFUME</span>
          <h2 className='w-36 md:w-28 text-sm md:text-md tracking-wider font-bold'>Gabrielle Essence Eau De Parfum</h2>
          <p className='w-40 tracking-widest text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ea, vel illo quo nobis qui.</p>
          <div className='flex items-center mt-3 gap-5'>
          <span className='text-xl text-green-600 font-semibold'>$149,99</span>
          <span className='text-xs font-extralight'><s>$169,99</s></span>
          </div>
          <div className=''>
            <button className='flex gap-2 text-xs items-center justify-center w-44 mt-3 bg-green-600 px-6 py-3 rounded-lg text-white hover:scale-105'>
              <ShoppingCart size={20} />
              Add to Cart</button>
          </div>
        </div>

      </div>
    </main>
  )
}
