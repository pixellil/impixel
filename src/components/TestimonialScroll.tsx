import React, { useState, useEffect, useRef } from 'react';

// Import the testimonial components directly
function TestimonialWrap() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="testimonial_wrap">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="tag_component">
        <div className="h-[12px] relative shrink-0 w-[3px]" data-name="bracket-left">
          <div className="absolute inset-[-6.25%_0_-6.25%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 13.5">
              <path d="M3.75 0.75H0.75V12.75H3.75" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="testimonial_star">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[10.892px] relative shrink-0 w-[12px]" data-name="star_component">
              <div className="absolute inset-[0_0_-2.3%_0]" data-name="star_component">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.1426">
                  <path d="M6 0L7.414 4.586L12 4.586L8.293 7.414L9.707 12L6 9.172L2.293 12L3.707 7.414L0 4.586L4.586 4.586L6 0Z" fill="var(--fill-0, #D89818)" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[12px] relative w-[3px]" data-name="bracket-right">
              <div className="absolute inset-[-6.25%_0_-6.25%_-25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 13.5">
                  <path d="M3.75 0.75H0.75V12.75H3.75" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[60px] items-start relative shrink-0 w-full" data-name="testimonial_info">
        <p className="flex-[1_0_0] font-['Aspekta:500',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative self-stretch text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod, nunc id dictum dictum, nisi nunc tristique lectus.</p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="testimonial_text-wrap">
        <div className="bg-[#d9d9d9] rounded-[32px] shrink-0 size-[32px]" data-name="testimonial_img" />
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-['Aspekta:500',sans-serif] leading-none not-italic text-[14px] text-black">Jaroslav Dlask</p>
            <span className="text-[rgba(0,0,0,0.4)]">·</span>
            <p className="font-['Aspekta:700',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.6)] tracking-[0.24px] uppercase">US</p>
            <span className="text-[rgba(0,0,0,0.4)]">·</span>
            <p className="font-['Aspekta:700',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.6)] tracking-[0.24px] uppercase">Freelancer</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-['Aspekta:400',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.5)]">from LinkedIn</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="LinkedIn">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d="M18.5 0H1.5C0.673 0 0 0.673 0 1.5v17C0 19.327 0.673 20 1.5 20h17c0.827 0 1.5-0.673 1.5-1.5v-17C20 0.673 19.327 0 18.5 0zM6 17H3V8h3v9zM4.5 6.5C3.672 6.5 3 5.828 3 5s0.672-1.5 1.5-1.5S6 4.172 6 5s-0.672 1.5-1.5 1.5zM17 17h-3v-4.5c0-1.5-0.5-2.5-1.5-2.5s-1.5 1-1.5 2.5V17H8V8h3v1.5c0.5-1 1.5-1.5 2.5-1.5s3.5 0.5 3.5 3.5V17z" fill="#0A66C2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialWrap1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="testimonial_wrap">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="tag_component">
        <div className="h-[12px] relative shrink-0 w-[3px]" data-name="bracket-left">
          <div className="absolute inset-[-6.25%_0_-6.25%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 13.5">
              <path d="M3.75 0.75H0.75V12.75H3.75" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="testimonial_star">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[10.892px] relative shrink-0 w-[12px]" data-name="star_component">
              <div className="absolute inset-[0_0_-2.3%_0]" data-name="star_component">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.1426">
                  <path d="M6 0L7.414 4.586L12 4.586L8.293 7.414L9.707 12L6 9.172L2.293 12L3.707 7.414L0 4.586L4.586 4.586L6 0Z" fill="var(--fill-0, #D89818)" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[12px] relative w-[3px]" data-name="bracket-right">
              <div className="absolute inset-[-6.25%_0_-6.25%_-25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 13.5">
                  <path d="M3.75 0.75H0.75V12.75H3.75" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[60px] items-start relative shrink-0 w-full" data-name="testimonial_info">
        <p className="flex-[1_0_0] font-['Aspekta:500',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative self-stretch text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px]">Working with this team has been an incredible experience. Their attention to detail and creative solutions exceeded all our expectations.</p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="testimonial_text-wrap">
        <div className="bg-[#d9d9d9] rounded-[32px] shrink-0 size-[32px]" data-name="testimonial_img" />
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-['Aspekta:500',sans-serif] leading-none not-italic text-[14px] text-black">Sarah Johnson</p>
            <span className="text-[rgba(0,0,0,0.4)]">·</span>
            <p className="font-['Aspekta:700',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.6)] tracking-[0.24px] uppercase">UK</p>
            <span className="text-[rgba(0,0,0,0.4)]">·</span>
            <p className="font-['Aspekta:700',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.6)] tracking-[0.24px] uppercase">CEO</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-['Aspekta:400',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.5)]">from LinkedIn</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="LinkedIn">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d="M18.5 0H1.5C0.673 0 0 0.673 0 1.5v17C0 19.327 0.673 20 1.5 20h17c0.827 0 1.5-0.673 1.5-1.5v-17C20 0.673 19.327 0 18.5 0zM6 17H3V8h3v9zM4.5 6.5C3.672 6.5 3 5.828 3 5s0.672-1.5 1.5-1.5S6 4.172 6 5s-0.672 1.5-1.5 1.5zM17 17h-3v-4.5c0-1.5-0.5-2.5-1.5-2.5s-1.5 1-1.5 2.5V17H8V8h3v1.5c0.5-1 1.5-1.5 2.5-1.5s3.5 0.5 3.5 3.5V17z" fill="#0A66C2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialWrap2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="testimonial_wrap">
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="tag_component">
        <div className="h-[12px] relative shrink-0 w-[3px]" data-name="bracket-left">
          <div className="absolute inset-[-6.25%_0_-6.25%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 13.5">
              <path d="M3.75 0.75H0.75V12.75H3.75" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="testimonial_star">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[10.892px] relative shrink-0 w-[12px]" data-name="star_component">
              <div className="absolute inset-[0_0_-2.3%_0]" data-name="star_component">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11.1426">
                  <path d="M6 0L7.414 4.586L12 4.586L8.293 7.414L9.707 12L6 9.172L2.293 12L3.707 7.414L0 4.586L4.586 4.586L6 0Z" fill="var(--fill-0, #D89818)" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <div className="h-[12px] relative w-[3px]" data-name="bracket-right">
              <div className="absolute inset-[-6.25%_0_-6.25%_-25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.75 13.5">
                  <path d="M3.75 0.75H0.75V12.75H3.75" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[60px] items-start relative shrink-0 w-full" data-name="testimonial_info">
        <p className="flex-[1_0_0] font-['Aspekta:500',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative self-stretch text-[20px] text-[rgba(0,0,0,0.8)] tracking-[-0.4px]">Exceptional service and outstanding results! They transformed our vision into reality with professionalism and creativity that truly stands out.</p>
      </div>
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="testimonial_text-wrap">
        <div className="bg-[#d9d9d9] rounded-[32px] shrink-0 size-[32px]" data-name="testimonial_img" />
        <div className="flex flex-col gap-1 flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-['Aspekta:500',sans-serif] leading-none not-italic text-[14px] text-black">Michael Chen</p>
            <span className="text-[rgba(0,0,0,0.4)]">·</span>
            <p className="font-['Aspekta:700',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.6)] tracking-[0.24px] uppercase">Canada</p>
            <span className="text-[rgba(0,0,0,0.4)]">·</span>
            <p className="font-['Aspekta:700',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.6)] tracking-[0.24px] uppercase">CTO</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-['Aspekta:400',sans-serif] leading-none not-italic text-[12px] text-[rgba(0,0,0,0.5)]">from LinkedIn</p>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="LinkedIn">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path d="M18.5 0H1.5C0.673 0 0 0.673 0 1.5v17C0 19.327 0.673 20 1.5 20h17c0.827 0 1.5-0.673 1.5-1.5v-17C20 0.673 19.327 0 18.5 0zM6 17H3V8h3v9zM4.5 6.5C3.672 6.5 3 5.828 3 5s0.672-1.5 1.5-1.5S6 4.172 6 5s-0.672 1.5-1.5 1.5zM17 17h-3v-4.5c0-1.5-0.5-2.5-1.5-2.5s-1.5 1-1.5 2.5V17H8V8h3v1.5c0.5-1 1.5-1.5 2.5-1.5s3.5 0.5 3.5 3.5V17z" fill="#0A66C2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TestimonialScrollProps {
  className?: string;
}

const TestimonialScroll: React.FC<TestimonialScrollProps> = ({ className = "" }) => {
  const testimonials = [
    { id: 0, component: <TestimonialWrap />, delay: 0 },
    { id: 1, component: <TestimonialWrap1 />, delay: 0.15 },
    { id: 2, component: <TestimonialWrap2 />, delay: 0.3 },
  ];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Auto scroll with smooth easing
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    let startTime: number | null = null;
    const duration = 25000; // Full scroll cycle duration
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      // Easing function for smooth natural movement
      const eased = 0.5 - 0.5 * Math.cos(progress * Math.PI * 2);
      const maxScroll = container.scrollHeight - container.clientHeight;
      
      container.scrollTop = maxScroll * eased;
      setScrollY(maxScroll * eased);
      
      // Update active testimonial index
      const newIndex = Math.floor(progress * testimonials.length) % testimonials.length;
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationId);
  }, [activeIndex]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.overflowY = 'auto';
    }
  };

  const handleMouseLeave = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.overflowY = 'hidden';
    }
  };

  return (
    <div className={`relative w-full min-h-[780px] overflow-hidden ${className}`}>
      {/* ORBIT SYSTEM - COLLABORATORS CIRCLE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[520px] h-[520px] pointer-events-none">
        {/* Orbit rings */}
        {[...Array(3)].map((_, ringIndex) => (
          <div 
            key={`orbit-ring-${ringIndex}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            style={{
              width: 420 - ringIndex * 80,
              height: 420 - ringIndex * 80,
              opacity: 0.2 + ringIndex * 0.1
            }}
          />
        ))}

        {/* Rotating orbit container */}
        <div 
          className="absolute inset-0 origin-center"
          style={{
            animation: 'orbitRotate 75s linear infinite',
          }}
        >
          {/* Orbit items - collaborators avatars */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * (Math.PI / 180);
            const radius = 180 + (i % 3) * 35;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={`orbit-item-${i}`}
                className="absolute w-[38px] h-[38px] rounded-full bg-white/90 shadow-lg"
                style={{
                  left: `calc(50% + ${x}px - 19px)`,
                  top: `calc(50% + ${y}px - 19px)`,
                  animation: `orbitFloat ${6 + i * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.35}s`,
                  transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.35)';
                  e.currentTarget.style.zIndex = '100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.zIndex = '1';
                }}
              />
            );
          })}
        </div>

        {/* Center glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(240,91,61,0.4) 0%, transparent 70%)',
            filter: 'blur(25px)',
          }}
        />
      </div>

      {/* TESTIMONIALS VERTICAL SCROLL CONTAINER */}
      <div 
        ref={scrollContainerRef}
        className="absolute bottom-0 left-0 right-0 h-[420px] px-6 overflow-y-hidden scroll-smooth"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="h-[150px]" />
        
        {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
          <div
            key={`testimonial-${index}`}
            className="mb-6 transition-all duration-700 ease-out"
            style={{
              opacity: activeIndex === item.id ? 1 : 0.65,
              transform: activeIndex === item.id ? 'translateX(0) scale(1)' : 'translateX(15px) scale(0.97)',
              transitionDelay: `${item.delay}s`,
            }}
          >
            <div 
              className="bg-white/95 backdrop-blur-sm content-stretch flex flex-col items-start p-[36px] w-full rounded-2xl shadow-xl border border-white/20"
              style={{
                animation: `testimonialFloat ${7 + index * 0.3}s ease-in-out infinite`,
                animationDelay: `${index * 0.25}s`,
              }}
            >
              {item.component}
            </div>
          </div>
        ))}
        
        <div className="h-[220px]" />
      </div>

      {/* Custom animation keyframes */}
      <style>{`
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbitFloat {
          0%, 100% { 
            transform: translateY(0px) rotate(var(--rotation, 0deg));
          }
          50% { 
            transform: translateY(-7px) rotate(var(--rotation, 0deg));
          }
        }
        
        @keyframes testimonialFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        /* Hide scrollbar but keep functionality */
        div::-webkit-scrollbar {
          width: 4px;
        }
        
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        
        div::-webkit-scrollbar-thumb {
          background: rgba(240,91,61,0.5);
          border-radius: 2px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(240,91,61,0.8);
        }
      `}</style>
    </div>
  );
};

export default TestimonialScroll;
