import { useState } from "react";
import { useData } from "../Api/getData/getData";
import { PostCart } from "../PostCart/PostCart";
export const Modal = () => {
  const [open, setOpen] = useState(false);
  
  const { data, isLoading } = useData(open);
  
  return (
    <div className="">
      <div className="flex justify-center">
        <input
          placeholder="Введите текст"
          className="rounded-lg 
          outline-none 
        focus:border-[#7cb8b8] p-3 mr-5
          placeholder-[#075f7c]
          text-[#075f7c]
      "
        />
        <button
          className="bg-teal px-5 py-3 rounded-lg hover:bg-[#5a8d8d]
        text-[#b6cccc]
        duration-700"
          onClick={() => setOpen(true)}
        >
          Поиск
        </button>
      </div>

      <div className="flex justify-center mt-10">
        {open && (
          <>
            {isLoading ? (
              <div className="size-10 rounded-full animate-spin border-4 border-t-[#075f7c] border-[#e6934e]"></div>
            ) : (
              data && <PostCart items={data} setOpen={setOpen} />
            )}
          </>
        )}
      </div>
    </div>
  );
};
