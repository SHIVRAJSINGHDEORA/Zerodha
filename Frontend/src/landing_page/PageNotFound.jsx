export default function PageNotFound () {
    return (
        <>
            <div className="row">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h1>404 Page NOT found</h1>
                    <div className="mt-4 fs-5">Go to <a href="/">Zerogha Home Page</a></div>
                </div>
                <div className="col"><img style={{width : "60%"}} src="/media/images/error.svg" alt="" /></div>
            </div>
        </>
    )
}