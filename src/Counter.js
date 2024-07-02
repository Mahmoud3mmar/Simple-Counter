import { useState } from 'react'
import "./Style.css"
function Counter() {

  const [Count,SetCount]=useState(0)
  const Increment =()=> SetCount(Count+1)
  const Decrement =()=> SetCount(Count-1)
  const Reset =()=> SetCount(0)

  return (
    <>
        <div className='Counter'>
            <h1 className='Number'> {Count} </h1>
        </div>

        <section className='btns-Container'>
        <button onClick={Increment} className='Increment' >  +  </button>
        <button onClick={Decrement} className='Decrement'>  - </button>
        <button onClick={Reset}className='Reset'>  Reset  </button>
        </section>
    </>
  )
}

export default Counter
