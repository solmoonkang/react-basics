import './App.css';

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-yellow-100">
      <div className="text-4xl w-full font-bold mb-4 flex">
        <h1>예산 계산기</h1>
      </div>

      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div>
          <div>지출 항목</div> <div>비용</div>
          <button>제출</button>
        </div>
        <div>
          <div>리스트</div>
          <button>목록 지우기</button>
        </div>
      </div>

      <div className="w-full font-bold mb-4 flex">
        <h1>총지출: {}원</h1>
      </div>
    </div>
  );
}

export default App;
