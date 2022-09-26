import '../../styles/stylesheet.scss'
import Themelayout from '../layout/theme'

function MyApp({ Component, pageProps }) {
  return (
    <Themelayout>
      <Component {...pageProps} />
    </Themelayout>
   )
}

export default MyApp
