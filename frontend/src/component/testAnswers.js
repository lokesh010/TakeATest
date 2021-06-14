import React from 'react'
import { Link } from 'react-router-dom'

export default React.memo(({
    uniqueQuestions,
    testAnswers,
    role
}) =>
    <>
        {/* Questions accordion */}
        {uniqueQuestions.length && uniqueQuestions.map((question, i) =>
            <div className="card shadow" key={i}>
                {/* Accordion header */}
                <div className="card-header bg-dark text-white text-left">
                    <h5 className="my-2 p-2">
                        {i + 1}) {question.question} <b>[ {testAnswers.find(result => result.QuestionId === question.id).marks} ]</b>
                    </h5>
                </div>

                {/* Answers */}
                <div className="row">
                    {testAnswers.map(result =>
                        (result.QuestionId === question.id) &&
                        <div key={result.id} id={result.id} className="col-md-2 col-sm-12">
                            <div className="card-body">
                                <div>
                                    {/* answers */}
                                    <div style={{ alignItems: 'baseline' }} key={result.Answer.id}>
                                        {/* checkbox */}
                                        <input type="checkbox"
                                            defaultChecked={result.chosen}
                                        />
                                        {/* answer */}
                                        <label className={` ml-1 
                                                            ${(result.correct) ? 'text-success' :
                                                (!result.correct && result.chosen) ? 'text-danger' : null}
                                                            `}
                                            style={{ cursor: 'pointer' }}>
                                            {result.Answer.answer}
                                        </label>
                                    </div>
                                    {/* )} */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )}
        {/* go back button */}
        <Link to={role === 'admin' ? `/admin/test/results` : `/student/results`}>
            <div className="text-left">
                <button className="btn btn-primary p-3 text-white">
                    Go Back
                </button>
            </div>
        </Link>
    </>
)
