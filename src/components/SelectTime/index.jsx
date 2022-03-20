const SelectGames = ({ handleFunction }) => {
  return (
    <select onChange={handleFunction} name="" id="">
      <option aria-label="None" value="" />
      <option value={"0"}>0:00</option>
      <option value={"2"}>2:00</option>
      <option value={"4"}>4:00</option>
      <option value={"6"}>6:00</option>
      <option value={"8"}>8:00</option>
      <option value={"10"}>10:00</option>
      <option value={"12"}>12:00</option>
      <option value={"14"}>14:00</option>
      <option value={"16"}>16:00</option>
      <option value={"18"}>18:00</option>
      <option value={"20"}>20:00</option>
      <option value={"22"}>22:00</option>
    </select>
  );
};

export default SelectGames;
