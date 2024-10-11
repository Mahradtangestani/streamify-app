import { useState } from "react"
import CategoryPills from "./components/CategoryPills"
import { categories } from "./data/data"
import Header from "./layout/Header"


function App() {
  
  const [selectedCategory , setSelectedCategory] = useState(categories[0])

  return (
    <div className="max-h-screen flex flex-col">
        <div>
            <Header/>
        </div>
        <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
           <div>Sidebar</div>
           <div className="overflow-x-hidden px-8 pb-8">
              <div className="sticky top-0 pb-4 bg-white z-10">
                 <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}/>
              </div>
           </div>
        </div>
    </div>
  )
}

export default App
