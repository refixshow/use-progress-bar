import React, { FC, useRef } from "react"
import useProgressBar from "./useProgressBar"

const WithProgressBar: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { progress, isInView } = useProgressBar(ref)

  console.log(progress)

  return (
    <div className="wrapper" ref={ref}>
      {isInView && (
        <div
          className="progressBar"
          style={{ transform: `scaleX(${progress})` }}
        ></div>
      )}
      {children}
    </div>
  )
}

export default WithProgressBar
