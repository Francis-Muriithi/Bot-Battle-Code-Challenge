import React from "react";
import BotCard from "./BotCard";


function BotCollection(props) {
  const bots = props.bots;
  const addBot = props.addBot;
  
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {bots.map((bot) => {
            return <BotCard key={bot.id} bot={bot} onClick={addBot} />;
          })}
      </div>
    </div>
  );
}

export default BotCollection;
