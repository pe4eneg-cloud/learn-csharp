import Link from 'next/link';

const lessons = [
  { id: 1, title: 'Типы данных в C#', description: 'Разбираем int, float, string, bool и другие типы на примерах из Unity.' },
  { id: 2, title: 'Арифметика в C#', description: 'Операции +, -, *, /, %, инкремент, декремент и приоритет вычислений.' },
  { id: 3, title: 'Операторы и выражения', description: 'Условия if/else, циклы for и while, логические операторы.' },
  { id: 4, title: 'Массивы и списки', description: 'Скоро будет доступно.', locked: true },
];

const toc = [
  { id: 'theory', label: 'Что такое операции' },
  { id: 'basic', label: 'Плюс, минус, умножить, разделить' },
  { id: 'division-trap', label: 'Ловушка деления' },
  { id: 'remainder', label: 'Остаток от деления' },
  { id: 'plusplus', label: '++ и -- (быстрое +1 и -1)' },
  { id: 'priority', label: 'Порядок действий' },
  { id: 'practice', label: 'Практика в Unity' },
  { id: 'video', label: 'Видеоурок' },
];

const cheatSheet = [
  { op: '+', desc: 'сложить', example: 'int hp = 50 + 20;', note: 'можно и строки: "Hi" + "!"' },
  { op: '-', desc: 'вычесть', example: 'int hp = 100 - 25;' },
  { op: '*', desc: 'умножить', example: 'int dmg = 10 * 3;' },
  { op: '/', desc: 'разделить', example: 'int share = 100 / 4;', note: 'int / int = int (без дроби!)' },
  { op: '%', desc: 'остаток', example: 'int rem = 10 % 3; // 1', note: 'полезно для чётности' },
  { op: '++', desc: 'плюс один', example: 'lives++;', note: 'то же что lives = lives + 1' },
  { op: '--', desc: 'минус один', example: 'lives--;', note: 'то же что lives = lives - 1' },
];

export default function Lesson2Page() {
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
                    : l.id === 2
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

          <Link href="/lessons" className="mt-auto text-sm text-slate-500 hover:text-slate-900 transition-colors">
            &larr; К списку уроков
          </Link>
        </aside>

        <article className="flex-1 min-w-0 px-8 py-16 max-w-3xl">
          <header className="mb-12">
            <div className="text-sm font-mono text-slate-400 mb-3">Урок 02</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Арифметика в C#</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Считаем урон, делим лут, ускоряем персонажа. Разбираем все математические операции
              и одну главную ловушку, в которую попадают все новички.
            </p>
          </header>

          <section id="theory" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Что такое операции?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              В прошлом уроке мы научились создавать переменные — коробки с данными.
              Но просто хранить числа скучно. С ними нужно что-то <strong>делать</strong>: складывать урон,
              вычитать здоровье, умножать скорость на время.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Вот это "делать" и называется <strong>операцией</strong>. А числа, с которыми мы работаем — <strong>операндами</strong>.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-2">Простой пример из жизни:</p>
              <p className="text-slate-700 font-mono text-sm">
                <span className="text-blue-600">5</span> <span className="text-slate-400">+</span> <span className="text-blue-600">3</span> <span className="text-slate-400">=</span> <span className="text-blue-600">8</span>
              </p>
              <p className="text-slate-700 text-sm mt-2">
                Здесь <strong>5</strong> и <strong>3</strong> — операнды (с чем работаем),
                а <strong>+</strong> — операция (что делаем).
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed">
              В C# операции бывают <strong>бинарные</strong> (нужно два числа, как <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">a + b</code>)
              и <strong>унарные</strong> (нужно одно число, как <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">x++</code>).
              Давай разберём все по порядку.
            </p>
          </section>

          <section id="basic" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Плюс, минус, умножить, разделить</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Это та самая школьная математика, только знаки чуть другие.
              Умножение — звёздочка <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">*</code>,
              деление — слэш <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">/</code>.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Складываем урон от двух ударов
int hit1 = 25;
int hit2 = 30;
int totalDamage = hit1 + hit2;  // 55

// Вычитаем здоровье после удара
int health = 100;
health = health - totalDamage;  // 45

// Умножаем: критический удар x3
int critDamage = hit1 * 3;  // 75

// Делим лут на троих игроков
int loot = 100;
int perPlayer = loot / 3;  // 33`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Видишь строчку <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">health = health - totalDamage</code>?
              Это очень частый приём: мы берём старое значение переменной, что-то с ним делаем
              и записываем результат обратно. Позже узнаем, как писать это короче.
            </p>
          </section>

          <section id="division-trap" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Главная ловушка: деление целых чисел</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Это ошибка №1 у всех, кто начинает учить C#. Смотри внимательно:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`double result = 10 / 4;
Debug.Log(result);  // выведет 2, а не 2.5!`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Почему так? Потому что <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">10</code> и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">4</code> — это целые числа (int).
              C# видит: "Ага, оба целые — значит и результат будет целый". Дробная часть просто отбрасывается.
              И только потом результат (уже целая двойка) кладётся в переменную <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">double</code>.
            </p>

            <p className="text-slate-700 leading-relaxed mb-4">Как это исправить? Есть три способа:</p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Способ 1: добавить точку хотя бы к одному числу
double a = 10.0 / 4;    // 2.5 ✓

// Способ 2: использовать переменные типа double/float
double x = 10;
double y = 4;
double b = x / y;       // 2.5 ✓

// Способ 3: привести тип (пока просто запомни)
double c = (double)10 / 4;  // 2.5 ✓`}</pre>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>Запомни правило:</strong> если хочешь получить дробный результат —
                хотя бы одно из чисел в делении должно быть дробным (с точкой).
                Иначе C# отбросит всё после запятой.
              </p>
            </div>
          </section>

          <section id="remainder" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Остаток от деления (%)</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Знак <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">%</code> возвращает <strong>остаток</strong> от деления.
              В школе это называлось "деление с остатком".
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-2">Пример: <code className="font-mono">10 % 3</code></p>
              <p className="text-slate-700 text-sm">
                10 делим на 3. Тройка помещается в десятку <strong>3 раза</strong> (3×3=9).
                Остаток: 10 - 9 = <strong>1</strong>.
                Значит <code className="font-mono">10 % 3 = 1</code>.
              </p>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`int a = 10 % 3;   // 1  (10 = 3*3 + 1)
int b = 15 % 5;   // 0  (делится нацело)
int c = 7 % 2;    // 1  (нечётное число)`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">Где это полезно в играх?</p>
            <ul className="space-y-2 text-slate-700 leading-relaxed mb-6">
              <li><strong>Проверка чётности:</strong> если <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">number % 2 == 0</code> — число чётное.</li>
              <li><strong>Цикличность:</strong> чтобы сделать "карусель" из 4 предметов, используем <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">index % 4</code> — всегда будет число от 0 до 3.</li>
              <li><strong>Таймеры:</strong> "каждую 10-ю секунду" — проверяем <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">time % 10 == 0</code>.</li>
            </ul>
          </section>

          <section id="plusplus" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">++ и -- (быстрое +1 и -1)</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              В играх постоянно нужно прибавлять или отнимать единицу: +1 жизнь, -1 патрон, +1 уровень.
              Писать каждый раз <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">lives = lives + 1</code> — долго.
              Поэтому придумали короткий способ:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`int lives = 3;

lives++;   // стало 4 (то же что lives = lives + 1)
lives--;   // стало 3 (то же что lives = lives - 1)`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Есть два варианта записи: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">x++</code> (знак после) и <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">++x</code> (знак до).
              Если ты просто хочешь изменить переменную — разницы нет.
              Но если результат сразу используется в другом месте — разница есть:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`int x = 5;

int a = x++;  // a = 5, x = 6  (сначала отдали старое значение, потом увеличили)
int y = 5;
int b = ++y;  // b = 6, y = 6  (сначала увеличили, потом отдали)`}</pre>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong>Простое правило для запоминания:</strong>
                если знак <strong>спереди</strong> (<code className="font-mono">++x</code>) — сначала измени, потом используй.
                Если знак <strong>сзади</strong> (<code className="font-mono">x++</code>) — сначала используй, потом измени.
              </p>
            </div>
          </section>

          <section id="priority" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Порядок действий</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Помнишь в школе: сначала умножение и деление, потом сложение и вычитание?
              В C# работает то же самое правило.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-3 font-semibold">Приоритет от высшего к низшему:</p>
              <ol className="space-y-1 text-slate-700 text-sm">
                <li><strong>1.</strong> <code className="font-mono">++</code> и <code className="font-mono">--</code> (инкремент/декремент)</li>
                <li><strong>2.</strong> <code className="font-mono">*</code>, <code className="font-mono">/</code>, <code className="font-mono">%</code> (умножение, деление, остаток)</li>
                <li><strong>3.</strong> <code className="font-mono">+</code>, <code className="font-mono">-</code> (сложение, вычитание)</li>
              </ol>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">Разберём пример из игры — расчёт урона:</p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`int baseDamage = 10;
int critMultiplier = 3;
int armor = 5;

int finalDamage = baseDamage + baseDamage * critMultiplier - armor;
// Считаем по порядку:
// 1) baseDamage * critMultiplier = 30
// 2) baseDamage + 30 = 40
// 3) 40 - armor = 35
// Итог: finalDamage = 35`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Если хочешь изменить порядок — используй скобки, как в обычной математике:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Сначала складываем, потом умножаем
int total = (baseDamage + armor) * critMultiplier;  // (10+5)*3 = 45`}</pre>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong> Совет:</strong> если формула сложная — не жадничай со скобками.
                Код <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">(a + b) * c</code> читается легче,
                чем <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">a + b * c</code>, даже если результат одинаковый.
              </p>
            </div>
          </section>

          <section id="practice" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Практика в Unity</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Сделаем простой калькулятор урона. Персонаж бьёт врага, учитываем крит и броню,
              и выводим результат в консоль.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`using UnityEngine;

public class DamageCalculator : MonoBehaviour
{
    public int baseDamage = 20;
    public int critMultiplier = 3;
    public int armor = 7;
    public bool isCrit = true;

    void Start()
    {
        int damage = baseDamage;

        // Если крит — умножаем урон
        if (isCrit)
        {
            damage *= critMultiplier;  // короткая запись: damage = damage * critMultiplier
        }

        // Вычитаем броню
        damage -= armor;

        // Урон не может быть меньше нуля
        if (damage < 0)
        {
            damage = 0;
        }

        Debug.Log($"Базовый урон: {baseDamage}");
        Debug.Log($"Крит: {isCrit}");
        Debug.Log($"Броня: {armor}");
        Debug.Log($"Итоговый урон: {damage}");
    }
}`}</pre>
            </div>

            <ol className="space-y-3 text-slate-700 leading-relaxed">
              <li><strong>1.</strong> Создай скрипт <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">DamageCalculator</code> и повесь на любой объект.</li>
              <li><strong>2.</strong> В Inspector поменяй значения: поставь <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">baseDamage = 50</code>, <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">armor = 100</code>.</li>
              <li><strong>3.</strong> Нажми Play и открой консоль — посмотри, как считается урон.</li>
              <li><strong>4.</strong> Попробуй выключить <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">isCrit</code> — урон станет меньше.</li>
              <li><strong>5.</strong> Поменяй <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">baseDamage</code> на дробное (например 20.5) — увидишь ошибку компиляции. Почему? Потому что тип <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">int</code> не принимает дроби. Вспомни урок 1!</li>
            </ol>
          </section>

          <section id="video" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Видеоурок</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500">
              <p>Видео будет добавлено после записи</p>
            </div>
          </section>

          <nav className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/lessons/1" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              &larr; Предыдущий: Типы данных
            </Link>
            <Link href="/lessons/3" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              Следующий: Операторы &rarr;
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}