import React, { useState } from "react";
import { data } from "./data";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import "./Home.css";

const Home = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <section>
      <h1>Questions </h1>
      <div>
        {questions.map((question) => {
          return (
            <QuestionTemplate
              key={question.id}
              {...question}
            ></QuestionTemplate>
          );
        })}
      </div>
    </section>
  );
};

const QuestionTemplate = ({ quiz, answer }) => {
  const [showing, setShowing] = useState(false);

  return (
    <div className="quiz-section">
      <div className="quiz">
        <h2>{quiz} </h2>
        <button
          onClick={() => {
            setShowing(!showing);
          }}
        >
          {showing ? (
            <FaCircleMinus className="btnShow"></FaCircleMinus>
          ) : (
            <FaCirclePlus className="btnShow"></FaCirclePlus>
          )}
        </button>
      </div>
      {showing && <p>{answer}</p>}
    </div>
  );
};

export default Home;
