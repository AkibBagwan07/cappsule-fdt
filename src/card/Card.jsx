/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react'
import styles from "./Card.module.css"

export default function Card({salt,form,packing,strength,saltsJson}){
// console.log(typeof(strength))
const [selectedForm,setSelectedForm] = useState()
const [selectedStrength,setSelectedStrength] = useState()
const [selectedPacking,setSelectedPacking] = useState()

return(
  <div className={styles.bg}>
  <div className={styles.flex1}>
     <div><div className={styles.selectOpt}><p>Form:</p>
     <select def name="form-type" className={styles.id_work_days} multiple>Form:{form && form.map((curr,idx)=><option onClick={()=>setSelectedForm(curr)} className={styles.opt}>{curr}</option>)}</select>
     </div>
     <div className={styles.selectOpt}><p>Strength:</p>
     <select name="strength" className={styles.id_work_days} multiple>Form:{strength && strength.map((curr,idx)=><option onClick={()=>setSelectedStrength(curr)} className={styles.opt}>{curr}</option>)}</select>
     </div>
     <div className={styles.dataPacing}>packing:<button onClick={()=>setSelectedPacking(packing)} className={styles.formPack}>{`${packing}strips`}</button></div>
  </div>
</div>
<div className={styles.flex2}>
 <h2>{salt}</h2>
 {selectedForm && selectedStrength && selectedPacking && <p>{selectedForm}|{selectedStrength}|{selectedPacking}</p>}
</div>
<div className={styles.flex3}>
 From 80RS
</div>
 </div>
      //   <div className={styles.bg}>
      //    <div className={styles.flex1}>
      //       <div>
      //       <p className={styles.data}>Form:{form && form.map((curr,idx)=><button onClick={()=>setSelectedForm(curr)} className={idx===0 ?styles.form : styles.other}>{curr}</button>)}</p>
      //       <p className={styles.data}>strength:{strength && strength.map((curr,idx)=><button onClick={()=>setSelectedStrength(curr)} className={idx===0 ?styles.form : styles.other}>{curr}</button>)}</p>
      //       <div className={styles.dataPacing}>packing:<button onClick={()=>setSelectedPacking(packing)} className={styles.formPack}>{packing} strips</button></div>
      //    </div>
      //  </div>
      //  <div className={styles.flex2}>
      //   <h2>{salt}</h2>
      //   <p>{selectedForm}|{selectedStrength}|{selectedPacking}</p>
      //  </div>
      //  <div className={styles.flex3}>
      //   From 80RS
      //  </div>
      //   </div>
    )
}