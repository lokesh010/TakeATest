import React from 'react'

export default React.memo(({
    questions,
    answers,
    checkboxChangeHandler,
    submitForm
}) =>
    <>
        <div id="accordion">
            {questions.length && questions.map((question, i) =>
                <div className="card shadow" key={i}>
                    {/* Accordion header */}
                    <div className="card-header bg-dark text-white text-left" id="headingOne" >
                        <h5 className="my-2 p-2">
                            {i + 1}) {question.question} <b>{question.chosens ? `[${question.chosens}]` : null}</b>
                        </h5>
                    </div>

                    {/* Accordion Body */}
                    <div id={i} className="collapse show">
                        <div className="card-body bg-light">
                            <div className="d-flex ">
                                {/* map answers */}
                                {question.Answers.map((answer, i2) =>
                                    <div className="w-25 d-flex" style={{ alignItems: 'baseline' }} key={i2}>
                                        {/* checkbox */}
                                        <input type="checkbox"
                                            checked={
                                                answers.length &&
                                                answers.find(({ AnswerId }) => AnswerId === answer.id).chosen
                                            }
                                            onChange={e => checkboxChangeHandler(question.id, answer.id)}
                                        />
                                        {/* answer input */}
                                        <label className="w-50 ml-1"
                                            style={{ cursor: 'pointer' }}
                                            onClick={e => checkboxChangeHandler(question.id, answer.id)}>
                                            {answer.answer}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        {/* submit button */}
        <div className="text-left" >
            <button className="btn btn-success p-3 text-white"
                onClick={submitForm}
            >
                Submit
            </button>
        </div>
    </>
)