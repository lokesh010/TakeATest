import React from 'react'
import { Link } from 'react-router-dom'

export default React.memo(({ questions }) =>
    <>
        {/* Questions */}
        {questions.length && questions.map((question, i) =>
            <div className="card shadow" key={i}>
                {/* Header */}
                <div className="card-header bg-dark text-white text-left">
                    <h5 className="my-2 p-2">
                        {i + 1}) {question.question} <b>[ {question.marks} ]</b>
                    </h5>
                </div>
                {/* Answers */}
                <div className="row">
                    {question.Answers.map(answer =>
                        <div key={answer.id} id={answer.id} className="col-md-3 col-sm-12">
                            <div className="card-body">
                                <div>
                                    {/* answers */}
                                    <div style={{ alignItems: 'baseline' }} key={answer.id}>
                                        {/* checkbox */}
                                        <input type="checkbox" className="mr-2"
                                            defaultChecked={answer.correct}
                                            disabled={!answer.correct}
                                        />
                                        {/* answer */}
                                        <label>
                                            {answer.answer}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        )}
        {/* go back button */}
        <Link to='/admin/test'>
            <div className="text-left">
                <button className="btn btn-primary p-3 text-white">
                    Go Back
                </button>
            </div>
        </Link>
    </>
)