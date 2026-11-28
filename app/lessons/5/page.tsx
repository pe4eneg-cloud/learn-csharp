'use client';

import Link from 'next/link';
import { useState } from 'react';

const lessons = [
  { id: 1, title: 'Типы данных в C#', description: 'Разбираем int, float, string, bool и другие типы на примерах из Unity.' },
  { id: 2, title: 'Арифметика в C#', description: 'Операции +, -, *, /, %, инкремент, декремент и приоритет вычислений.' },
  { id: 3, title: 'Условные выражения', description: 'Операции сравнения (==, <, >) и логические операторы (&&, ||, !).' },
  { id: 4, title: 'Циклы', description: 'for, foreach, while, do...while, break и continue.' },
  { id: 5, title: 'Методы', description: 'Создаём свои методы, параметры, возвращаемые значения.' },
  { id: 6, title: 'Массивы и списки', description: 'Скоро будет доступно.', locked: true },
];

const toc = [
  { id: 'theory', label: 'Что такое метод' },
  { id: 'define', label: 'Определение метода' },
  { id: 'call', label: 'Вызов метода' },
  { id: 'params', label: 'Методы с параметрами' },
  { id: 'return', label: 'Возврат значения' },
  { id: 'short', label: 'Короткая запись (=>)' },
  { id: 'simulator', label: 'Попробуй сам' },
  { id: 'practice', label: 'Практика в Unity' },
  { id: 'quiz', label: 'Мини-тест' },
  { id: 'video', label: 'Видеоурок' },
];

const cheatSheet = [
  { op: 'void', desc: 'ничего не возвращает', example: 'void Attack() { ... }', note: 'просто выполняет действие' },
  { op: 'int/string/bool', desc: 'возвращает значение', example: 'int GetDamage() { return 10; }', note: 'нужен return' },
  { op: 'параметры', desc: 'входные данные', example: 'void Heal(int amount)', note: 'передаём при вызове' },
  { op: 'return', desc: 'вернуть результат', example: 'return health;', note: 'завершает метод' },
  { op: '=>', desc: 'короткая запись', example: 'int GetHp() => 100;', note: 'если одна строка' },
];

export default function Lesson5Page() {
  const [simOutput, setSimOutput] = useState<string[]>([]);
  const [selectedMethod, setSelectedMethod] = useState('');

  const methods: Record<string, { code: string; output: string[] }> = {
    sayHello: {
      code: 'void SayHello() { Debug.Log("Привет!"); }',
      output: ['Вызов: SayHello();', '→ Привет!'],
    },
    attack: {
      code: 'void Attack() { Debug.Log("Удар мечом! -10 HP"); }',
      output: ['Вызов: Attack();', '→ Удар мечом! -10 HP'],
    },
    heal: {
      code: 'void Heal(int amount) { health += amount; }',
      output: ['Вызов: Heal(25);', '→ health стал 125 (было 100)'],
    },
    getDamage: {
      code: 'int GetDamage() { return 15; }',
      output: ['Вызов: int dmg = GetDamage();', '→ dmg = 15'],
    },
  };

  const runMethod = (key: string) => {
    setSelectedMethod(key);
    setSimOutput(methods[key].output);
  };

  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  const quiz = [
    {
      q: 'Что означает тип void перед названием метода?',
      options: ['Метод возвращает число', 'Метод ничего не возвращает', 'Метод не принимает параметров', 'Метод приватный'],
      correct: 'Метод ничего не возвращает',
    },
    {
      q: 'Как вызвать метод SayHello()?',
      options: ['SayHello', 'call SayHello()', 'SayHello();', 'run(SayHello)'],
      correct: 'SayHello();',
    },
    {
      q: 'Что делает оператор return в методе?',
      options: ['Завершает программу', 'Возвращает значение и завершает метод', 'Перезапускает метод', 'Выводит текст'],
      correct: 'Возвращает значение и завершает метод',
    },
    {
      q: 'Какая запись корректна для метода с параметром?',
      options: ['void Heal(int amount)', 'void Heal amount', 'Heal(void int)', 'void Heal = int amount'],
      correct: 'void Heal(int amount)',
    },
    {
      q: 'Что выведет: int GetX() => 5;  Debug.Log(GetX());',
      options: ['GetX', '5', '=> 5', 'Ошибку'],
      correct: '5',
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
                    : l.id === 5
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
            <div className="text-sm font-mono text-slate-400 mb-3">Урок 05</div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Методы в C#</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Учимся создавать свои команды для программы. Методы — это именованные блоки кода,
              которые можно вызывать много раз. Разбираем параметры, возврат значений и короткую запись.
            </p>
          </header>

          <section id="theory" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Что такое метод?</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Представь, что ты играешь в RPG. У персонажа есть действия: <strong>атаковать</strong>, <strong>лечиться</strong>,
              <strong>открыть инвентарь</strong>. Каждое действие — это набор инструкций: анимация, звук, изменение здоровья.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              Писать эти инструкции каждый раз, когда персонаж атакует? Нет. Мы один раз создаём <strong>метод</strong> —
              именованный блок кода — и вызываем его, когда нужно.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 mb-2">Аналогия из жизни:</p>
              <p className="text-slate-700 text-sm">
                <strong>Метод</strong> — это как рецепт в кулинарной книге. Ты один раз записал, как готовить борщ,
                и можешь готовить его хоть каждый день, просто открыв рецепт.
                Не нужно каждый раз вспоминать все шаги.
              </p>
            </div>

            <p className="text-slate-700 leading-relaxed">
              В C# методы есть везде. Ты уже использовал <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">Debug.Log()</code> —
              это метод, который выводит текст в консоль. Кто-то один раз написал его внутри Unity,
              а ты просто вызываешь, когда нужно.
            </p>
          </section>

          <section id="define" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Определение метода</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Метод состоит из четырёх частей:
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-6">
              <p className="text-slate-700 font-mono text-sm mb-3">
                <span className="text-blue-600">тип_возврата</span> <span className="text-green-600">Название</span>(<span className="text-purple-600">параметры</span>)
                <br />
                {'{'} <span className="text-slate-600">тело метода</span> {'}'}
              </p>
              <ul className="space-y-1 text-slate-700 text-sm">
                <li>• <strong>Тип возврата</strong> — что метод вернёт (int, string, void если ничего)</li>
                <li>• <strong>Название</strong> — имя метода (обычно с большой буквы)</li>
                <li>• <strong>Параметры</strong> — входные данные (могут быть пустыми)</li>
                <li>• <strong>Тело</strong> — код, который выполняется при вызове</li>
              </ul>
            </div>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Простой метод без параметров и возврата
void SayHello()
{
    Debug.Log("Привет!");
}`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Здесь <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">void</code> означает "ничего не возвращает" —
              метод просто выполняет действие (выводит текст).
            </p>
          </section>

          <section id="call" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Вызов метода</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Определить метод — это как записать рецепт. Но чтобы блюдо приготовилось, нужно его <strong>вызвать</strong>.
              Вызов — это имя метода со скобками:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`void SayHello()
{
    Debug.Log("Привет!");
}

// Вызываем метод — он выполнится
SayHello();   // Выведет: Привет!
SayHello();   // Снова: Привет!`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Главное преимущество методов — <strong>переиспользование</strong>. Написал один раз, вызывай сколько хочешь.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`void SayHelloRu() { Debug.Log("Привет"); }
void SayHelloEn() { Debug.Log("Hello"); }
void SayHelloFr() { Debug.Log("Salut"); }

string language = "ru";

if (language == "ru") SayHelloRu();
else if (language == "en") SayHelloEn();
else if (language == "fr") SayHelloFr();

// Выведет: Привет`}</pre>
            </div>
          </section>

          <section id="params" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Методы с параметрами</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Параметры — это данные, которые мы передаём в метод при вызове.
              Как ингредиенты в рецепт: один и тот же борщ, но с разным количеством соли.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Метод принимает параметр amount
void Heal(int amount)
{
    health += amount;
    Debug.Log($"Лечение на {amount}. HP: {health}");
}

int health = 100;

Heal(25);   // health стал 125
Heal(50);   // health стал 175`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              Можно передавать несколько параметров через запятую:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`void SetPosition(float x, float y, float z)
{
    Debug.Log($"Позиция: ({x}, {y}, {z})");
}

SetPosition(10.5f, 0f, -3.2f);
// Выведет: Позиция: (10.5, 0, -3.2)`}</pre>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-900">
                <strong>⚠ Важно:</strong> типы параметров при вызове должны совпадать.
                Если метод ждёт <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">int</code>, а ты передаёшь <code className="px-1.5 py-0.5 bg-amber-100 rounded font-mono">string</code> — будет ошибка.
              </p>
            </div>
          </section>

          <section id="return" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Возврат значения (return)</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Метод может не только выполнять действия, но и <strong>возвращать результат</strong>.
              Для этого вместо <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">void</code> указываем тип возврата и используем <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">return</code>.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Метод возвращает int
int GetDamage()
{
    return 15;
}

// Вызываем и сохраняем результат
int damage = GetDamage();  // damage = 15
Debug.Log($"Урон: {damage}");`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed mb-4">
              <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">return</code> делает две вещи:
            </p>
            <ol className="space-y-2 text-slate-700 leading-relaxed mb-6">
              <li><strong>1.</strong> Возвращает значение туда, откуда вызвали метод</li>
              <li><strong>2.</strong> <strong>Завершает</strong> метод — код после return не выполнится</li>
            </ol>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`int GetHealthStatus(int health)
{
    if (health <= 0)
        return 0;   // метод завершится здесь
    
    if (health < 30)
        return 1;   // а сюда не дойдёт
    
    return 2;       // выполнится, только если health >= 30
}`}</pre>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700">
                <strong>💡 Правило:</strong> если метод возвращает значение (не void),
                он <strong>обязан</strong> вернуть его во всех ветках кода. Иначе компилятор выдаст ошибку.
              </p>
            </div>
          </section>

          <section id="short" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Короткая запись (=&gt;)</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Если метод содержит <strong>только одну инструкцию</strong>, его можно записать короче — через стрелку <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">=&gt;</code>.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`// Обычная запись
int GetMaxHealth()
{
    return 100;
}

// Короткая запись — то же самое
int GetMaxHealth() => 100;

// С параметром
int Add(int a, int b) => a + b;

// Вызов
int result = Add(5, 3);  // result = 8`}</pre>
            </div>

            <p className="text-slate-700 leading-relaxed">
              Короткая запись удобна для простых методов-вычислений. Но если внутри несколько строк или условия —
              используй обычную запись с фигурными скобками.
            </p>
          </section>

          <section id="simulator" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Попробуй сам</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Выбери метод и нажми на него — увидишь, как он определяется и что выводит при вызове.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <p className="text-sm text-slate-600 mb-4">Нажми на метод, чтобы "вызвать" его:</p>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(methods).map(([key, method]) => (
                  <button
                    key={key}
                    onClick={() => runMethod(key)}
                    className={`text-left px-4 py-3 rounded-md text-sm font-mono transition-colors ${
                      selectedMethod === key
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {key === 'sayHello' && 'SayHello()'}
                    {key === 'attack' && 'Attack()'}
                    {key === 'heal' && 'Heal(25)'}
                    {key === 'getDamage' && 'GetDamage()'}
                  </button>
                ))}
              </div>

              {selectedMethod && (
                <div className="mb-4">
                  <p className="text-xs text-slate-500 mb-2">Определение метода:</p>
                  <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-xs">
                    {methods[selectedMethod].code}
                  </div>
                </div>
              )}

              <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
                <div className="text-slate-400 mb-2">// Консоль:</div>
                {simOutput.map((line, i) => (
                  <div key={i} className="text-green-400">{line}</div>
                ))}
              </div>
            </div>
          </section>

          <section id="practice" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Практика в Unity</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Сделаем класс персонажа с методами: атака, лечение, получение урона и проверка статуса.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-lg p-6 overflow-x-auto mb-6">
<pre className="text-sm font-mono leading-relaxed">{`using UnityEngine;

public class Player : MonoBehaviour
{
    public int health = 100;
    public int maxHealth = 100;
    public int attackDamage = 15;

    void Start()
    {
        Attack();
        Heal(30);
        TakeDamage(50);
        Debug.Log(GetStatus());
    }

    // Метод атаки — ничего не возвращает
    void Attack()
    {
        Debug.Log($"Атака! Урон: {attackDamage}");
    }

    // Метод лечения — принимает параметр
    void Heal(int amount)
    {
        health += amount;
        if (health > maxHealth)
            health = maxHealth;
        Debug.Log($"Лечение +{amount}. HP: {health}");
    }

    // Метод получения урона
    void TakeDamage(int damage)
    {
        health -= damage;
        if (health < 0) health = 0;
        Debug.Log($"Получен урон {damage}. HP: {health}");
    }

    // Метод возвращает строку со статусом
    string GetStatus()
    {
        if (health <= 0) return "Мёртв";
        if (health < 30) return "Критическое состояние";
        return "В бою";
    }
}`}</pre>
            </div>

            <ol className="space-y-3 text-slate-700 leading-relaxed">
              <li><strong>1.</strong> Создай скрипт <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">Player</code> и повесь на объект.</li>
              <li><strong>2.</strong> В Inspector поменяй значения: <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">health = 50</code>, <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">attackDamage = 25</code>.</li>
              <li><strong>3.</strong> Нажми Play и смотри консоль — методы вызовутся по порядку из Start().</li>
              <li><strong>4.</strong> Попробуй поставить <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">health = 10</code> — статус изменится на "Критическое состояние".</li>
              <li><strong>5.</strong> Добавь свой метод, например <code className="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">void Jump()</code>, и вызови его в Start().</li>
            </ol>
          </section>

          <section id="quiz" className="mb-12 scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6">Мини-тест</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Проверь, как усвоил материал. Выбери ответ — сразу увидишь результат.
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
            <Link href="/lessons/4" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              &larr; Предыдущий: Циклы
            </Link>
            <Link href="/lessons/6" className="text-sm text-slate-400 cursor-not-allowed">
              Следующий урок скоро &rarr;
            </Link>
          </nav>
        </article>
      </div>
    </main>
  );
}