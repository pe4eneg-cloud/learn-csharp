import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      
      {/* Навигация */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-8 max-w-7xl mx-auto border-b border-slate-100">
        <div className="text-lg font-semibold tracking-tight">
          CSharp<span className="text-slate-400">.Learn</span>
        </div>
        <Link
          href="/lessons"
          className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
        >
          Все уроки &rarr;
        </Link>
      </nav>

      {/* Главный экран */}
      <section className="px-6 md:px-12 py-24 md:py-32 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
          Основы C# с примерами из Unity
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
          Освойте фундамент объектно-ориентированного программирования без скучной зубрежки. 
          Мы разбираем классы, конструкторы и методы C#, подкрепляя каждую теорию наглядными 
          примерами из Unity.
        </p>
        <Link
          href="/lessons"
          className="inline-flex items-center bg-slate-900 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-slate-800 transition-colors"
        >
          Начать обучение
        </Link>
      </section>

      {/* Блок преимуществ (строгая типографика) */}
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto border-t border-slate-100">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          
          <div className="space-y-4">
            <span className="text-sm font-mono text-slate-400">01</span>
            <h3 className="text-lg font-semibold">Понятная теория</h3>
            <p className="text-slate-600 leading-relaxed">
              Разбираем сложные концепции ООП простым языком, адаптированным для школьников и студентов.
            </p>
          </div>
          
          <div className="space-y-4">
            <span className="text-sm font-mono text-slate-400">02</span>
            <h3 className="text-lg font-semibold">Практика в Unity</h3>
            <p className="text-slate-600 leading-relaxed">
              Каждая тема подкрепляется видеоуроками, где мы пишем код и сразу видим результат в редакторе.
            </p>
          </div>
          
          <div className="space-y-4">
            <span className="text-sm font-mono text-slate-400">03</span>
            <h3 className="text-lg font-semibold">Чистый код</h3>
            <p className="text-slate-600 leading-relaxed">
              Учимся писать правильные классы и конструкторы, используя стандарты настоящих разработчиков.
            </p>
          </div>

        </div>
      </section>

      {/* Подвал */}
     <footer className="px-6 md:px-12 py-10 max-w-7xl mx-auto border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
        <p>© 2026 CSharp.Learn. Учебный проект.</p>
        
        <a 
          href="https://t.me/OblivionEmbrace1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-medium text-slate-600 hover:text-blue-600 transition-colors"
        >
          Связаться в Telegram →
        </a>
      </footer>
      </main>
  );
}