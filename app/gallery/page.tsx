import {Shell,PageHero} from '../../components/site';

const gallery=[
  ['Gym Floor','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85'],
  ['Strength Training','https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85'],
  ['Free Weights','https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85'],
  ['Training Session','https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85'],
  ['Cardio Zone','https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85'],
  ['Workout','https://images.unsplash.com/photo-1584467735871-8d9c5a1a1c56?auto=format&fit=crop&w=1200&q=85'],
  ['Gym Equipment','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85&sat=-20'],
  ['Fitness Lifestyle','https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=85']
];

export default function Gallery(){
  return <Shell><PageHero eyebrow="THE GYM" title="SEE THE WORK." desc="A visual look at the training environment."/>
    <section className="section gallerySection"><div className="container galleryGrid">
      {gallery.map(([title,img],i)=><div className={`galleryCard ${i===0?'featured':''}`} key={title+i} style={{backgroundImage:`linear-gradient(180deg,transparent 45%,rgba(35,24,18,.82)),url('${img}')`}}>
        <div className="galleryCaption"><span>{title}</span></div>
      </div>)}
    </div></section>
  </Shell>
}