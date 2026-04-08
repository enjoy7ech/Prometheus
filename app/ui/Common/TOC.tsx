'use client';

import { useEffect, useState } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TOC() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 提取所有带 anchor 类的标题
    const elements = Array.from(document.querySelectorAll('.anchor'));
    const items: TOCItem[] = elements.map((el) => ({
      id: el.id,
      text: (el as HTMLElement).innerText.replace('#', '').trim(),
      level: parseInt(el.tagName.substring(1), 10) || 2
    }));
    setHeadings(items);

    // 重新设计：使用更精确的滚动计算替代 IntersectionObserver
    const scrollContainer = document.querySelector('.article-overlay') || window;
    
    const handleScroll = () => {
      let currentId = '';
      // 获取页面的垂直居中区域作为触发线
      const triggerY = window.innerHeight * 0.4; 
      
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          currentId = el.id;
        }
      }
      
      const scrollY = scrollContainer === window ? window.scrollY : (scrollContainer as HTMLElement).scrollTop;
      // 如果还没滑到第一个标题，或者页面位于最顶部
      if (!currentId && elements.length > 0 && scrollY < 100) {
        currentId = elements[0].id;
      }
      
      if (currentId !== activeId) {
         setActiveId(currentId);
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll as any, { passive: true });
    // 初始计算
    setTimeout(handleScroll, 200);
    
    return () => scrollContainer.removeEventListener('scroll', handleScroll as any);
  }, [activeId]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const scrollContainer = document.querySelector('.article-overlay') || window;
      // 获取当前元素的相对容器顶部的偏移
      const rect = element.getBoundingClientRect();
      const currentScrollTop = scrollContainer === window ? window.scrollY : (scrollContainer as HTMLElement).scrollTop;
      const targetTop = rect.top + currentScrollTop - 100;
      
      if (scrollContainer === window) {
        window.scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      } else {
        (scrollContainer as HTMLElement).scrollTo({
          top: targetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  if (headings.length === 0) return null;

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 w-14 h-14 rounded-full bg-black text-white z-[60] flex items-center justify-center shadow-2xl md:hidden transition-transform active:scale-90"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
        </svg>
      </button>

      <nav className={`
        fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isOpen 
          ? 'inset-0 bg-white/60 backdrop-blur-xl flex items-center justify-center' 
          : 'right-3 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 hidden md:block'}
      `}>
        <div 
          onClick={(e) => e.stopPropagation()}
          className={`
            group/nav relative flex flex-col overflow-hidden transition-all duration-700
            backdrop-blur-[40px] backdrop-saturate-[250%] bg-white/40 border border-white/70 
            shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1),inset_0_1px_4px_rgba(255,255,255,1),inset_0_-1px_4px_rgba(0,0,0,0.05)] 
            ${isOpen 
              ? 'w-[85vw] max-h-[70vh] rounded-[24px] py-10 px-8 hover:bg-white/80' 
              : 'py-7 px-[14px] rounded-[32px] hover:bg-white/60 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]'}
          `}
        >
        <div className="flex justify-end w-full relative z-10 mb-6">
          <div className={`
            transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex justify-end
            ${isOpen ? 'w-[200px]' : 'w-0 xl:w-[200px] group-hover/nav:w-[200px]'}
          `}>
             <div className="text-[10px] font-black tracking-[0.25em] text-black/30 uppercase pr-3 whitespace-nowrap">
                INDEX
             </div>
          </div>
          <div className="w-6 shrink-0 flex justify-center items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-black/20 shadow-[inset_0_1px_1px_rgba(0,0,0,0.2)]"></div>
          </div>
        </div>

        {/* 垂直流动连接线 */}
        <div className="absolute top-[5rem] bottom-[50px] right-[25px] w-[2px] bg-gradient-to-b from-black/0 via-black/10 to-black/0 rounded-full" />
        
        <div className="relative flex flex-col gap-[18px] z-10">
          {headings.map(item => {
            const isActive = activeId === item.id;
            const isMain = item.level === 2;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  handleClick(e, item.id);
                  if (isOpen) setIsOpen(false);
                }}
                className="group/item relative flex items-center justify-end cursor-pointer py-1"
              >
                {/* 动态液态文本容器 (动画撑开父级宽度) */}
                <div className={`
                  overflow-hidden transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                  origin-right flex justify-end items-center
                  ${isOpen || 'xl:w-[200px] xl:opacity-100' ? 'w-[200px] opacity-100 pr-3' : 'w-0 opacity-0 group-hover/nav:w-[200px] group-hover/nav:opacity-100 group-hover/nav:pr-3'}
                `}>
                  <div className={`
                    whitespace-nowrap transition-transform duration-[400ms] ease-out
                    ${isActive ? 'text-black font-extrabold translate-x-0' : 'text-black/50 font-medium translate-x-2 group-hover/item:text-black/90 group-hover/item:translate-x-0'}
                    ${isMain ? 'text-[13px] tracking-wide' : 'text-[11px] pr-2'}
                  `}>
                    {item.text}
                  </div>
                </div>

                {/* 物理质感进度点 */}
                <div className="relative flex items-center justify-center w-6 h-6 shrink-0 z-20">
                  {/* 未激活状态的凹陷刻度 */}
                  <div className="absolute w-[6px] h-[6px] rounded-full border border-black/10 inset-0 m-auto bg-black/5" />
                  
                  {/* 激活与 Hover 状态的主轴黑点 */}
                  <div className={`
                    absolute rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive 
                      ? 'w-[14px] h-[14px] bg-black shadow-[inset_0_-2px_4px_rgba(255,255,255,0.4),0_4px_10px_rgba(0,0,0,0.3)]' 
                      : (isMain ? 'w-[10px] h-[10px] bg-black/20 group-hover/item:bg-black/60 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]' : 'w-[6px] h-[6px] bg-black/20 group-hover/item:bg-black/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]')
                    }
                  `} />
                  
                  {/* 激活时的液态光波呼吸 */}
                  {isActive && (
                    <div className="absolute w-[28px] h-[28px] rounded-full border-[1.5px] border-black/20 animate-ping opacity-80" />
                  )}
                </div>
              </a>
            );
          })}
        </div>
        </div>
      </nav>
      
      {/* Overlay for closing menu on mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 md:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
