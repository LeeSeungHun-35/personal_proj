import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <header className='Home-header'>
                <h1>LSH 질병 예측 서비스</h1>
                <p>일상에서의 증상을 통해 관련 질병을 예측 가능</p>
            </header>
            <section className='Home-intro'>
                <h2>서비스</h2>
                <p>
                    질병 예측 서비스는 AI머신러닝을 활용하여 사용자가 앓고있는 증상을 바탕으로
                    가능성 있는 질병을 예측하여 건강 관리에 도움을 줍니다
                </p>
            </section>
            <section className='Home-features'>
                <div className='feature'>
                    <h3>정확한 예측</h3>
                    <p>정확한 데이터 분석을 통해 가능한 질병을 예측</p>
                </div>
                <div className='feature'>
                    <h3>예측 분석</h3>
                    <p>증상 기반 질병 예측은 관련 질병을 조기에 발견하여 <br/>진행을 늦추는 데 기여합니다</p>
                </div>
                <div className='feature'>
                    <h3>설명이나 기능 넣어햐하는데</h3>
                    <p>뭐 넣지</p>
                </div>
            </section>

            <section className='Home-updates'>
                <h2>※이용시 참고사항※</h2>
                <p>
                    사용자가 2개 이상의 증상을 선택할 경우, 해당 증상들을 모두 복합적으로 가지는 질병은 본 서비스에서 제공하지 않습니다<br />
                    예를 들어, 사용자가 "두통"과 "기침"을 선택했을 때, 이 두 증상이 함께 나타나는 병(ex: 독감)이 아니라 각각의 증상에 따른 질병(ex: 편두통, 감기)을 예측하는 방식으로 작동합니다.
                </p>
            </section>

            <footer className='Home-footer'>
                <p>문의 : <a>ish0542@naver.com</a></p>
            </footer>
        </div>
    )
}

export default Home;
