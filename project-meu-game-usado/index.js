import React, { useState } from "react";
import Container from "./styles";
import InputMask from "react-input-mask";
import { Input } from "@rocketseat/unform";
import { SelectCidade, SelectConheceu } from "@components";
import { useSelector } from "react-redux";

export default function FormDados(props) {
  const { inputsForm } = props;
  const pessoais = useSelector(state => state.pessoais);

  const [name, setName] = useState(pessoais.name);
  const [email, setEmail] = useState(pessoais.email);
  const [tel, setTel] = useState(pessoais.tel);
  const [cidade] = useState(pessoais.cidade);
  const [comoConheceu] = useState(pessoais.comoConheceu);

  return (
    <Container>
      <p className="tie">ROUND 1</p>
      <p className="title-2">
        Para fazermos a avaliação dos seus itens, precisamos de algumas
        informações suas! Complete os campos abaixo:
      </p>

      <div className="input-area">
        <label htmlFor="name" className="label">
          Nome completo
        </label>
        <Input
          type="text"
          id="name"
          placeholder="Seu nome aqui"
          className={`input-person ${!inputsForm.name &&
            !name &&
            "input-invalid"}`}
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {!inputsForm.name && !name && (
          <p className="menssage">*Campo Obrigatório</p>
        )}
      </div>

      <div className="input-area">
        <label htmlFor="email" className="label">
          E-mail
        </label>
        <Input
          type="email"
          id="email"
          placeholder="email@exemplo.com"
          className={`input-person ${!inputsForm.email &&
            !email &&
            "input-invalid"}`}
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        {!inputsForm.email && !email && (
          <p className="menssage">*Campo Obrigatório</p>
        )}
      </div>

      <div className="input-area">
        <label htmlFor="tel" className="label">
          Telefone celular
        </label>
        <InputMask
          mask="(99) 99999-9999"
          value={tel}
          onChange={e => setTel(e.target.value)}
        >
          {inputProps => (
            <Input
              id="tel"
              {...inputProps}
              type="tel"
              placeholder="(__) _____-____"
              className={`input-person ${!inputsForm.tel &&
                !tel &&
                "input-invalid"}`}
              name="tel"
            />
          )}
        </InputMask>
        {!inputsForm.tel && !tel && (
          <p className="menssage">*Campo Obrigatório</p>
        )}
      </div>

      <SelectCidade
        invalid={!inputsForm.cidade && true}
        cidadeSelected={cidade}
      />

      <SelectConheceu
        invalid={!inputsForm.comoConheceu && true}
        comoConheceuSelected={comoConheceu}
      />
    </Container>
  );
}
