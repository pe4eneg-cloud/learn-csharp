import Link from 'next/link';

const lessons = [
  { id: 1, title: 'Типы данных в C#', description: 'Разбираем int, float, string, bool и другие типы на примерах из Unity.' },
  { id: 2, title: 'Арифметика в C#', description: 'Операции +, -, *, /, %, инкремент, декремент и приоритет вычислений.' },
  { id: 3, title: 'Условные выражения', description: 'Операции сравнения (==, <, >) и логические операторы (&&, ||, !).' },
  { id: 4, title: 'Циклы', description: 'for, foreach, while, do...while, break и continue.' },
  { id: 5, title: 'Массивы и списки', description: 'Скоро будет доступно.', locked: true },
];

const toc = [
  { id: 'theory', label: 'Теория' },
  { id: 'big-four', label: 'Большая четверка' },
  { id: 'other-types', label: 'Остальные типы' },
  { id: 'practice', label: 'Практика в Unity' },
  { id: 'video', label: 'Видеоурок' },
];

const cheatSheet = [
  { type: 'int', desc: 'целые числа', example: 'int hp = 100;' },
  { type: 'float', desc: 'дробные числа', example: 'float speed = 5.5f;', note: 'в конце обязательно f' },
  { type: 'string', desc: 'текст', example: 'string name = "Hero";', note: 'в двойных кавычках' },
  { type: 'bool', desc: 'true / false', example: 'bool alive = true;' },
  { type: 'char', desc: 'один символ', example: "char c = 'A';", note: 'в одинарных кавычках' },
];

export default function Lesson1Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased">
      <div className="flex">
        <aside className="hidden lg:flex flex-col w-72 shrink-0 border-r border-slate-100 px-6 py-8 sticky top-0 h-screen overflow-y-auto">
          <Link href="/" className="text-lg font-semibold tracking-tight mb-6">
            CSharp<span className="text-slate-400">.Learn</span>
          </Link>

          <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Разделы</div>
          <nav className="flex flex-col gap-1 mb-8">
            {lessons.map((l) => (
              <Link
                key={l.id}
                href={l.locked ? '#' : `/lessons/${l.id}`}
                className={`text-sm px-3 py-2 rounded-md transition-colors ${
                  l.locked
                    ? 'text-slate-300 cursor-not-allowed'
                    : l.id === 1
                    ? 'bg-slate-50 text-slate-900 font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {String(l.id).padStart(2, '0')}. {l.title}
              </Link>
            ))}
          </nav>

          <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Содержание</div>
          <nav className="flex flex-col gap-1 mb-8">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm px-3 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">Памятка</div>
          <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100">
            <ul className="space-y-3">
              {cheatSheet.map((item) => (
                <li key={item.type} className="text-sm">
                  <div className="flex items-baseline gap-2">
                    <code className="font-mono text-blue-600 font-semibold">{item.type}</code>
                    <span className="text-slate-500 text-xs">{item.desc}</span>
                  </div>
                  <code className="block font-mono text-xs text-slate-700 mt-1 bg-white px-2 py-1 rounded border border-slate-200">
                    {item.example}
                  </code>
                  {item.note && (
                    <div className="text-xs text-amber-700 mt-1 flex items-center gap-1">
                      <span>⚠</span> {item.note}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/lessons" className="mt-auto text-sm text-slate-500 hover:text-slate-900 transition-colors">
            &larr; К списку уроков
          </Link>
        </aside>

        <article className="flex-1 min-w-0 px-8 py-16 max-w-3xl">
          <header className="mb-12">
            <div className="text-sm font-mono text-slate-400 mb-3">Урок 01</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Типы данных в C#</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Разбираем, какие бывают типы данных, зачем они нужны и как их применять на практике в Unity.
            </p>
          </header>

          <section id="theory" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Теория</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Представь, что переменная — это коробка для хранения данных. <strong>Тип данных</strong> — это маркировка на этой коробке.
              Она строго определяет, что внутрь можно положить, а что нет. В C# нельзя случайно записать текст в коробку для чисел —
              компилятор просто не даст запустить программу. Это называется строгой типизацией.
            </p>
          </section>

          <section id="big-four" className="mb-12 scroll-mt-8">
            <h3 className="text-xl font-semibold mb-4">Большая четверка</h3>
            <p className="text-slate-700 leading-relaxed mb-4">Именно с этими типами ты будешь работать в Unity чаще всего:</p>
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">int</code> — целые числа. Идеально для здоровья, патронов, очков.
                Пример: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">int health = 100;</code>
              </li>
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">float</code> — дробные числа. Для координат и скорости.
                <strong>Важно:</strong> в конце всегда ставь букву <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">f</code>.
                Пример: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">float speed = 5.5f;</code>
              </li>
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">string</code> — текст. Всегда в двойных кавычках.
                Пример: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">string name = "Hero";</code>
              </li>
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">bool</code> — логический тип. Только true или false.
                Пример: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">bool isAlive = true;</code>
              </li>
            </ul>
          </section>

          <section id="other-types" className="mb-12 scroll-mt-8">
            <h3 className="text-xl font-semibold mb-4">Остальные типы</h3>
            <p className="text-slate-700 leading-relaxed mb-4">Если int не подходит, есть его "братья":</p>
            <ul className="space-y-2 text-slate-700 leading-relaxed">
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">byte</code> (0–255) и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">sbyte</code> (-128–127) — 1 байт.</li>
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">short</code> и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">ushort</code> — 2 байта.</li>
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">long</code> и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">ulong</code> — 8 байт, для гигантских чисел.</li>
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">double</code> — более точный, чем float (8 байт).</li>
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">decimal</code> — самый точный (16 байт), используется в финансах.</li>
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">char</code> — один символ в одинарных кавычках: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">char c = 'A';</code></li>
              <li><code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">object</code> — универсальный тип, может хранить что угодно.</li>
            </ul>
          </section>

          <section id="practice" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Практика в Unity</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Создадим скрипт с характеристиками персонажа и посмотрим, как переменные разных типов ведут себя в редакторе.
            </p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`using UnityEngine;

public class PlayerStats : MonoBehaviour
{
    public int health = 100;
    public float speed = 5.5f;
    public string playerName = "Новичок";
    public bool isInvincible = false;

    void Start()
    {
        Debug.Log($"Имя: {playerName}");
        Debug.Log($"Здоровье: {health}");
        Debug.Log($"Скорость: {speed}");
        Debug.Log($"Бессмертие: {isInvincible}");
    }
}`}</pre>
            </div>
            <ol className="space-y-3 text-slate-700 leading-relaxed">
              <li><strong>1.</strong> Создай в Unity новый C# скрипт <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">PlayerStats</code>.</li>
              <li><strong>2.</strong> Вставь код выше и сохрани.</li>
              <li><strong>3.</strong> Создай на сцене объект (3D Object → Cube) и перетащи скрипт на него.</li>
              <li><strong>4.</strong> Открой Inspector — увидишь все четыре переменные. Меняй их прямо там.</li>
              <li><strong>5.</strong> Нажми Play и посмотри консоль внизу — там появятся сообщения из Debug.Log.</li>
            </ol>
          </section>

          <section id="video" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Видеоурок</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-black">
              <iframe
                src="https://www.youtube.com/embed/Tt_NUU0ZpQA"
                title="Урок 1. Типы данных в C#"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </section>

          <nav className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/lessons" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              &larr; К списку уроков
            </Link>
            <Link href="/lessons/2" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Следующий урок: Арифметика &rarr;
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}