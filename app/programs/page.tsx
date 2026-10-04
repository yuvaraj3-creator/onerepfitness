import {Shell,PageHero,CTA,programs} from '../../components/site';

export default function Programs(){
  return <Shell>
    <PageHero
      eyebrow="TRAINING PROGRAMS"
      title="CHOOSE YOUR FOCUS."
      desc="Different goals need different approaches. Find the routine that matches where you want to go."
    />
    <section className="section">
      <div className="container grid cards3">
        {programs.map(([t,d],i)=>
          <article className={`card program ${i===0?'hasProgramImage':''}`} key={t}>
            {i===0&&<div className="programThumb strengthThumb" aria-label="Strength coaching" />}
            <div>
              <div className="eyebrow">PROGRAM</div>
              <h3>{i===0?'Strength Coaching':t}</h3>
              <p>{d}</p>
            </div>
            <a className="arrow" href="/contact">ENQUIRE →</a>
          </article>
        )}
      </div>
    </section>
    <CTA/>
  </Shell>
}