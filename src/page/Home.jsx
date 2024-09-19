import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className='Home'>
      {/* 헤더 섹션 */}
      <header className='Home-header'>
        <h1>질병 예측 서비스에 오신 것을 환영합니다</h1>
        <p>일상적인 증상을 통해 관련 질병을 예측해 보세요</p>
      </header>

      <section className='Home-intro'>
        <h2>서비스</h2>
        <p>
          질병 예측 서비스는 사용자가 입력한 증상을 바탕으로 
          가능성 있는 질병을 예측하여 건강 관리에 도움을 줍니다
          최신 알고리즘을 활용하여 정확한 예측을 제공합니다
        </p>
      </section>

      <section className='Home-features'>
        <div className='feature'>
          <h3>정확한 예측</h3>
          <p>정확한 데이터 분석을 통해 가능한 질병을 예측합니다</p>
        </div>
        <div className='feature'>
          <h3>간편한 사용</h3>
          <p>직관적인 인터페이스로 쉽게 증상을 입력하고 결과를 확인할 수 있습니다</p>
        </div>
        <div className='feature'>
          <h3>전문가 조언</h3>
          <p>예측된 결과에 따라 추가적인 전문가 상담을 받을 수 있는 옵션을 제공합니다</p>
        </div>
      </section>

      <section className='Home-updates'>
        <h2>최신 소식</h2>
        <p>
          서비스 업데이트, 새로운 기능 및 건강 관리 팁을 확인

        </p>
      </section>

      <footer className='Home-footer'>
        <p>문의: <a href="ish0542@naver.com">ish0542@naver.com</a></p>
      </footer>
    </div>
  )
}

export default Home;
