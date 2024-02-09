import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import BlocoPersonagem from "../BlocoPersonagem/BlocoPersonagem";
import { Link } from "react-router-dom";

const Personagem = () => {
  const { id } = useParams();

  const QUERY_PERSONAGEM = gql`
        {
            character(id: "${id}"){
                name
                image
                episode{
                    name
                }
            }
        }
    `;

  const { data, loading, error } = useQuery(QUERY_PERSONAGEM);

  const dados = {
    nome: data?.character.name,
    episodios: data?.character?.episode?.map((e) => e.name),
    imagem: data?.character.image,
  };

  console.log(dados);

  if (loading) {
    return <>Carregando</>;
  }

  if (error) {
    return <>Erro</>;
  }

  return (
    <>
      <Link to={"/"}>Voltar à lista de personagems</Link>
      <BlocoPersonagem
        imagem={dados.imagem}
        nome={dados.nome}
        episodios={dados.episodios}
      />
    </>
  );
};

export default Personagem;
