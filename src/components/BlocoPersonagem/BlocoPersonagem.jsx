import { Link } from "react-router-dom";
import styled from "styled-components";

const BlocoPersonagem = ({
  id,
  nome,
  status,
  imagem,
  episodios,
  linkAtivo,
}) => {
  const conteudo = (
    <Wrapper>
      <Imagem src={imagem} alt={`Foto do personagem ${nome}`} />
      <Nome>{nome}</Nome>
      <Status>{status}</Status>
      {episodios && episodios.length > 0 && (
        <Wrapper>
          {episodios.map((e) => (
            <NomeEpisodio>{e}</NomeEpisodio>
          ))}
        </Wrapper>
      )}
    </Wrapper>
  );

  if (linkAtivo) {
    return <Link to={`/personagem/${id}`}>{conteudo}</Link>;
  }

  return conteudo;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nome = styled.span`
  font-size: 14px;
  color: #313234;
  font-weight: bold;
`;

const Status = styled.span`
  font-size: 14px;
  color: #313234;
`;

const NomeEpisodio = styled.span`
  font-size: 14px;
  color: #313234;
`;

const Imagem = styled.img`
  width: 262px;
  height: 200px;
  border-radius: 16px;
  object-fit: cover;
`;

export default BlocoPersonagem;
