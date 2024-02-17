import { NewsletterForm } from '@/components/newsletter-form'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import { useNavigate } from 'react-router-dom';

// const history = useHistory();




type ScrollRevealRefElement = HTMLDivElement | HTMLHeadingElement | HTMLParagraphElement

function Hero({
  className,
  content,
  illustration,
  title,
}: {
  className?: string
  content: string
  illustration?: ReactNode
  title: string
}) {
  const scrollRevealRef = useRef<ScrollRevealRefElement[]>([])

  useEffect(() => {
    if (scrollRevealRef.current.length > 0) {
      scrollRevealRef.current.map((ref) =>
        ScrollReveal().reveal(ref, {
          duration: 10000,
          distance: '40px',
          easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
          origin: 'top',
          interval: 150,
        }),
      )
    }

    return () => ScrollReveal().destroy()
  }, [])

  // function onNewsletterSubmit(values: any) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({ values })
  //     }, 1000)
  //   })
  // }
  const navigate = useNavigate();

  //function to redirect to dashboard
  function redirectToDashboard(){
    console.log('jsjsj');   
    navigate('/dashboard-home');
   
  
    
    // window.location.href = '/dashboard';
  }

  const addToScrollRevealRef = (el: ScrollRevealRefElement) => {
    scrollRevealRef.current.push(el)
  }
  // const history = useHistory();


  return (
    <section className={cn('text-center lg:w-full lg:py-20 lg:text-left mt--4' , className)}>
      <div className="hero mx-auto w-full max-w-6xl px-6">
        <div className="hero-inner relative lg:flex">
          <div className="hero-copy pb-16 pt-10 lg:min-w-[40rem] lg:pr-20 lg:pt-16">
            <div className="mx-auto w-full max-w-3xl">
         
              <h1 className="mb-0 mt-0 text-4xl font-bold md:text-5xl " ref={addToScrollRevealRef} style={{fontFamily:'Helvetica', color: '#78C149'}}>
               AfriJour:
              </h1>
              <h4 className="mb-0 mt-0 text-4xl font-bold md:text-5xl " ref={addToScrollRevealRef} style={{fontFamily:'Helvetica', fontSize:'30px'}}>
              {title}
              </h4>
         
              <p className="prose prose-xl mt-2 m-auto text-gray-500" ref={addToScrollRevealRef} style={{fontFamily:'verdana', fontSize:'14px' }}>
                {content}
              </p>
            </div>

            <div ref={addToScrollRevealRef} style={{marginTop:'2rem'}}>
              {/* <NewsletterForm
                className="mx-auto mt-8 max-w-md lg:mx-0"
                submitText="Go to Dashboard"
                onClick={redirectToDashboard}
                
              /> */}
               <button
                  className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-gradient-to-r from-secondary-500 to-secondary-400 px-7 py-4 text-center font-medium leading-4 text-white no-underline shadow-lg"
                  onClick={redirectToDashboard}
                >
                Go to Dashboard
              </button>
             
            </div>
          
          </div>

          {!!illustration && (
            <div className="relative -mx-6 py-10 lg:mx-0 lg:p-0">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
