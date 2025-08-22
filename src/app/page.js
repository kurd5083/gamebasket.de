
import Offer from "@componentsOffer/Offer";
import Filtred from "@componentsFiltred/Filtred";
import { games } from "@mocks/games";
import Cards from "@componentsCards/Cards";

export default function Home() {
  return (
    <>
      <Offer/>
      <Filtred/>
      <Cards games={games}/>
    </>
  );
}
