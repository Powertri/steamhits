import Title from "@/components/Title";
import CardFilme from "@/components/CardFilme";

async function carregarFilmes(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const resposta = await fetch(url)
  const json = await resposta.json()
 // console.log(json)
  return json.results
}

export default async function Home() {

  const filmes = await carregarFilmes()

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
    </nav>
      <Title>em alta </Title>
      <section class="flex flex-wrap'">
       {filmes.map(filme => <CardFilme filme={filme} /> )}
      </section>
     </>
  )
}