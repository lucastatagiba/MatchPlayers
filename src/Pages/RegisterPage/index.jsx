import Input from "../../components/Input";
import GeralButton from "../../components/GeneralButton";

const RegisterPage = () => {
  return (
    <>
      <h1> Oi </h1>

      <Input width={"350px"} placeholder={"digite"} />
      <GeralButton
        width={"150px"}
        children={"clicar"}
        bgcolor={"red"}
        color={"black"}
      />
    </>
  );
};

export default RegisterPage;
