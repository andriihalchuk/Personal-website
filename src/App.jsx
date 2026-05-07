import {FaLinkedin, FaGithub} from 'react-icons/fa'

export default function App() {
  return (
    <div className='min-h-max min-w-max bg-slate-800'>
      <div className='flex items-center justify-between bg-slate-900 text-white p-4 gap-6 text-2xl sticky top-0'>
        <div className='font-bold'>LOGO LOL</div>
        <div className='flex gap-8 items-center'>
          <div className='flex gap-6'>
            <a className='btn-nav' href='#about_me'>About Me</a>
            <a className='btn-nav' href='#projects'>Projects</a>
            <a className='btn-nav' href='#skills'>  Skills</a>
            <a className='btn-nav' href='#contact'> Contact</a>
          </div>
          <div className='flex gap-4'>
            <a className='btn-socials hover:text-blue-500' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in//'><FaLinkedin></FaLinkedin></a>
            <a className='btn-socials hover:text-violet-600' target='_blank' rel='noopener noreferrer' href='https://github.com/'><FaGithub></FaGithub></a>
          </div>  
        </div>   
      </div>
      <main className='p-10 text-blue-300 flex flex-col items-center justify-center gap-80 text-4xl'>
        <h1 className='text-5xl'>Welcome to my portfolio</h1>
        <section className='max-w-4xl w-full' id='about_me'>
          <h1 className='text-center mb-6 font-bold'>A little about me</h1>
          <p className='leading-relaxed text-center text-3xl'>
            Hey, my name is Andrii and I am a first year Computer Science student at the University of Warwick.
          </p>
        </section>
        <section className='max-w-4xl w-full' id='projects'>
          <h1 className='text-center mb-6 font-bold'>My projects</h1>

        </section>
        <section className='max-w-4xl w-full' id='skills'>
          <h1 className='text-center mb-6 font-bold'>My skills</h1>

        </section>
        <section className='max-w-4xl w-full' id='contact'>
          <h1 className='text-center mb-6 font-bold'>Contact me</h1>

        </section>
      </main>
    </div>
  );
}