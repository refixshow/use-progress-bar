// Przygotuj hooka useProgressBar,
// - który zmienną {progress} [od 0 do 100] odzwierciedla ilość "przeczytanej" części diva
// - który zmienną {isInView} [true/false] odzwierciedla czy element, którego dotyczy progressbar jest na widoku
const useProgressBar = () => {
  return { progress, isInView }
}

// użyj hooka w komponencie WithProgressBar
const WithProgressBar = ({ children }) => {}
// który, tworzy dla propa {children} wizualne odzwierciedlenie progressbaru
// - tworzy nad komponentem {children} progress bar, który jest niebieski i ma wysokość 5px
// - progress bar powienien być sticky do górnej krawędzi ekranu w obrębie WithProgressBar
// - progress bar odzwierciedla swoją długością wysokość przeskrolowanego elementu children używając do tego hooka useProgressBar
