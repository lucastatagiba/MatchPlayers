import { useState } from "react";

import * as styles from "./style";

const FileField = ({ name, onchangeFunc, ...rest }) => {
  const [selected, setSelected] = useState("normal");

  return (
    <>
      <styles.Container htmlFor={rest.id}>
        <styles.Label selected={selected}>{rest.placeholder}</styles.Label>

        <styles.FileName id={`file-name-${rest.id}`}></styles.FileName>

        <styles.Input {...rest} onChange={(event) => onchangeFunc(event)} />
      </styles.Container>
    </>
  );
};

export default FileField;
