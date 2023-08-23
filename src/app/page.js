export default function Home() {
  return (
   
   <><nav className="flex p-4 bg-purple-600">
      <ul className="flex gap-20">
        <li>
          <a href="">
            <h1>SteamHits</h1>
          </a>
        </li>
        <li>
          <a href="">
            <h1>Home</h1>
          </a>
        </li>
        <li>
          <a href="">
            <h1>Mais vendidos</h1>
          </a>
        </li>
        <li>
          <a href="">
            <h1>Free2Play</h1>
          </a>
        </li>
        <li>
          <a href="">
            <h1>Em breve</h1>
          </a>
        </li>
      </ul>
    </nav><Title>em alta </Title><div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        <img className='rounded' src="https://place-hold.it/150x220/666" alt="" />
        <span className='font-bold text-center line-clamp-1 '>titulo do filme do card</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
          detalhes</a>
      </div></>

  )
}