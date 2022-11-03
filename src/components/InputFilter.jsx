function InputFilter({ setSearch }) {

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value)
    }

    return (
        <div className="filter container">
            <div className="col-7 col-md-5 col-lg-4 col-xl-3 my-3">
                <input
                    className="form-control col-12 col-sm-7 col-md-7"
                    placeholder="Filter..." type="text"
                    onChange={handleChange}
                />
            </div>
        </div>

    )
}

export default InputFilter;