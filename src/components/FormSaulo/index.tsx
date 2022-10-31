import React from "react";

import "./FormSaulo.scss";

const OptionsExample = [
  {
    name: "Option 1",
    value: 1,
  },
  {
    name: "Option 2",
    value: 2,
  },
  {
    name: "Option 3",
    value: 3,
  },
];

type FormSauloTypes = {
  children: React.ReactNode;
};

export function FormSaulo({ children }: FormSauloTypes) {
  return <form className="FormSaulo">{children}</form>;
}

export function FormInputGroupMult({ children }: FormSauloTypes) {
  return <div className="input_g_mult">{children}</div>;
}

/*  */
type FormTitleTypes = {
  title?: string;
};
export function FormTitle({ title = "no title" }: FormTitleTypes) {
  return <h1 className="tit">{title}</h1>;
}

/*  */
type FormSubtitleTypes = {
  subtitle?: string;
};
export function FormSubtitle({ subtitle = "no subtitle" }: FormSubtitleTypes) {
  return (
    <>
      <hr className="divisor" />
      <h3 className="sub" id="dados_pessoais">
        {subtitle}
      </h3>
    </>
  );
}

export function FormDivisor() {
  return <hr className="divisor" />;
}

export function FormInputText({
  label = "no label",
  htmlId,
  required = false,
}: {
  label?: string;
  htmlId: string;
  required?: boolean;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <input
        type="text"
        className="data"
        name={htmlId}
        id={htmlId}
        required={required}
      />
    </div>
  );
}

export function FormInputDate({
  label = "no label",
  htmlId,
  required = false,
}: {
  label?: string;
  htmlId: string;
  required?: boolean;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <input
        type="date"
        className="data"
        name={htmlId}
        id={htmlId}
        required={required}
      />
    </div>
  );
}

export function FormInputEmail({
  label = "no label",
  htmlId,
  required = false,
}: {
  label?: string;
  htmlId: string;
  required?: boolean;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <input
        type="email"
        className="data"
        name={htmlId}
        id={htmlId}
        required={required}
      />
    </div>
  );
}

export function FormInputNumber({
  label = "no label",
  htmlId,
  required = false,
}: {
  label?: string;
  htmlId: string;
  required?: boolean;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <input
        type="number"
        className="data"
        name={htmlId}
        id={htmlId}
        required={required}
      />
    </div>
  );
}

export function FormInputTel({
  label = "no label",
  htmlId,
  required = false,
}: {
  label?: string;
  htmlId: string;
  required?: boolean;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <input
        type="tel"
        className="data"
        name={htmlId}
        id={htmlId}
        required={required}
      />
    </div>
  );
}

export function FormBtnSubmit({
  value = "no value",
  htmlId = "no id",
}: {
  value?: string;
  htmlId?: string;
}) {
  return (
    <div className="input_g">
      <label htmlFor="gravar"></label>
      <input type="submit" value={value} id={htmlId} />
    </div>
  );
}

export function FormInputTextArea({
  label = "no label",
  htmlId,
  rows,
}: {
  label?: string;
  htmlId: string;
  rows?: number;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <textarea
        className="data"
        name={htmlId}
        id={htmlId}
        rows={rows}
      ></textarea>
    </div>
  );
}

type optionsType = {
  name: string;
  value: number | string;
};

export function FormSelect({
  label = "no label",
  htmlId,
  options = OptionsExample,
}: {
  label?: string;
  htmlId: string;
  options?: any;
}) {
  return (
    <div className="input_g">
      <label className="info" htmlFor={htmlId}>
        {label}
      </label>
      <select className="data" name={htmlId} id={htmlId}>
        {options.map((option: optionsType, index: number) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
