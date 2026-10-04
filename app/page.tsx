import Link from 'next/link';
import {ArrowRight,Dumbbell,Users,HeartPulse,Trophy,Flame} from 'lucide-react';
import {Shell,CTA,programs} from '../components/site';

const benefits=[
  [Dumbbell,'Modern Equipment','Premium workout setup'],
  [Users,'Expert Trainers','Personalized guidance'],
  [HeartPulse,'Unisex Friendly','Comfortable for everyone'],
  [Trophy,'Real Results','Build a stronger you']
] as const;

const programCards=[
  ['Strength Training','Build strength and endurance','https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=85',Dumbbell],
  ['Weight Loss','Burn fat, get fitter','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85',Flame],
  ['Muscle Building','Gain lean muscle mass','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85',Dumbbell],
  ['General Fitness','Stay active and healthy','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85',HeartPulse]
] as const;

export default function Home(){
  return <Shell><main>
    <section className="hero">
      
      <div className="container heroContent">
        <div className="eyebrow">STRONGER TODAY. BETTER TOMORROW.</div>
        <h1 className="display"><span>ONE MORE</span> <span className="repWord">REP</span><br/><b>FITNESS UNISEX</b></h1>
        <p>A modern fitness space for everyone. Train harder, get stronger, live healthier.</p>
        <div className="actions">
          <Link className="btn primary" href="/programs"><Dumbbell size={17}/> EXPLORE PROGRAMS <ArrowRight size={16}/></Link>
          <Link className="btn ghost" href="/membership">VIEW MEMBERSHIP</Link>
        </div>
      </div>
    </section>

    <section className="benefitBar"><div className="container benefitGrid">
      {benefits.map(([Icon,title,desc])=><div className="benefit" key={title}><span className="benefitIcon"><Icon size={22}/></span><div><strong>{title}</strong><small>{desc}</small></div></div>)}
    </div></section>

    <section className="section programsSection"><div className="container">
      <div className="sectionHead">
        <div><div className="eyebrow">OUR PROGRAMS</div><h2 className="display">FITNESS FOR <span>EVERY GOAL</span></h2></div>
        <p>Whether you want to build muscle, lose weight, improve stamina or simply stay healthy — we have the right program for you.</p>
        <Link className="btn darkBtn" href="/programs">VIEW ALL PROGRAMS <ArrowRight size={16}/></Link>
      </div>
      <div className="programShowcase">{programCards.map(([title,desc,img,Icon])=><Link className="showCard" href="/programs" key={title} style={{backgroundImage:`linear-gradient(180deg,transparent 25%,rgba(25,17,12,.92) 100%),url('${img}')`}}><span className="showIcon"><Icon size={22}/></span><div><h3>{title}</h3><p>{desc}</p></div></Link>)}</div>
    </div></section>
    <CTA/>
  </main></Shell>
}