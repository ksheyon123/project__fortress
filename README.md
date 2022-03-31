# RPG Game

CRA로 만든 간단한 RPG 게임 [Create React App](https://github.com/facebook/create-react-app).

## Dev Procedure

HTML5 Canvas를 사용하여 화면의 좌표 상에 Character를 그리고 움직임, 사냥, 적의 랜덤 이동, Collision Check 기능 등의 구현을 목표로 합니다.

### Step 1. Make Grid

Width 4000px; Height 4000px;의 Canvas에 가로 50px; 세로 50px; 크기의 격자를 그립니다.
Canvas의 width와 height Props는 동적으로 변경되지 않는 것 같이 보입니다.

### Step 2. Make Character

useCreateMarble Hook에 View Component에서 가져온 canvasRef 변수를 전달하여, Context의 (0, 0)좌표에 반경이 5px인 파란 점을 그립니다.
Character를 그리는 method와 attr의 Update는 ctx의 beginPath() ~ closePath() 안에 입력되어야 합니다.
{
...
} : CanvasRenderingContext2D;

### Step 3. Character Movement
