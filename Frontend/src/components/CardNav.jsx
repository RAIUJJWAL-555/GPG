import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
  title,
  leftLogo,
  leftLogoAlt = 'Logo',
  rightLogo,
  rightLogoAlt = 'Right Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#F8F6F2',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 400;

    const contentEl = navEl.querySelector('.card-nav-content');
    if (contentEl) {
      const wasVisible = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;
      const wasMaxHeight = contentEl.style.maxHeight;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';
      contentEl.style.maxHeight = 'none';

      contentEl.offsetHeight;

      const topBar = 120;
      const padding = 24;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisible;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;
      contentEl.style.maxHeight = wasMaxHeight;

      return topBar + contentHeight + padding;
    }
    return 400;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 120, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] z-[99] top-[1.2em] md:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[120px] p-0 rounded-2xl shadow-lg relative overflow-hidden will-change-[height] transition-shadow duration-300 hover:shadow-xl`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[120px] flex items-center justify-between px-8 md:px-12 z-[2]">
          {/* Left Logo and Title */}
          <div className="left-logo-container flex items-center gap-1">
            {leftLogo && <img src={leftLogo} alt={leftLogoAlt} className="logo h-[70px] md:h-[90px] w-auto object-contain transition-transform duration-300 hover:scale-105" />}
            {title && (
              <h1 className="text-3xl md:text-3xl font-bold tracking-tight hidden lg:block leading-tight" style={{ color: '#0B1C2D' }}>
                {title}
              </h1>
            )}
          </div>

          {/* Center - Hamburger Menu */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-12 w-12 rounded-full flex flex-col items-center justify-center cursor-pointer gap-[6px] hover:bg-black/5 transition-colors duration-300 ml-auto`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#0B1C2D' }}
          >
            <div
              className={`hamburger-line w-[24px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                } group-hover:scale-110`}
            />
            <div
              className={`hamburger-line w-[24px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                } group-hover:scale-110`}
            />
          </div>

          {/* Right Area - Spacer or Action */}
          <div className="right-logo-container flex items-center w-[90px] justify-end pointer-events-none">
             {/* Maintained for balance, currently empty but preserves layout symmetry if needed */}
          </div>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[120px] p-4 flex flex-col items-stretch gap-4 justify-start z-[1] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            } md:flex-row md:items-stretch md:gap-6`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
