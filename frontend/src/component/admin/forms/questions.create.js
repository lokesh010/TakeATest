import React from 'react'

export default React.memo((
    {
        selectTest,
        setSelectTest,
        testList,
        questions,
        questionChangeHandler,
        marksChangeHandler,
        deleteQuestionHandler,
        checkboxChangeHandler,
        answerChangeHandler,
        addQuestionHandler,
        submitForm
    }
) =>

    <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12">
            <div className="white-box">
                {/* test selection */}
                <div className="mb-3">
                    <h3 className="box-title mb-0">Create Questions for Test</h3>
                    <br />
                    <div className="w-25">
                        <span className="text-bold">Choose a Test:</span>
                        {/* select test */}
                        <select className="form-select shadow-none border-top"
                            value={selectTest ? selectTest.id : null}
                            onChange={e => setSelectTest(
                                testList.find(test => test.id == e.target.value)
                            )}>
                            {testList.length &&
                                testList.map(test =>
                                    <option key={test.id} value={test.id}>{test.name}</option>
                                )
                            }
                        </select>
                        <br />
                    </div>
                    {/* marks */}
                    <span>
                        <i>Required Total Marks: </i>
                        <b>{selectTest && selectTest.totalMarks}</b>
                    </span>
                    <br />
                    <span>
                        <i>Questions Total Marks: </i>
                        {/* IIFE */}
                        <b>
                            {(function () {
                                let count = 0;
                                questions.map(question => count = count + Number(question.marks));
                                return count;
                            }())}
                        </b>
                    </span>
                </div>
                {/* questions accordion */}
                <div id="accordion">
                    {questions.length && questions.map((question, i) =>
                        <div className="card shadow" key={i}>
                            {/* Accordion header */}
                            <div className="card-header bg-dark text-white btn text-left" id="headingOne" data-target={`#${i}`} data-toggle="collapse" aria-expanded="true" aria-controls="collapseOne">
                                <h5 className="my-2 p-2">
                                    {i + 1}) {question.question} <b>{question.marks ? `[${question.marks}]` : null}</b>
                                </h5>
                            </div>

                            {/* Accordion Body */}
                            <div id={i} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div className="card-body bg-light">
                                    {/* input and delete question */}
                                    <div className="d-flex">
                                        <input className="form-control w-75" placeholder="Enter Question" type="text" required
                                            value={question.question} onChange={(e) => questionChangeHandler(e, i)}
                                        />
                                        <input className="form-control w-25" placeholder="Enter Marks" type="number" required
                                            value={question.marks} onChange={(e) => marksChangeHandler(e, i)}
                                        />
                                        <button className="btn btn-danger ml-auto text-white"
                                            onClick={() => deleteQuestionHandler(i)}>Delete Question</button>
                                    </div>
                                    <hr />
                                    <div className="d-flex my-3">
                                        {/* map answers */}
                                        {question.answers.map((answer, i2) =>
                                            <div className="w-25" key={i2}>
                                                {/* checkbox */}
                                                <span className="mr-2">Correct</span>
                                                <input type="checkbox"
                                                    checked={answer.correct}
                                                    onChange={e => checkboxChangeHandler(i, i2, e)}
                                                />
                                                {/* answer input */}
                                                <input className="form-control w-75" placeholder="Enter Answer" type="text" required
                                                    value={answer.answer} onChange={(e) => answerChangeHandler(i, i2, e)}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {/* add question button */}
                <div className="text-center">
                    <button className="btn btn-success p-3 text-white" onClick={addQuestionHandler}>
                        (+) Add Question
                    </button>
                </div>
            </div>
        </div>
        {/* add question button */}
        <div className="text-left">
            <button className="btn btn-primary p-3 text-white" onClick={submitForm}>
                Submit Form
            </button>
        </div>
    </div>
)