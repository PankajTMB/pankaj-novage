import Link from 'next/link'
export default function Home() {
  return (
      <section className='hero_sec'>
        <div className="container">
          <h1 className='hero_heading text-white'>
            <b>Novagems -</b> New Generation Management System.
          </h1>
          <Link href="signup">
            <a className="cta cta-dark cta-big">
                Sign Up
            </a>
          </Link>
        </div>
      </section>
  )
}
