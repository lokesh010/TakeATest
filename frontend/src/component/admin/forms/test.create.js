import React from 'react'

export default React.memo(({ form, changeHandler, submitForm }) =>
    <>
        {/* create a test */}
        <button class="toggle btn btn-info mb-4 text-white" type="button" data-toggle="collapse" data-target="#create-test" aria-expanded="false">
            <i class="fa fa-plus-circle mr-1" aria-expanded="false"></i>
            Create Test
        </button>
        {/* form */}
        <div id="create-test" class="collapse container p-4 bg-light mb-2">
            <form onSubmit={submitForm}>
                <div class="form-group row">
                    {/* name */}
                    <div class="col-sm-12 col-md-6 mt-3">
                        <label for="name">Name</label>
                        <input class="form-control" placeholder="Enter Name" type="text" required
                            name="name" value={form.name} onChange={changeHandler} />
                    </div>
                    {/* description */}
                    <div class="col-sm-12 col-md-6 mt-3">
                        <label for="description">Description</label>
                        <input name="description" class="form-control" placeholder="Enter Description" type="text"
                            value={form.description} onChange={changeHandler} />
                    </div>
                    {/* total marks */}
                    <div class="col-sm-12 col-md-6 mt-3">
                        <label for="totalMarks">Total Marks</label>
                        <input name="totalMarks" type="number" class="form-control" placeholder="Enter Total Marks" required
                            value={form.totalMarks} onChange={changeHandler} />
                    </div>
                    {/* pass marks */}
                    <div class="col-sm-12 col-md-6 mt-3">
                        <label for="passMarks">Pass Marks</label>
                        <input name="passMarks" type="number" class="form-control" placeholder="Enter Pass Marks" required
                            value={form.passMarks} onChange={changeHandler} />
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </>
)
