import {Shell,PageHero,CTA,programs} from '../../components/site';

const programImages=[
  'https://images.unsplash.com/photo-1534367507877-0edd93bd013b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1584467735871-8d9c5a1a1c56?auto=format&fit=crop&w=1200&q=85'
];

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
          <article className="card program hasProgramImage" key={t}>
            <div
              className="programThumb"
              role="img"
              aria-label={i===0?'Strength Coaching':t}
              style={{backgroundImage:`linear-gradient(180deg,rgba(31,23,18,.04),rgba(31,23,18,.25)),url('${programImages[i]}')`}}
            />
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