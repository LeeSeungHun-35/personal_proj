import React, { useState } from 'react';
import './Sym.css';

const symptoms = [
    { id: 1, name: '복통', diseases: ['위염', '장염', '소화불량'] },
    { id: 2, name: '두통', diseases: ['편두통', '근육통', '스트레스'] },
    { id: 3, name: '근육통', diseases: ['근육 염좌', '피로', '미세 손상'] },
    { id: 4, name: '발열', diseases: ['감기', '독감', '염증'] },
    { id: 5, name: '기침', diseases: ['감기', '기관지염', '알레르기'] },
    { id: 6, name: '목 통증', diseases: ['인후염', '편도선염', '경부근육통', '목디스크'] },
];

const Sym = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const handleSymptomClick = (symptom) => {
        setSelectedSymptoms((prevSelected) => {
            if (prevSelected.includes(symptom)) {
                // 이미 선택된 증상 제거
                return prevSelected.filter(s => s !== symptom);
            } else {
                // 선택되지 않은 증상 추가
                return [...prevSelected, symptom];
            }
        });
    };

    const getUniqueDiseases = () => {
        const diseaseSet = new Set();
        selectedSymptoms.forEach(symptom => {
            symptom.diseases.forEach(disease => diseaseSet.add(disease));
        });
        return Array.from(diseaseSet);
    };

    return (
        <div className='Sym'>
            <div className='symptom-list'>
                <h2>나의 증상</h2>
                {symptoms.map(symptom => (
                    <button
                        key={symptom.id}
                        onClick={() => handleSymptomClick(symptom)}
                        className={selectedSymptoms.includes(symptom) ? 'selected' : ''}
                    >
                        {symptom.name}
                    </button>
                ))}
            </div>

            <div className='disease-info'>
                <h2>관련 질병(병명)</h2>
                {selectedSymptoms.length > 0 ? (
                    <ul>
                        {getUniqueDiseases().map((disease, index) => (
                            <li key={index}>{disease}</li>
                        ))}
                    </ul>
                ) : (
                    <p>증상을 선택해주세요</p>
                )}
            </div>
        </div>
    );
}

export default Sym;
