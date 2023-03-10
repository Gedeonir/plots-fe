// import React from 'react'

// export default function Homepage() {
//   return (
//     <div className='flex justify-center p-3'>

//          <div className='font-bold py-4 px-4'>Count: 0</div>

//          <button className='bg-black rounded-lg p-2 mx-5 text-white font-bold'>Increase Count</button>

//          <button className='bg-black rounded-lg p-2 mx-5 text-white font-bold'>Decrease Count</button>

//       </div>
//   )
// }

import React from "react"


import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
} from "../redux/Actions/counterActions"

function App(props) {
  return (
    <div className="flex justify-center p-3">
      <div className="font-bold py-4 px-4">Count: {props.count}</div>

      <button className='bg-black rounded-lg p-2 mx-5 text-white font-bold' onClick={() => props.increaseCounter()}>Increase Count</button>

      <button className='bg-black rounded-lg p-2 mx-5 text-white font-bold' onClick={() => props.decreaseCounter()}>Decrease Count</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
