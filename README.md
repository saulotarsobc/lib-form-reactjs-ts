# lib-form-reactjs-ts

![banner](./src/images/banner.png)

## Form Elements

### FormSaulo

```jsx
export function FormSaulo({ children }: { children: React.ReactNode }) {
  return <form className="FormSaulo">{children}</form>;
}
```

```jsx
<FormSaulo>
    /* html */
</FormSaulo>
```

<hr>

### FormTitle

```jsx
export function FormTitle({ title = "no title" }: { title?: string }) {
  return <h1 className="tit">{title}</h1>;
}
```

```jsx
<FormTitle title="Título do Formulário" />
```

<hr>

### FormSubtitle

```jsx
export function FormSubtitle({
  subtitle = "no subtitle",
}: {
  subtitle?: string;
}) {
  return (
    <>
      <hr className="divisor" />
      <h3 className="sub" id="dados_pessoais">
        {subtitle}
      </h3>
    </>
  );
}
```

```jsx
<FormSubtitle subtitle="Subtítulo do formulário" />
```

<hr>

### FormInputGroup

```jsx
export function FormInputGroup({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="input_g_mult">{children}</div>;
}
```

```jsx
<FormInputGroup>
    /* html */
</FormInputGroup>
```

<hr>

### FormInputText

```jsx
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
```

```jsx
<FormInputText label="Razão Social" htmlId="razao" />
```

<hr>

### FormInputDate

```jsx
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
```

```jsx
<FormInputDate label="Nascimento" htmlId="data_nascimento" />
```

<hr>

### FormInputEmail

```jsx
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
```

```jsx
<FormInputEmail label="Email" htmlId="email" />
```

<hr>

### FormInputTel

```jsx
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
```

```jsx
<FormInputTel label="Whatsapp" htmlId="fone_whatsapp" />
```

<hr>

### FormInputTextArea

```jsx
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
```

```jsx
<FormInputTextArea label="Referência" htmlId="referencia" rows={3} />
```

<hr>

### FormInputNumber

```jsx
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
```

```jsx
<FormInputNumber label="Número" htmlId="numero" />
```

<hr>

### FormSelect

```jsx
export function FormSelect({
  label = "no label",
  htmlId,
  options = OptionsExample,
}: {
  label?: string;
  htmlId: string;
  options?: optionsType[];
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
```

```jsx
<FormSelect
    label="Tipo de pessoa"
    htmlId="tipo_pessoa"
    options={[
        { value: "F", name: "Física" },
        { value: "J", name: "Jurídica" },
        { value: "E", name: "Estrangeira" },
    ]}
/>
```

<hr>

### FormBtnSubmit

```jsx
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
```

```jsx
<FormBtnSubmit value="GRAVAR" htmlId="gravar" />
```
