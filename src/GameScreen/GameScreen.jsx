import React from "react";
import "./GameScreen.scss";
import Header from "../NavBarHeader/Header";
import { useNavigate } from "react-router-dom";

const GameScreen = () => {
  const [dwarves, setDwarves] = React.useState([]);
  const [randomDwarf, setRandomDwarf] = React.useState(null);
  const [nameDwarf, setNameDwarf] = React.useState("");
  const [ageDwarf, setAgeDwarf] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const getDwarves = async () => {
      const obj = await fetch(
        "https://run.mocky.io/v3/57a40d2a-d890-4506-99cb-6acd7c2217fd"
      );
      const result = await obj.json();
      setDwarves(result);

      if (result.length > 0) {
        const randomIndex = Math.floor(Math.random() * result.length);
        const randomDwarf = result[randomIndex];
        setRandomDwarf(randomDwarf);
      }
    };
    getDwarves();
  }, []);

  const HandleSubmit = (e) => {
    if (
      (randomDwarf.img === randomDwarf.img &&
        nameDwarf === randomDwarf.name &&
        randomDwarf.yearOfBirth === null &&
        ageDwarf === "Unknown") ||
      Number(ageDwarf) === 2941 - randomDwarf.yearOfBirth
    ) {
      navigate("/win");
    } else {
      navigate("lose");
    }
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="main-wrap">
        {randomDwarf && <img src={randomDwarf.img} alt="dwarf" />}
        <form className="form">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setNameDwarf(e.target.value)}
            placeholder="name"
            id="name"
          />
          <label htmlFor="age">Age:</label>
          <input
            onChange={(e) => setAgeDwarf(e.target.value)}
            placeholder="age"
            id="age"
          />
          <button onClick={HandleSubmit}>submit</button>
        </form>
      </div>
    </>
  );
};

export default GameScreen;
