import { useEffect } from "react";
import { selectToken } from "../redux/authSlice";
import { useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";

export default function useValidateToken() {
  const token = useAppSelector(selectToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
}
