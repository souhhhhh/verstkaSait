import { useState } from "react"
import { BannerConst } from "../app/const/const"

export const Banner = () => {
  const [indexOfAdvertising, setindexOfAdvertising] = useState(0)

  return (
    <div className="p-10 bg-orange text-teal flex-col flex gap-5">
      { 
        BannerConst[indexOfAdvertising]    
      }
      <button onClick={() => 
      setindexOfAdvertising(prevState => prevState == BannerConst.length - 1 ? 0 : prevState + 1 )
    }
        
        className="text-[#6d6e67]">Следующая</button>
    </div>
  )
}
