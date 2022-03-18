import { useState } from "react";
import * as styles from "./style";

const FileField = ({ name, register, ...rest }) => {
  const [selected, setSelected] = useState("normal");

  const handleFileField = (target, id) => {
    const fileName = document.querySelector(`span[id=file-name-${id}]`);

    const name = target.value.split("\\");

    fileName.innerText = name[name.length - 1];

    if (fileName.innerText !== "") {
      setSelected("translated");
    } else {
      setSelected("normal");
    }
  };

  return (
    <styles.Container htmlFor={rest.id}>
      <styles.Label selected={selected}>{rest.placeholder}</styles.Label>

      <styles.FileName id={`file-name-${rest.id}`}></styles.FileName>

      <styles.Input
        {...rest}
        {...register(name, {
          onChange: (event) => handleFileField(event.target, rest.id),
        })}
      />
    </styles.Container>
  );
};

export default FileField;
