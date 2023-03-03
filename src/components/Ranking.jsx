import styled from "styled-components";

export default function RenderRanking(props) {
  const { position, name, links, visits } = props;

  return (
    <LiContainer>
      {position}. {name} - {links} links - {visits} views{" "}
    </LiContainer>
  );
}

const LiContainer = styled.li`
  background-color: grey;
  width: 100%;
  margin: 5% 0%;
  text-justify: distribute-all-lines;
  text-align: justify;
`;
