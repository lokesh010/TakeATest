import React from 'react'

export default React.memo(({ form, changeHandler, submitForm }) =>
    <>
        {/* create a test */}
        <button className="toggle btn btn-info mb-4 text-white" type="button" data-toggle="collapse" data-target="#create-test" aria-expanded="false">
            <i className="fa fa-plus-circle mr-1" aria-expanded="false"></i>
            Create Test
        </button>
        {/* form */}
        <div id="create-test" className="collapse container p-4 bg-light mb-2">
            <form onSubmit={submitForm}>
                <div className="form-group row">
                    {/* name */}
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label for="name">Name</label>
                        <input className="form-control" placeholder="Enter Name" type="text" required
                            name="name" value={form.name} onChange={changeHandler} />
                    </div>
                    {/* description */}
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label for="description">Description</label>
                        <input name="description" className="form-control" placeholder="Enter Description" type="text"
                            value={form.description} onChange={changeHandler} />
                    </div>
                    {/* total marks */}
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label for="totalMarks">Total Marks</label>
                        <input name="totalMarks" type="number" className="form-control" placeholder="Enter Total Marks" required
                            value={form.totalMarks} onChange={changeHandler} />
                    </div>
                    {/* pass marks */}
                    <div className="col-sm-12 col-md-6 mt-3">
                        <label for="passMarks">Pass Marks</label>
                        <input name="passMarks" type="number" className="form-control" placeholder="Enter Pass Marks" required
                            value={form.passMarks} onChange={changeHandler} />
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </>
)
