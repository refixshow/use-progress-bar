import React, { FC, useRef } from "react"
import useProgressBar from "./useProgressBar"

const WithProgressBar: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)

  const { progress, isInView } = useProgressBar(ref)

  return (
    <div className="wrapper" ref={ref} style={{ position: "relative" }}>
      {isInView && (
        <div className="progressBar" style={{ width: `${progress}%` }}></div>
      )}
      {children}
    </div>
  )
}

export default WithProgressBar
