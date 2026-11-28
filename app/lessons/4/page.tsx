'use client';

import Link from 'next/link';
import { useState } from 'react';

const lessons = [
  { id: 1, title: 'Типы данных в C#', description: 'Разбираем int, float, string, bool и другие типы на примерах из Unity.' },
  { id: 2, title: 'Арифметика в C#', description: 'Операции +, -, *, /, %, инкремент, декремент и приоритет вычислений.' },
  { id: 3, title: 'Условные выражения', description: 'Операции сравнения (==, <, >) и логические операторы (&&, ||, !).' },
  { id: 4, title: 'Циклы', description: 'for, foreach, while, do...while, break и continue.' },
  { id: 5, title: 'Массивы и списки', description: 'Скоро будет доступно.', locked: true },
];

const toc = [
  { id: 'theory', label: 'Зачем нужны циклы' },
  { id: 'for', label: 'Цикл for' },
  { id: 'foreach', label: 'Цикл foreach' },
  { id: 'while', label: 'Циклы while и do...while' },
  { id: 'break-continue', label: 'break и continue' },
  { id: 'simulator', label: 'Попробуй сам' },
  { id: 'practice', label: 'Практика в Unity' },
  { id: 'quiz', label: 'Мини-тест' },
  { id: 'video', label: 'Видеоурок' },
];

const cheatSheet = [
  { op: 'for', desc: 'цикл со счётчиком', example: 'for (int i = 0; i < 10; i++)', note: 'когда знаешь сколько раз' },
  { op: 'foreach', desc: 'перебор коллекции', example: 'foreach (var item in list)', note: 'для массивов и списков' },
  { op: 'while', desc: 'пока условие true', example: 'while (health > 0)', note: 'проверка ДО выполнения' },
  { op: 'do...while', desc: 'сделай, потом проверь', example: 'do { ... } while (x > 0)', note: 'выполнится хотя бы 1 раз' },
  { op: 'break', desc: 'выйти из цикла', example: 'if (x == 5) break;', note: 'цикл останавливается' },
  { op: 'continue', desc: 'пропустить итерацию', example: 'if (x == 5) continue;', note: 'переход к следующей' },
];

export default function Lesson4Page() {
  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(5);
  const [step, setStep] = useState(1);
  const [output, setOutput] = useState<string[]>([]);

  const runSimulation = () => {
    const result: string[] = [];
    for (let i = start; i < end; i += step) {
      result.push(`i = ${i}`);
    }
    if (result.length === 0) {
      result.push('Цикл не выполнился ни разу (условие сразу false)');
    }
    setOutput(result);
  };

  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const quiz = [
    {
      q: 'Сколько раз выполнится цикл: for (int i = 0; i < 3; i++)?',
      options: ['2 раза', '3 раза', '4 раза', 'Бесконечно'],
      correct: '3 раза',
    },
    {
      q: 'Какой цикл выполнится хотя бы один раз, даже если условие false?',
      options: ['for', 'while', 'do...while', 'foreach'],
      correct: 'do...while',
    },
    {
      q: 'Что делает оператор break?',
      options: ['Пропускает текущую итерацию', 'Выходит из цикла полностью', 'Перезапускает цикл', 'Ничего'],
      correct: 'Выходит из цикла полностью',
    },
    {
      q: 'Какой цикл лучше использовать для перебора массива?',
      options: ['for', 'foreach', 'while', 'do...while'],
      correct: 'foreach',
    },
  ];

  const checkAnswer = (qIndex: number, answer: string) => {
    const isCorrect = answer === quiz[qIndex].correct;
    setQuizAnswers({ ...quizAnswers, [qIndex]: answer });
    setQuizResults({ ...quizResults, [qIndex]: isCorrect });
  };

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
                    : l.id === 4
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

          <Link 
            href="/" 
            className="mt-auto bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors text-center"
          >
            &larr; На главную
          </Link>
        </aside>

        <article className="flex-1 min-w-0 px-8 py-16 max-w-3xl">
          <header className="mb-12">
            <div className="text-sm font-mono text-slate-400 mb-3">Урок 04</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Циклы в C#</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Учим программу повторять действия. Разбираем for, foreach, while, do...while,
              а также break и continue. В конце — интерактивный симулятор и мини-тест.
            </p>
          </header>

          <section id="theory" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Зачем нужны циклы?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Представь, что тебе нужно заспавнить 100 врагов. Писать 100 строк кода? Нет.
              Цикл сделает это за тебя — выполнит одно и то же действие нужное количество раз.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              В C# есть четыре типа циклов. Каждый подходит для своей задачи:
            </p>
            <ul className="space-y-3 text-slate-700 leading-relaxed">
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">for</code> — когда знаешь, <strong>сколько раз</strong> повторить. Например, "заспавнить 10 врагов".
              </li>
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">foreach</code> — когда нужно <strong>перебрать коллекцию</strong>. Например, "пройтись по всем предметам в инвентаре".
              </li>
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">while</code> — когда повторяем, <strong>пока условие true</strong>. Например, "пока здоровье больше нуля — атакуй".
              </li>
              <li>
                <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">do...while</code> — как while, но <strong>сначала делает, потом проверяет</strong>. Выполнится хотя бы один раз.
              </li>
            </ul>
          </section>

          <section id="for" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Цикл for</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Самый популярный цикл. Состоит из трёх частей:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 font-mono text-sm mb-3">
                for (<span className="text-blue-600">инициализация</span>; <span className="text-green-600">условие</span>; <span className="text-purple-600">шаг</span>)
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• <strong>Инициализация</strong> — создаём счётчик (выполняется 1 раз)</li>
                <li>• <strong>Условие</strong> — пока true, цикл работает</li>
                <li>• <strong>Шаг</strong> — что делать после каждой итерации (обычно i++)</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Заспавнить 5 врагов
for (int i = 1; i <= 5; i++)
{
    Debug.Log($"Враг #{i} появился!");
}

// Выведет:
// Враг #1 появился!
// Враг #2 появился!
// ...
// Враг #5 появился!`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">Как это работает пошагово:</p>
            <ol className="space-y-2 text-slate-700 leading-relaxed mb-6">
              <li><strong>1.</strong> Создаём <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">i = 1</code></li>
              <li><strong>2.</strong> Проверяем: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">i &lt;= 5</code>? Да → выполняем блок</li>
              <li><strong>3.</strong> Делаем <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">i++</code> (i становится 2)</li>
              <li><strong>4.</strong> Снова проверяем условие. Повторяем, пока i не станет 6.</li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong> Бесконечный цикл:</strong> если условие никогда не станет false, цикл будет крутиться вечно.
                Например: <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">for (;;) { }</code> или <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">while (true) { }</code>.
                Игра зависнет!
              </p>
            </div>
          </section>

          <section id="foreach" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Цикл foreach</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Используется для перебора коллекций — массивов, списков, строк.
              Не нужно думать о счётчике, просто "возьми каждый элемент и сделай что-то".
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Перебираем все предметы в инвентаре
string[] inventory = { "Меч", "Щит", "Зелье" };

foreach (string item in inventory)
{
    Debug.Log($"Найден предмет: {item}");
}

// Выведет:
// Найден предмет: Меч
// Найден предмет: Щит
// Найден предмет: Зелье`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Можно перебирать даже строки — они состоят из символов:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`foreach (char c in "Unity")
{
    Debug.Log(c);
}

// Выведет: U, n, i, t, y (по одному символу)`}</pre>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong> Когда использовать foreach?</strong> Когда тебе не важен номер элемента,
                а нужно просто пройтись по всем. Например, "нанести урон всем врагам в списке".
              </p>
            </div>
          </section>

          <section id="while" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Циклы while и do...while</h2>
            
            <h3 className="text-xl font-semibold mb-4">while — сначала проверь, потом делай</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Цикл работает, пока условие true. Если условие сразу false — цикл не выполнится ни разу.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Наносим урон, пока враг жив
int enemyHealth = 100;
int damage = 30;

while (enemyHealth > 0)
{
    enemyHealth -= damage;
    Debug.Log($"Враг получил {damage} урона. Здоровье: {enemyHealth}");
}

Debug.Log("Враг побеждён!");`}</pre>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">do...while — сначала сделай, потом проверь</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Отличие от while: код выполнится <strong>хотя бы один раз</strong>, даже если условие false.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Меню выбора: спросим хотя бы раз
int choice;
do
{
    Debug.Log("1. Атаковать  2. Защититься  3. Сбежать");
    // choice = ... (ввод игрока)
} while (choice != 3);

Debug.Log("Игрок сбежал!");`}</pre>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong> Разница:</strong> <code className="font-mono">while</code> — "пока можешь, делай".
                <code className="font-mono">do...while</code> — "сделай хотя бы раз, потом решай".
              </p>
            </div>
          </section>

          <section id="break-continue" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">break и continue</h2>
            
            <h3 className="text-xl font-semibold mb-4">break — выйти из цикла</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Останавливает цикл полностью. Используется, когда дальше искать бессмысленно.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Ищем первого живого врага
for (int i = 0; i < enemies.Length; i++)
{
    if (enemies[i].health > 0)
    {
        Debug.Log($"Нашёл живого врага #{i}");
        break; // дальше не ищем
    }
}`}</pre>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">continue — пропустить итерацию</h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Пропускает текущий шаг и переходит к следующему. Цикл не останавливается.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Наносим урон всем, кроме союзников
foreach (var unit in units)
{
    if (unit.isAlly)
        continue; // пропускаем союзников
    
    unit.TakeDamage(10);
}`}</pre>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>⚠ Запомни:</strong> <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">break</code> — стоп, выходим.
                <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">continue</code> — пропускаем этот шаг, идём к следующему.
              </p>
            </div>
          </section>

          <section id="simulator" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Попробуй сам</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Поменяй значения и нажми "Запустить" — увидишь, как работает цикл for в реальном времени.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Начало (i =)</label>
                  <input
                    type="number"
                    value={start}
                    onChange={(e) => setStart(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Конец (i &lt;)</label>
                  <input
                    type="number"
                    value={end}
                    onChange={(e) => setEnd(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Шаг (i +=)</label>
                  <input
                    type="number"
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm"
                  />
                </div>
              </div>

              <button
                onClick={runSimulation}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mb-4"
              >
                Запустить цикл
              </button>

              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
                <div className="text-slate-400 mb-2">// Результат:</div>
                {output.map((line, i) => (
                  <div key={i} className="text-green-400">{line}</div>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-600">
              Попробуй: начало = 0, конец = 10, шаг = 2. Увидишь чётные числа от 0 до 8.
            </p>
          </section>

          <section id="practice" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Практика в Unity</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Сделаем систему волн врагов: спавним врагов циклом for, перебираем их через foreach,
              и используем break, если игрок погиб.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`using UnityEngine;

public class WaveSystem : MonoBehaviour
{
    public int enemyCount = 5;
    public int playerHealth = 100;
    public int damagePerEnemy = 25;

    void Start()
    {
        Debug.Log(" Начало волны ");

        // Спавним врагов циклом for
        for (int i = 1; i <= enemyCount; i++)
        {
            Debug.Log($"Враг #{i} появился!");

            // Игрок получает урон
            playerHealth -= damagePerEnemy;
            Debug.Log($"Здоровье игрока: {playerHealth}");

            // Если игрок погиб — выходим
            if (playerHealth <= 0)
            {
                Debug.Log("Игрок погиб! Волна провалена.");
                break;
            }
        }

        Debug.Log(" Волна завершена ");
    }
}`}</pre>
            </div>

            <ol className="space-y-3 text-slate-700 leading-relaxed">
              <li><strong>1.</strong> Создай скрипт <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">WaveSystem</code> и повесь на объект.</li>
              <li><strong>2.</strong> В Inspector поставь <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">enemyCount = 5</code>, <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">playerHealth = 100</code>, <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">damagePerEnemy = 25</code>.</li>
              <li><strong>3.</strong> Нажми Play — увидишь, как игрок получает урон от каждого врага.</li>
              <li><strong>4.</strong> Поменяй <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">damagePerEnemy = 30</code> — игрок погибнет на 4-м враге, цикл прервётся (break).</li>
              <li><strong>5.</strong> Попробуй <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">enemyCount = 100</code> — увидишь, как цикл быстро справляется с большим количеством.</li>
            </ol>
          </section>

          <section id="quiz" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Мини-тест</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Проверь, как усвоил материал. Выбери ответ — сразу увидишь, правильно или нет.
            </p>

            <div className="space-y-6">
              {quiz.map((q, qIndex) => (
                <div key={qIndex} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <p className="font-medium text-slate-900 mb-4">
                    <span className="text-slate-400 mr-2">{qIndex + 1}.</span>
                    {q.q}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option) => {
                      const isSelected = quizAnswers[qIndex] === option;
                      const isCorrect = quizResults[qIndex] && option === q.correct;
                      const isWrong = quizResults[qIndex] && isSelected && option !== q.correct;

                      return (
                        <button
                          key={option}
                          onClick={() => !quizResults[qIndex] && checkAnswer(qIndex, option)}
                          disabled={!!quizResults[qIndex]}
                          className={`w-full text-left px-4 py-3 rounded-md text-sm transition-colors ${
                            isCorrect
                              ? 'bg-green-100 text-green-900 border border-green-300'
                              : isWrong
                              ? 'bg-red-100 text-red-900 border border-red-300'
                              : isSelected
                              ? 'bg-blue-100 text-blue-900 border border-blue-300'
                              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                          } ${quizResults[qIndex] ? 'cursor-default' : 'cursor-pointer'}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                  {quizResults[qIndex] && (
                    <p className={`mt-3 text-sm font-medium ${quizResults[qIndex] ? 'text-green-700' : 'text-red-700'}`}>
                      {quizResults[qIndex] ? '✓ Правильно!' : `✗ Неправильно. Правильный ответ: ${q.correct}`}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="video" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Видеоурок</h2>
            <div className="aspect-video rounded-lg overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-500">
              <p>Видео будет добавлено после записи</p>
            </div>
          </section>

          <nav className="flex justify-between pt-8 border-t border-slate-200">
            <Link href="/lessons/3" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              &larr; Предыдущий: Условные выражения
            </Link>
            <Link href="/lessons/5" className="text-sm text-slate-400 cursor-not-allowed">
              Следующий урок скоро &rarr;
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}