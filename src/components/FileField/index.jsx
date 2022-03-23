import { useState } from "react";

import * as styles from "./style";

const FileField = ({ state, ...rest }) => {
  const [selected, setSelected] = useState("normal");

  const base64Converter = (target, changeState) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      changeState(reader.result);
    });

    reader.readAsDataURL(target.files[0]);
  };

  const handleFileField = (e, id) => {
    const fileName = e.target.value.split("\\");
    const displayName = document.querySelector(`#file-name-${id}`);

    displayName.innerText = fileName[fileName.length - 1];

    if (displayName.innerText !== "") {
      setSelected("translated");
    } else {
      setSelected("normal");
    }
  };

  return (
    <>
      <styles.Container htmlFor={rest.id}>
        <styles.Label selected={selected}>{rest.placeholder}</styles.Label>

        <styles.FileName id={`file-name-${rest.id}`}></styles.FileName>

        <styles.Input
          {...rest}
          onChange={(event) => {
            handleFileField(event, rest.id);
            base64Converter(event.target, state);
          }}
        />
      </styles.Container>
    </>
  );
};

export default FileField;
