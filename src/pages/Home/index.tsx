// import React from 'react';

import "./index.scss";

import {
  FormSaulo,
  FormTitle,
  FormSubtitle,
  FormInputGroup,
  FormInputText,
  FormInputDate,
  FormInputEmail,
  FormInputTel,
  FormInputTextArea,
  FormInputNumber,
  FormSelect,
  FormBtnSubmit,
} from "../../components/FormSaulo";

function Home() {
  return (
    <div id="wrap">
      <FormSaulo>
        <FormTitle title="Cadastro de Lead" />

        {/* dados pessoais */}
        <FormSubtitle subtitle="Dados Pessoais" />
        <FormInputText label="Nome" htmlId="nome" required={true} />
        <FormInputText label="Razão Social" htmlId="razao" />
        <FormInputGroup>
          <FormSelect
            label="Tipo de pessoa"
            htmlId="tipo_pessoa"
            options={[
              { value: "F", name: "Física" },
              { value: "J", name: "Jurídica" },
              { value: "E", name: "Estrangeira" },
            ]}
          />

          <FormSelect
            label="Sexo"
            htmlId="Sexo"
            options={[
              { value: "M", name: "Masculino" },
              { value: "F", name: "Feminino" },
            ]}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormInputText label="CPF" htmlId="cnpj_cpf" />
          <FormInputNumber label="RG" htmlId="rg" />
        </FormInputGroup>
        <FormInputDate label="Nascimento" htmlId="data_nascimento" />
        <FormInputGroup>
          <FormInputTel label="Celular" htmlId="fone_celular" />
          <FormInputTel label="Whatsapp" htmlId="fone_whatsapp" />
        </FormInputGroup>
        <FormInputEmail label="Email" htmlId="email" />

        {/* endereco */}
        <FormSubtitle subtitle="Endereço" />
        <FormInputGroup>
          <FormInputText label="CEP" htmlId="cep" />
          <FormInputText label="Rua" htmlId="endereco" />
        </FormInputGroup>
        <FormInputGroup>
          <FormInputText label="Bairro" htmlId="bairro" />
          <FormSelect
            label="Cidade"
            htmlId="cidade"
            options={[
              { value: "264", name: "Santarém" },
              { value: "170", name: "Belém" },
              { value: "171", name: "Belterra" },
              { value: "157", name: "Alenquer" },
              { value: "5572", name: "Icoaraci" },
            ]}
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormInputText label="Estado" htmlId="estado" />
          <FormInputNumber label="Número" htmlId="numero" />
        </FormInputGroup>
        <FormInputText label="Complemento" htmlId="complemento" />
        <FormInputGroup>
          <FormInputTextArea label="Referência" htmlId="referencia" rows={3} />
        </FormInputGroup>

        {/* plano */}
        <FormSubtitle subtitle="Plano" />

        <FormInputGroup>
          <FormInputText label="Plano(down/up)" htmlId="plano" />
          <FormInputNumber label="Dia Vencimento" htmlId="dia_vencimento" />
        </FormInputGroup>

        {/* vendedor */}
        <FormSubtitle subtitle="Vendedor" />
        {/* passar vendedores via api */}
        <FormSelect label="Vendedor" htmlId="id_responsavel" />

        <FormInputGroup>
          <FormInputTextArea label="Obs" htmlId="obs" rows={5} />
        </FormInputGroup>

        <FormBtnSubmit value="GRAVAR" htmlId="gravar" />
      </FormSaulo>
    </div>
  );
}

export default Home;
