import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import * as Icon from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Cep from "../components/cep";

import { CEP } from "../types/types";

import * as S from "./styles";

const searchCepSchema = z.object({
  cep: z.string().regex(/^\d+$/, "CEP inválido").transform(Number),
});

type SearchCepData = z.infer<typeof searchCepSchema>;

export default function App() {
  const [notfound, setNotfound] = useState(false);
  const [cep, setCep] = useState<CEP>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchCepData>({
    resolver: zodResolver(searchCepSchema),
  });

  const handleSearchCep = async (data: SearchCepData) => {
    setNotfound(false);
    setCep(undefined);

    try {
      const response = await axios.get(
        `https://brasilapi.com.br/api/cep/v2/${data.cep}`
      );

      setCep(response.data);
    } catch (error: any) {
      setNotfound(true);
      setCep(undefined);
    }
  };

  return (
    <S.Container onSubmit={handleSubmit(handleSearchCep)}>
      <S.InputWrapper>
        <S.Input {...register("cep")} type="number" placeholder="CEP" />
        <Icon.Search size={24} color="#66719B" />
      </S.InputWrapper>
      <S.Errors>
        {errors.cep && <S.Error>{errors.cep.message}</S.Error>}
        {notfound && <S.Error>CEP não encontrado</S.Error>}
      </S.Errors>
      {cep && <Cep cep={cep} />}
    </S.Container>
  );
}
