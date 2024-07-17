import React from 'react';
import RandomAnswer from './RandomAnswer/RandomAnswer';
function App() {
  const answers = [
    'დარწმუნებული ვარ.',
    'დიახ.',
    'უდაოდ.',
    'შესაძლებელია.',
    'სავარაუდოდ კი.',
    'პასუხის გაცემა მიჭირს, ახლიდან მკითხე.',
    'სჯობს ახლა არ გითხრა.',
    'არა.',
    'არასდროს.',
    'ცუდი იდეაა.',
    'არ გარისკო!',
  ];

  return (
    <>
      <RandomAnswer answers={answers} />
    </>
  );
}

export default App;
