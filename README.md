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

### FormInputGroupMult

```jsx
export function FormInputGroupMult({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="input_g_mult">{children}</div>;
}
```

```jsx
<FormInputGroupMult>
    /* html */
</FormInputGroupMult>
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

```

```jsx

```

<hr>

### FormInputTel

```jsx

```

```jsx

```

<hr>

### FormInputTextArea

```jsx

```

```jsx

```

<hr>

### FormInputNumber

```jsx

```

```jsx

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

```
