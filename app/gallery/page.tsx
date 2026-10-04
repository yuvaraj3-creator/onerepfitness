import {Shell,PageHero} from '../../components/site';

const gallery=[
  ['Gym Floor','https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85'],
  ['Strength Training','https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85'],
  ['Free Weights','https://www.exerciseroom.com.au/img/3494'],
  ['Training Session','https://assets-cdn.wellhub.com/images/?su=https%3A%2F%2Fimages.partners.gympass.com%2Fimage%2Ffilename%2F5012201%2Flg_Ns6Uf5COeKtnT4pxQm1LCnWOj-9xrf_E.jpg'],
  ['Cardio Zone','https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85'],
  ['Workout','https://s9.localdatacdn.com/mo/columbia/2821447/original/s3Or9rLwQV.jpg'],
  ['Gym Equipment','https://static.wixstatic.com/media/nsplsh_3c3de00d944d45d9b1b430e8923b1221~mv2.jpg/v1/fill/w_2500%2Ch_1666%2Cal_c/nsplsh_3c3de00d944d45d9b1b430e8923b1221~mv2.jpg'],
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