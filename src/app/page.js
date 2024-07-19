import Footer from "./Footer";
import Header from "./Header";
import TaskInput from "./TaskInput";
import Tasks from "./Tasks";

export default function Home() {
  const tasks = [
    {id: 1, title: "Read a book", isDone:true},
    {id: 2, title: "Take a shower", isDone:false},
    {id: 3, title: "Sleep", isDone:false}
  ]
  
  return (
    // Main container
    <div className="container mx-auto">
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input*/}
        <TaskInput />
        {/* task detail */}
          <Tasks {...tasks[0]} />
          <Tasks {...tasks[1]} />
          <Tasks {...tasks[2]} />
      </div>

      <Footer year="2024" fullname="Teetat Boontham" studentId="660610764"/>
      
    </div>
  );
}
