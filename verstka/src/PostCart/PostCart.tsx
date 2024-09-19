import { FC, useEffect, useRef } from "react"
import { ServiceType } from "../Api/types/service.type"
interface PostCart { 
  items: ServiceType[], 
  setOpen: (open: boolean) => void
}
export const PostCart: FC<PostCart> = ({ items, setOpen }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    
    <div className="flex flex-col items-center gap-5 mt-4" ref={bottomRef}>
      {
        items.slice(0,5).map((item) => ( 
          <p key={item.title} className="
          text-lime-700 border- rounded-xl p-5 bg-gray-50
          ">
            {item.title}
          </p>
        ))
      }
      <button className="bg-teal px-5 py-3 rounded-lg hover:bg-[#5a8d8d] 
      text-[#b6cccc] 
      duration-700"
       onClick={() => setOpen(false)}>Закрыть</button>
    </div>
  )
}
