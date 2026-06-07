<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Premium Art Showcase</title>
  <style>
    /* 배경 글로우 효과 관련 기본 스타일 */
    body {
      background-color: #0b0f19; /* 어두운 배경 */
      color: #ffffff;
      font-family: sans-serif;
      margin: 0;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    /* 2행 2열 레이아웃을 만드는 핵심 CSS Grid */
    .gallery-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr); /* 2열(반반) 구성 */
      grid-template-rows: repeat(2, auto);    /* 2행 구성 */
      gap: 20px;                             /* 아이템 사이의 간격 */
      width: 100%;
      max-width: 900px;                      /* 전체 최대 너비 제한 */
    }

    /* 갤러리 아이템 기본 스타일 */
    .gallery-item {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: inherit;
      transition: all 0.3s ease;
    }

    .gallery-item:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateY(-5px);
    }

    .work-tag {
      font-size: 0.8rem;
      background: #3b82f6;
      padding: 4px 8px;
      border-radius: 4px;
      text-transform: uppercase;
    }

    h2 {
      margin: 12px 0 8px 0;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      color: #9ca3af;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .arrow-icon {
      font-size: 1.5rem;
      color: #3b82f6;
    }
  </style>
</head>
<body>

  <div class="bg-glow glow-1"></div>
  <div class="bg-glow glow-2"></div>

  <main class="gallery-container">
    
    <a href="index.html" class="gallery-item 도형-활용">
      <div class="content-wrapper">
        <span class="work-tag">도형활용</span>
        <h2>과제 1</h2>
        <p>다양한 기본 도형을 활용하여 만든 추상화</p>
      </div>
      <div class="arrow-icon">→</div>
    </a>

    <a href="task1.html" class="gallery-item 도형-활용">
      <div class="content-wrapper">
        <span class="work-tag">도형활용</span>
        <h2>과제 2</h2>
        <p>p5.js를 사용해 자신을 묘사한 캐리커쳐</p>
      </div>
      <div class="arrow-icon">→</div>
    </a>

    <a href="task2.html" class="gallery-item 움직임-코드-활용">
      <div class="content-wrapper">
        <span class="work-tag">움직임 코드 활용</span>
        <h2>과제 3</h2>
        <p>과제2에서 진행했던 제출물에 마우스, 키보드 이벤트를 모두 사용한 애니메이션</p>
      </div>
      <div class="arrow-icon">→</div>
    </a>

    <a href="task3.html" class="gallery-item 움직임-코드-활용">
      <div class="content-wrapper">
        <span class="work-tag">움직임 코드 활용</span>
        <h2>과제 4</h2>
        <p>기본 애니메이션, 색상변화, 크기변화 부분에 변화를 준 애니메이션</p>
      </div>
      <div class="arrow-icon">→</div>
    </a>

  </main>

</body>
</html>
</html>
