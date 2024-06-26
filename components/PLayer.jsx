import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit() {
    setIsEditing((editing) => !editing);
    //console.log("edit");
  }
  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }
  // let playerName = <span className="player-name">{name}</span>;

  // if (isEditing) {
  //   playerName = <input type="text" required />;
  // }
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? "save" : "edit"}</button>
    </li>
  );
}
