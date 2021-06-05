const quiz = [
  {
      question: '次のうち、もっとも値段の高いテーマはどれ？',
      answers: [
      'JIN',
      'AFFINGER5',
      'SWELL', 
      'SANGO'
      ],
      correct: 'SWELL'
    }, {
      question: 'キーワードに関する動物はどれ？',
      answers: [
      'イルカ',
      'ラッコ',
      'イタチ', 
      'ゾウ'
      ],
      correct: 'ラッコ'
    }, {
      question: '実際にあるプラグインはどれ？',
      answers: [
      'Google XML Sitemaps',
      'Yahoo XML Sitemaps',
      'The Sitemaps', 
      'WordPress Sitemaps'
      ],
      correct: 'Google XML Sitemaps'
    }, {
      question: 'WordPressの無料テーマはどれ？',
      answers: [
      'Diver',
      'Chill',
      'One', 
      'Diamond'
      ],
      correct: 'Diamond'
    }, {
      question: 'クリック単価はどれ？',
      answers: [
      'CTR',
      'CVR',
      'CPA', 
      'CPC'
      ],
      correct: 'CPC'
    }, {
      question: 'ユーザーのいる位置がわかるナビゲーション表示はどれ？',
      answers: [
      'さるのしっぽリスト',
      'わらしべリスト',
      'パンくずリスト', 
      '食べ残しリスト'
      ],
      correct: 'パンくずリスト'
    }, {
      question: '存在しないサーバーはどれ？',
      answers: [
      'ロリポップ！',
      'スターサーバー',
      'もみじサーバー', 
      'ConoHa WING'
      ],
      correct: 'もみじサーバー'
    }, {
      question: 'WordPressのシステムを構築している言語はどれ？',
      answers: [
      'C＃',
      'python',
      'PHP', 
      'Java'
      ],
      correct: 'PHP'
    }, {
      question: 'GoogleAdSenseの収益は何円から振り込まれる？',
      answers: [
      '1000円',
      '4000円',
      '6000円', 
      '8000円'
      ],
      correct: '8000円'
    }, {
    question: 'もしもアフィリエイトに存在するランクはどれ？',
    answers: [
      'クラウン',
      'サファイア',
      'スーパーダイヤモンド',
      '見習い'
    ],
    correct: '見習い'
  }
];

const comment = [
  'あなたはブロガーではないと予想します。',
  'ブログ始めたての初心者ブロガーですね！　これから頑張っていきましょう！',
  'ブログ始めて2.3か月くらいのブロガーさんですかね？　自分も3ヶ月目なのでこれからも共に頑張りましょう！',
  'あなたは先輩ブロガーさんですね。敬意を表します！',
  '全問正解とは驚きです！！　きっとブログでご飯を食べていけるようなすごい方であると想像します…。'
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    $('#result').html('正解');
    $('#result').css('background', 'linear-gradient(to right, white, red, white)');
    $('#result').animate({ 'width': 'toggle' });
    $('#result').fadeOut(2000);
    score++;
  } else {
    $('#result').html('不正解');
    $('#result').css('background', 'linear-gradient(to right, white, blue, white)');
    $('#result').animate({ 'width': 'toggle' });
    $('#result').fadeOut(2000);
  }
  


  const resultcomment = () => {
    $('.container').css('display', 'none');
    document.getElementById('result-comment').textContent = (
      'あなたは' + quizLength + '問中' + score + '問正解しました！'
    );

    $message = document.getElementById('message');

    if(score >= 0 && score < 3){
      $message.textContent = comment[0];
    } else if(score < 5){
      $message.textContent = comment[1];
    } else if(score < 8){
      $message.textContent = comment[2];
    } else if(score < 10){
      $message.textContent = comment[3];
    } else {
      $message.textContent = comment[4];
    }
  }
  setTimeout(() => {
    if (quizIndex < quizLength - 1) {
      quizIndex++;
      setupQuiz();
    } else {
      resultcomment();
    }
  }, 2200);
};


let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handleIndex++;
}
