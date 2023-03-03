import { useEffect, useState } from "react";
import styled from "styled-components";
import trophy from "../../assets/trophy.png";
import getRanking from "../../services/apiRanking";
import RenderRanking from "../../components/Ranking";

export default function HomePageUnlloged() {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    async function loadRanking() {
      try {
        const teste = await getRanking();
        setRanking(teste.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadRanking();
  }, []);
  console.log("aqui jow");
  console.log(ranking);

  // {id: 1, name: 'Ricardo', linksCount: '1', visitCount: '10'}

  return (
    <>
      <HomePageRankingContainer>
        <img src={trophy} alt="" />
        <h2>Ranking</h2>
      </HomePageRankingContainer>

      <RankingList>
        {ranking.map((r, i) => (
          <RenderRanking
            key={r.id}
            position={i + 1}
            name={r.name}
            links={r.linksCount}
            visits={r.visitCount}
          />
        ))}
      </RankingList>
    </>
  );
}

const HomePageRankingContainer = styled.div`
  width: 50%;
  background-color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 700;

  img {
    width: 2.5rem;
  }
`;

const RankingList = styled.ol`
  background-color: green;
  width: 80%;
  margin: 5%;

  text-justify: distribute-all-lines;
  text-align: justify;
`;
