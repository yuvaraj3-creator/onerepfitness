import Link from 'next/link';
import {ArrowRight,MessageCircle,Menu} from 'lucide-react';

export const nav=[['Home','/'],['About','/about'],['Programs','/programs'],['Trainers','/trainers'],['Gallery','/gallery'],['Membership','/membership'],['Contact','/contact']];

export function Header(){
  return <header className="nav">
    <div className="container navin">
      <Link className="brand" href="/">
        <img className="brandLogo" src="/one-more-rep-logo.svg?v=2" alt="One More Rep Fitness" />
      </Link>

      <nav className="links">
        {nav.map(([x,y])=><Link key={y} href={y}>{x}</Link>)}
        <Link className="btn primary joinBtn" href="https://wa.me/918489895767">
          <MessageCircle size={18}/> JOIN NOW
        </Link>
      </nav>

      <div className="mobileHeaderActions">
        <Link className="mobileJoinOutside" href="https://wa.me/918489895767">
          <MessageCircle size={16}/> JOIN NOW
        </Link>
        <details className="mobileMenuWrap">
          <summary className="mobileMenu" aria-label="Open navigation"><span className="hamburgerIcon"><i></i><i></i><i></i></span></summary>
          <nav className="mobileNav" aria-label="Mobile navigation">
            {nav.map(([x,y])=><Link key={y} href={y}>{x}</Link>)}
          </nav>
        </details>
      </div>
    </div>
  </header>
}

export function Footer(){return <footer className="footer"><div className="container footerIn"><div>© {new Date().getFullYear()} One More Rep Fitness.</div><div>Tiruvottiyur, Chennai · 84898 95767</div></div></footer>}
export function Shell({children}:{children:React.ReactNode}){return <><Header/>{children}<Footer/><a className="whatsapp" href="https://wa.me/918489895767" aria-label="Chat on WhatsApp"><img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="WhatsApp" /></a></>}
export function PageHero({eyebrow,title,desc}:{eyebrow:string,title:string,desc?:string}){return <section className="pageHero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1 className="display">{title}</h1>{desc&&<p className="prose">{desc}</p>}</div></section>}
export function CTA(){return <section className="section"><div className="container"><div className="quote"><div className="eyebrow">THE MINDSET</div><h2>DON'T STOP WHEN IT HURTS. STOP WHEN YOU'RE DONE.</h2><p>Build strength, confidence and consistency with a training environment designed to keep you moving forward.</p><Link className="btn" href="/contact">START YOUR JOURNEY <ArrowRight size={16}/></Link></div></div></section>}
export const programs=[['Strength Training','Build foundational strength with progressive workouts.'],['Fat Loss & Conditioning','Structured cardio and conditioning to help you train harder.'],['Muscle Building','Focused hypertrophy training for volume and consistency.'],['Functional Fitness','Improve mobility, stability, endurance and movement.'],['Personal Training','One-to-one coaching built around your goals.'],['Beginner Training','A supportive starting point for new members.']];