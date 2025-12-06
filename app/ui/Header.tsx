'use client';

export default function Header() {
  return (
    <header id="nav" className="header flex items-center">
      <div className="title" onClick={() => (window.location.href = '/')}>
        ESCAPE
      </div>
      <div className="ml-auto">
        <a href="">Todo...</a>
      </div>
    </header>
  );
}
