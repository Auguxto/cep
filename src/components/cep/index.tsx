import { CEP } from "../../types/types";

import * as S from "./styles";

interface CepProps {
  cep: CEP;
}

export default function Cep({ cep }: CepProps) {
  return (
    <S.Container>
      <S.Parameter>
        <S.Title>CEP:</S.Title>
        <S.Value>{cep.cep}</S.Value>
      </S.Parameter>
      <S.Parameter>
        <S.Title>Estado:</S.Title>
        <S.Value>{cep.state}</S.Value>
      </S.Parameter>
      <S.Parameter>
        <S.Title>Cidade:</S.Title>
        <S.Value>{cep.city}</S.Value>
      </S.Parameter>
      <S.Parameter>
        <S.Title>Bairro:</S.Title>
        <S.Value>{cep.neighborhood}</S.Value>
      </S.Parameter>
      <S.Parameter>
        <S.Title>Rua:</S.Title>
        <S.Value>{cep.street}</S.Value>
      </S.Parameter>
    </S.Container>
  );
}
