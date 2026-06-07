<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>과제 1 - 도형 활용 추상화</title>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.js"></script>
  
  <style>
    body {
      background-color: #0b0f19; /* 대문 페이지와 톤앤매너 통일 */
      color: #ffffff;
      font-family: sans-serif;
      margin: 0;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    .header-area {
      text-align: center;
      margin-bottom: 30px;
      max-width: 600px;
    }

    .back-link {
      color: #3b82f6;
      text-decoration: none;
      font-size: 0.95rem;
      display: inline-block;
      margin-bottom: 15px;
      transition: color 0.2s;
    }

    .back-link:hover {
      color: #60a5fa;
    }

    h1 {
      margin: 0 0 10px 0;
      font-size: 2rem;
    }

    p {
      color: #9ca3af;
      margin: 0;
    }

    /* p5.js 그림판(Canvas) 스타일 정의 */
    canvas {
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>

  <div class="header-area">
    <a href="index.html" class="back-link">← 메인 페이지로 돌아가기</a>
    <h1>과제 1: 도형 활용 추상화</h1>
    <p>다양한 기본 도형을 활용하여 만든 인터랙티브 추상 그래픽 화면입니다.</p>
  </div>

  <script>
    function setup() {
      // 화면에 그림을 그려주는 가로 500px, 세로 500px의 도화지 생성
      createCanvas(500, 500);
    }

    function draw() {
      background(20, 24, 35); // 캔버스 배경색 설정 (짙은 남색 계열)

      // ----------------------------------------------------------------
      // [⚠️ 중요: 아래 예시 코드를 지우고 본인의 과제 1 p5.js 코드를 여기에 채워 넣으세요!]
      // ----------------------------------------------------------------
      
      // 예시 1: 정중앙 가이드 원 (기본 렌더링 확인용)
      noFill();
      stroke(59, 130, 246, 150); // 파란색 선
      strokeWeight(2);
      circle(250, 250, 300);
      
      // 예시 2: 마우스 위치를 따라다니는 추상화 사각형 구조
      fill(255, 255, 255, 20);
      stroke(255, 255, 255, 80);
      rectMode(CENTER);
      rect(mouseX, mouseY, 80, 80);
      
      // 예시 3: 고정 추상 도형 레이어
      fill(239, 68, 68, 180); // 붉은색
      noStroke();
      triangle(150, 100, 100, 250, 230, 200);

      fill(234, 179, 8, 150); // 노란색
      circle(350, 180, 90);
      
      // ----------------------------------------------------------------
    }
  </script>

</body>
</html>
</body>
</html>
