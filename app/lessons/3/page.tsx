import Link from 'next/link';

const lessons = [
  { id: 1, title: 'Типы данных в C#', description: 'Разбираем int, float, string, bool и другие типы на примерах из Unity.' },
  { id: 2, title: 'Арифметика в C#', description: 'Операции +, -, *, /, %, инкремент, декремент и приоритет вычислений.' },
  { id: 3, title: 'Условные выражения', description: 'Операции сравнения (==, <, >) и логические операторы (&&, ||, !).' },
  { id: 4, title: 'Циклы', description: 'for, foreach, while, do...while, break и continue.' },
  { id: 5, title: 'Массивы и списки', description: 'Скоро будет доступно.', locked: true },
];

const toc = [
  { id: 'theory', label: 'Что такое условные выражения' },
  { id: 'comparison', label: 'Операции сравнения' },
  { id: 'logical', label: 'Логические операторы' },
  { id: 'lazy', label: 'Разница между | и ||' },
  { id: 'practice', label: 'Практика в Unity' },
  { id: 'video', label: 'Видеоурок' },
];

const cheatSheet = [
  { op: '==', desc: 'равно', example: 'if (health == 0)', note: 'не путать с = (присваивание!)' },
  { op: '!=', desc: 'не равно', example: 'if (name != "Admin")' },
  { op: '< >', desc: 'меньше / больше', example: 'if (age < 18)' },
  { op: '<= >=', desc: 'меньше или равно / больше', example: 'if (score >= 100)' },
  { op: '&&', desc: 'И (оба true)', example: 'if (alive && hasAmmo)', note: 'ленивый — остановится на первом false' },
  { op: '||', desc: 'ИЛИ (хотя бы один)', example: 'if (key || code)', note: 'ленивый — остановится на первом true' },
  { op: '!', desc: 'НЕ (отрицание)', example: 'if (!isDead)', note: 'переворачивает true/false' },
];

export default function Lesson3Page() {
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
                    : l.id === 3
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
                <li key={item.op} className="text-sm">
                  <div className="flex items-baseline gap-2">
                    <code className="font-mono text-blue-600 font-semibold">{item.op}</code>
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

          <Link href="/lessons" className="mt-auto bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors text-center">
            &larr; На главную
          </Link>
        </aside>

        <article className="flex-1 min-w-0 px-8 py-16 max-w-3xl">
          <header className="mb-12">
            <div className="text-sm font-mono text-slate-400 mb-3">Урок 03</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Условные выражения</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Учим программу задавать вопросы: "здоровье равно нулю?", "есть ли патроны?", "жив ли враг?".
              Разбираем операции сравнения и логические операторы.
            </p>
          </header>

          <section id="theory" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Что такое условные выражения?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              В прошлом уроке мы считали: складывали урон, делили лут. Результатом всегда было число.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Сегодня другой тип операций — те, которые возвращают не число, а <strong>ответ "да" или "нет"</strong>.
              То есть <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">true</code> или <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">false</code>.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-3">Примеры из жизни:</p>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• "5 больше 3?" → <strong>true</strong> (да, больше)</li>
                <li>• "10 равно 7?" → <strong>false</strong> (нет, не равно)</li>
                <li>• "здоровье меньше нуля?" → <strong>false</strong> (если health = 50)</li>
              </ul>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Такие выражения называются <strong>условными</strong>. Они бывают двух видов:
              <strong> операции сравнения</strong> (сравниваем два значения) и
              <strong> логические операторы</strong> (объединяем несколько условий).
            </p>
          </section>

          <section id="comparison" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Операции сравнения</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Их шесть. Все они работают одинаково: берут два значения, сравнивают и возвращают true или false.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">==</code> — равно
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Проверяет, равны ли два значения. <strong>Важно:</strong> не путай с одним знаком <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">=</code> — это присваивание (положить значение в переменную).
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`int a = 10;
int b = 4;

bool c = (a == b);   // false  (10 не равно 4)
bool d = (a == 10);  // true   (10 равно 10)`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">!=</code> — не равно
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Работает наоборот: возвращает true, если значения <strong>разные</strong>.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`int a = 10;
int b = 4;

bool c = (a != b);   // true   (10 не равно 4)
bool d = (a != 10);  // false  (10 равно 10, значит "не равно" — ложь)`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">&lt; &gt;</code> — меньше / больше
                </h3>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`int a = 10;
int b = 4;

bool c = (a < b);    // false  (10 не меньше 4)
bool d = (a > b);    // true   (10 больше 4)`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">&lt;= &gt;=</code> — меньше или равно / больше или равно
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Полезно, когда нужно включить пограничное значение. Например, "проходной балл — 60 или выше".
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`int score = 60;

bool passed = (score >= 60);   // true  (60 >= 60 — да)
bool failed = (score < 60);    // false (60 не меньше 60)`}</pre>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-8">
              <p className="text-sm text-amber-900">
                <strong>⚠ Самая частая ошибка новичков:</strong> написать <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">=</code> вместо <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">==</code>.
                <br /><br />
                <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">if (health = 0)</code> — это <strong>ошибка</strong>. Ты кладёшь 0 в health, а не проверяешь.
                <br />
                <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">if (health == 0)</code> — это <strong>правильно</strong>. Ты спрашиваешь "health равен нулю?".
              </p>
            </div>
          </section>

          <section id="logical" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Логические операторы</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Операции сравнения отвечают на один вопрос. А если нужно проверить сразу несколько?
              Например: "игрок жив И у него есть патроны". Для этого есть логические операторы.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">&amp;&amp;</code> — И
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Возвращает true, только если <strong>оба</strong> условия true. Хотя бы одно false — результат false.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`bool isAlive = true;
int ammo = 15;

// Можем стрелять? Нужно быть живым И иметь патроны
bool canShoot = isAlive && (ammo > 0);  // true

ammo = 0;
canShoot = isAlive && (ammo > 0);  // false (патронов нет)`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">||</code> — ИЛИ
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Возвращает true, если <strong>хотя бы одно</strong> условие true. Оба false — только тогда false.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`bool hasKeyCard = false;
bool knowsPassword = true;

// Дверь откроется, если есть ключ-карта ИЛИ знаем пароль
bool canOpen = hasKeyCard || knowsPassword;  // true`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">!</code> — НЕ (отрицание)
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Переворачивает значение: true становится false, false становится true. Ставится перед переменной.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`bool isDead = false;

// "Если НЕ мёртв" — то есть если жив
if (!isDead)
{
    Debug.Log("Игрок жив, продолжаем игру.");
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">^</code> — исключающее ИЛИ
                </h3>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Возвращает true, если <strong>только одно</strong> из условий true (но не оба сразу). В играх используется редко, но знать полезно.
                </p>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto">
<pre className="text-sm font-mono leading-relaxed">{`bool a = true;
bool b = false;

bool c = a ^ b;   // true  (одно true, другое false)
bool d = a ^ true; // false (оба true — исключающее ИЛИ не срабатывает)`}</pre>
                </div>
              </div>
            </div>
          </section>

          <section id="lazy" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Разница между | и || (а также & и &&)</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Ты мог заметить: есть одинарные знаки (<code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">|</code> и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">&amp;</code>) и двойные (<code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">||</code> и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">&amp;&amp;</code>).
              Они похожи, но работают по-разному.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-3 font-semibold">Двойные знаки (<code className="font-mono">||</code> и <code className="font-mono">&amp;&amp;</code>) — "ленивые":</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Они проверяют условия по порядку и <strong>останавливаются</strong>, как только результат становится понятен.
              </p>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-5 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Пример с || (ИЛИ)
bool result = (5 > 6) || (4 < 6);
// Шаг 1: 5 > 6 → false. Результата ещё нет, идём дальше.
// Шаг 2: 4 < 6 → true. Нашли true! Дальше проверять не нужно.
// Итог: true`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Почему это важно? Представь, что второе условие — это вызов тяжёлой функции, которая грузит файл с диска.
              С <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">||</code> она даже не запустится, если первое условие уже true.
              С одинарным <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">|</code> — запустится всегда, даже если результат уже ясен.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-3 font-semibold">Одинарные знаки (<code className="font-mono">|</code> и <code className="font-mono">&amp;</code>) — проверяют всё:</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Они всегда вычисляют оба условия, даже если результат уже понятен. Используются редко — в основном для побитовых операций над числами.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong> Правило:</strong> в 99% случаев используй двойные знаки — <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">&&</code> и <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">||</code>.
                Они быстрее и безопаснее. Одинарные оставь для специальных задач.
              </p>
            </div>
          </section>

          <section id="practice" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Практика в Unity</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Сделаем систему проверки: может ли игрок открыть дверь? Нужно иметь ключ-карту ИЛИ знать пароль,
              и при этом быть живым.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`using UnityEngine;

public class DoorChecker : MonoBehaviour
{
    public bool isAlive = true;
    public bool hasKeyCard = false;
    public bool knowsPassword = true;
    public int securityLevel = 2;  // 1 = низкий, 2 = средний, 3 = высокий

    void Start()
    {
        // Условие 1: игрок должен быть жив
        if (!isAlive)
        {
            Debug.Log("Игрок мёртв. Доступ запрещён.");
            return;
        }

        // Условие 2: нужен ключ-карта ИЛИ пароль
        bool hasAccess = hasKeyCard || knowsPassword;

        // Условие 3: уровень безопасности не слишком высокий
        bool levelOk = (securityLevel <= 2);

        // Финальная проверка
        if (hasAccess && levelOk)
        {
            Debug.Log("Дверь открыта! Добро пожаловать.");
        }
        else
        {
            Debug.Log("Доступ запрещён. Проверь условия.");
        }
    }
}`}</pre>
            </div>

            <ol className="space-y-3 text-slate-700 leading-relaxed">
              <li><strong>1.</strong> Создай скрипт <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">DoorChecker</code> и повесь на объект.</li>
              <li><strong>2.</strong> В Inspector поиграй с настройками: выключи <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">isAlive</code> — доступ сразу запретится.</li>
              <li><strong>3.</strong> Включи <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">hasKeyCard</code> и выключи <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">knowsPassword</code> — доступ всё равно будет (сработает ИЛИ).</li>
              <li><strong>4.</strong> Поставь <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">securityLevel = 3</code> — доступ запретится, даже если есть ключ.</li>
              <li><strong>5.</strong> Попробуй заменить <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">||</code> на <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">|</code> в коде. Результат не изменится, но теперь ты знаешь, что под капотом работает по-другому.</li>
            </ol>
          </section>

          <section id="video" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Видеоурок</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500">
              <p>Видео будет добавлено после записи</p>
            </div>
          </section>

          <nav className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/lessons/2" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              &larr; Предыдущий: Арифметика
            </Link>
            <Link href="/lessons/4" className="text-sm text-slate-400 cursor-not-allowed">
              Следующий урок скоро &rarr;
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}