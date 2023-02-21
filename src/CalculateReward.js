import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CalculateReward= ()=>{
    const [purchaseAmt, setPurchase]= useState(0);
    const [baseAmount, setBaseAmount]= useState(100);
    const [amount, setAmount]= useState([]);

    
    let total = 0
    let rewards=0;
    const calRewards =(purchaseAmt)=>{
        //let rewards=0;
        if(purchaseAmt >= 50 && purchaseAmt <= 100){
            rewards = purchaseAmt - 1*50;
        } else if( purchaseAmt >= 100){
            let accessAmount = purchaseAmt - baseAmount;
            rewards = 2 * accessAmount + 1*50;
        }
        total += rewards;
        return rewards;
    }
    

    useEffect(()=>{
        fetchData();
    },[]);   

    const fetchData= async()=>{
     const res = await axios.get('/db/amount.json')
         console.log(res.data);
         setAmount(res.data);  
    }

    return(
        <div>
            <h2>Calculate Rewards</h2>
             <input type='text' placeholder=" Enter the Number" onChange={(e)=>setPurchase(e.target.value)} />
             <div> Reward: {calRewards(purchaseAmt)}</div>
             <div>
                <h3>List of Rewards</h3>
                    <ul>
                        {amount.map((amt, index)=>(
                            <li key={index}>{calRewards(amt.purchaseAmt)}</li>
                        ))}
                    </ul> 
                <div>--------------------</div>
             </div>
          <div>Total Rewards: {total}</div>
        </div>
    )

}
export default CalculateReward