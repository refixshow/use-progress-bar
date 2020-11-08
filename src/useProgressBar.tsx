import { useEffect, useState, RefObject, useCallback } from "react"

interface ProgressBar {
  progress: number
  isInView: boolean
}

const useProgressBar = (ref: RefObject<HTMLDivElement>) => {
  const [progressBar, setProgressBar] = useState<ProgressBar>({
    progress: 0,
    isInView: false,
  })

  const handleScrollEvent = useCallback(() => {
    if (ref.current) {
      const isTopOfElementInView: boolean =
        window.scrollY + window.innerHeight > ref.current.offsetTop

      const isBottomOfElementInView: boolean =
        window.scrollY < ref.current.offsetTop + ref.current.clientHeight

      const isElementInView: boolean =
        isTopOfElementInView && isBottomOfElementInView

      if (isElementInView) {
        // window.scrollY - ref.current.offsetTop + ref.current.clientHeight = start = 0%
        // window.scrollY + ref.current.clientHeight = end = 100%

        const startPostition: number =
          window.scrollY - ref.current.offsetTop + ref.current.clientHeight

        const endPostition: number = ref.current.clientHeight

        const magicNumber: any = 2

        const percentage: number = 100

        const progress: number =
          (startPostition / endPostition / magicNumber) * percentage

        setProgressBar({ progress, isInView: true })
      } else {
        setProgressBar((prevState) => {
          return { ...prevState, isInView: false }
        })
      }
    }
  }, [ref])

  useEffect(() => {
    if (ref) {
      window.addEventListener("scroll", handleScrollEvent)
    }

    return () => window.removeEventListener("scroll", handleScrollEvent)
  }, [ref, handleScrollEvent])

  return progressBar
}

export default useProgressBar
