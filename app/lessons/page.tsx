import Link from 'next/link';

const lessons = [
  { id: 1, title: 'Типы данных в C#', description: 'Разбираем int, float, string, bool и другие типы на примерах из Unity.' },
  { id: 2, title: 'Арифметика в C#', description: 'Операции +, -, *, /, %, инкремент, декремент и приоритет вычислений.' },
  { id: 3, title: 'Условные выражения', description: 'Операции сравнения (==, <, >) и логические операторы (&&, ||, !).' },
  { id: 4, title: 'Циклы', description: 'for, foreach, while, do...while, break и continue.' },
  { id: 5, title: 'Методы', description: 'Создаём свои методы, параметры, возвращаемые значения.' },
  { id: 6, title: 'Массивы и списки', description: 'Скоро будет доступно.', locked: true },
];

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="flex">
        <aside className="hidden lg:flex flex-col w-72 shrink-0 border-r border-slate-100 px-6 py-8 sticky top-0 h-screen overflow-y-auto">
          <Link href="/" className="text-lg font-semibold tracking-tight mb-6">
            CSharp<span className="text-slate-400">.Learn</span>
          </Link>
          <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Уроки</div>
          <nav className="flex flex-col gap-1 mb-8">
            {lessons.map((l) => (
              <Link
                key={l.id}
                href={l.locked ? '#' : `/lessons/${l.id}`}
                className={`text-sm px-3 py-2 rounded-md transition-colors ${
                  l.locked
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {String(l.id).padStart(2, '0')}. {l.title}
              </Link>
            ))}
          </nav>
          <Link 
            href="/" 
            className="mt-auto bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors text-center"
          >
            &larr; На главную
          </Link>
        </aside>

        <div className="flex-1 min-w-0">
          <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-100 lg:hidden">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              CSharp<span className="text-slate-400">.Learn</span>
            </Link>
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
              &larr; Главная
            </Link>
          </nav>

          <section className="px-8 py-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Все уроки</h1>
            <p className="text-lg text-slate-600">Курс по основам C# с практическими примерами в Unity.</p>
          </section>

          <section className="px-8 pb-24 max-w-3xl">
            <div className="border-t border-slate-200">
              {lessons.map((lesson) => (
                <article key={lesson.id} className="border-b border-slate-200 py-8 flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-slate-400">{String(lesson.id).padStart(2, '0')}</span>
                      {lesson.locked && <span className="text-xs px-2 py-0.5 bg-slate-100 text-slate-500 rounded">В разработке</span>}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{lesson.title}</h2>
                    <p className="text-slate-600">{lesson.description}</p>
                  </div>
                  <div className="shrink-0 pt-1">
                    {lesson.locked ? (
                      <span className="text-sm text-slate-400">—</span>
                    ) : (
                      <Link href={`/lessons/${lesson.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Открыть &rarr;
                      </Link>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}