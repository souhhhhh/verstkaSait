import { useEffect, useState } from "react";
import { getPost } from "../Service/getPost";
import { ServiceType } from "../types/service.type";

export const useData = (open: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ServiceType[]>([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await getPost.getAllPost();

      setTimeout(() => {
        setIsLoading(false);
        setData(res);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    open && fetchData();
  }, [open]);

  return { isLoading, data };
};