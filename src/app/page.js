import Title from "@/components/Title";
import Card from "@/components/Card";

export default function Home() {
  const filmes = [
    {
      titulo: "Megatubarão 2",
      nota: 6.2,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
    },
    {
      titulo: "Barbie",
      nota: 7.5,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ]
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
       {filmes.map(filme => <Card filme={filme} /> )}
      </section>
     </>
  )
}