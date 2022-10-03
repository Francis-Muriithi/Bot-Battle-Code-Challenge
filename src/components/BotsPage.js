import React, {useEffect, useState}from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const[armyBotIds, setArmyBotIds]= useState([]);
  const armyBots= bots.filter((bot)=> armyBotIds.includes(bot.id))

const fetchBots= async ()=>{
 const myBots= await fetch("http://localhost:8002/bots")
  .then((res) => res.json()
  );
  setBots(myBots);
}
useEffect(()=>{
  fetchBots()
}, [])

const addBotArmy =(botId)=>{
  setArmyBotIds([...armyBotIds, botId]);
};

const removeBotArmy =(botId)=>{
  setArmyBotIds(armyBotIds.filter((id)=> id !== botId));
}

  return (
    <div>
          <YourBotArmy bots={armyBots} removeBot ={removeBotArmy}/>
          <BotCollection  bots={bots} addBot ={addBotArmy}/>
      
    </div>
  )
}

export default BotsPage;
