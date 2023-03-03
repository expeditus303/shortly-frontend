import { useEffect, useState } from "react";
import styled from "styled-components";
import trophy from "../../assets/trophy.png";
import getRanking from "../../services/apiRanking";
import RenderRanking from "../../components/Ranking";
import { Link } from "react-router-dom";

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

      <Link to="/sign-up">
        <SignUpMessage><span>Sign up</span>&nbsp;to start shortening your links!</SignUpMessage>
      </Link>
    </>
  );
}

const HomePageRankingContainer = styled.div`
  /* width: 50%; */
  /* background-color: white; */

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.8rem;
  font-weight: 700;

  img {
    width: 2.5rem;
    margin-right: 0.5rem;
  }
`;

const RankingList = styled.ol`
  background-color: green;
  /* width: 80%; */
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

const SignUpMessage = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2rem;
  /* background-color: green; */

  span {
    /* text-decoration: underline; */
    color: darkolivegreen;
  }
`;
