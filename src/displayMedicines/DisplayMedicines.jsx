import React, { useEffect, useState } from 'react'
import { Grid } from "@mui/material";
import Card from '../card/Card';
import styles from "./DisplayMedicines.module.css"

const DisplayMedicines = ({medicines}) => {
  //  console.log(medicines)
  const [showCards , setShowCards] = useState(false)
  useEffect(()=>{
     setShowCards(true)
  },[])
  
    return (
    <div>
       <Grid container>
        {medicines.map((curr) => {
          let strength = curr.most_common.Strength
          const strengthDivider = strength.split("+").join(" ").split(" ")
           const pack = parseInt(curr.most_common.Packing)
          // console.log(pack)
          // console.log(strengthDivider)
          return (
            <Grid className={styles.wrapper} key={curr.available_forms.id} item xs={12} md={12} lg={12}>
              <Card
                salt={curr.salt}
                form={curr.available_forms}
                packing={pack}
                strength={strengthDivider}
                // strength={strengthDivider.map((curr)=>curr)}
                saltsJson={curr.salt_forms_json}
              />
            </Grid>
          );
        })}
      </Grid>
       {/* {medicines.map((curr)=>console.log(curr.most_common))} */}
    </div>
  )
}

export default DisplayMedicines


// most_common salt_forms_json salt

