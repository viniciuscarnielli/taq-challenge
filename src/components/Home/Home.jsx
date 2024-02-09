import { gql, useQuery } from "@apollo/client";
import BlocoPersonagem from "../BlocoPersonagem/BlocoPersonagem";
import styled from "styled-components";

const QUERY_BASICA = gql`
  {
    characters(page: 1) {
      results {
        id
        name
        status
        image
      }
    }
  }
`;
const Home = () => {
  const { data, loading, error } = useQuery(QUERY_BASICA);
  const personagens = data?.characters?.results.map((c) => ({
    name: c.name,
    id: c.id,
    status: c.status,
    image: c.image,
  }));

  if (loading) {
    return <div>Carregando</div>;
  }

  if (error) {
    return <div>Erro</div>;
  }

  console.log("info", personagens);

  return (
    <Wrapper>
      {personagens.map((p) => (
        <BlocoPersonagem
          nome={p.name}
          id={p.id}
          status={p.status}
          imagem={p.image}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Home;
