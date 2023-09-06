export default function Card({filme}){
    return(
        <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        <img className='rounded' src={filme.poster} alt="" />
        <span className='font-bold text-center line-clamp-1 '>{filme.titulo}</span>
        <div>
          <span>{filme.nota}</span>
        </div>
        <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
          detalhes</a>
      </div>
    )
}