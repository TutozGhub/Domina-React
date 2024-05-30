import React, { useEffect, useState } from 'react'

export default function JuegoTrivia() {

    const [questions, setQuestions] = useState([]);
    const [rta, setRta] = useState("");
    const [questionLen, setQuestionLen] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const [score, setScore] = useState(0);
    const [showingAnswer, SetShowingAnswer] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0)

    useEffect(()=>{
        fetch('src\\assets\\jsons\\JuegoTrivia\\preguntas.json')
        .then((res) => res.json())
        .then((data)=>{
            setQuestions(data);
            setQuestionLen(data.length);
        })
        .catch((error)=>{
            console.log("Error al cargar los paths", error);
        })
    }, [])
    
    useEffect(()=>{
    }, [questionIndex])

    const nextQuestion = ()=>{
        if (showingAnswer === true){
            SetShowingAnswer(false)
            setQuestionIndex(questionIndex + 1)
            console.log(questionIndex + " " + questionLen);
            setIsEnd(questionIndex + 1 >= questionLen);
        }
    }
    const replyQuestion = (e)=>{
        if (showingAnswer === false){
            SetShowingAnswer(true);
            let answer = {}
            questions[questionIndex]?.opciones?.map((item, i)=>{
                if (item?.correcta == true){
                    answer.texto = item.texto; answer.index = i;
                }
            })
            setRta(answer?.texto);
            if (answer.index == e.target.id){
                setScore(score + 1);
            }
        }
    }

  return (
    <div
    className='d-flex-column align-content-center mx-auto min-vh-100 w-75 max-width'
    >
        <h1>
            Trivia
        </h1>
        {isEnd == false ? (
            <>
                <p><strong>Puntuación: {score}</strong></p>
                <div className='card'>
                    <div className='card-header'>
                        <h5>
                            {questions[questionIndex]?.pregunta}
                        </h5>
                    </div>
                    <div className='card-body'>
                        <p>
                            <strong>
                                Opciones: 
                            </strong>
                        </p>
                        <ul>
                                {
                                questions[questionIndex]?.opciones?.map((item, i)=>(
                                    <li key={i}>
                                        <a
                                        id={i}
                                        href="#"
                                        onClick={((e)=>{replyQuestion(e)})}
                                        >
                                            {item.texto}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    {(showingAnswer == true) ? 
                    <>
                        <hr />
                        <p><strong>Respuesta: </strong>{rta}</p>
                    </>
                    :
                    ""}
                    <hr />
                    <div>
                        <button
                        className='btn btn-secondary'
                        onClick={nextQuestion}
                        disabled={showingAnswer ? false : true}
                        >
                            Siguiente Pregunta
                        </button>
                    </div>
                    </div>
                </div>
            </>
        ) : (
            <div className='card'>
                <div className='card-header'>
                    <h1>
                        ¡¡Felicidades!!
                    </h1>
                </div>
                <div className='card-body'>
                    <h4>Tu puntuación final es {score} de {questionLen}</h4>
                </div>
            </div>
        )}
    </div>
  )
}
