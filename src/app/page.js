export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {Header()}
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <div className="d-flex gap-1">
          <input
            className="form-control"
            placeholder="Insert a task here.."
          ></input>
          <button className="btn btn-primary">Add</button>
        </div>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Read a book</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Take a shower</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
        {/* task */}
        <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Sleep</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>

      {/* //footer section */}
      <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © 2023 Chayanin Suatap 12345678
        </p>
      </div>
    </div>
  );
}
