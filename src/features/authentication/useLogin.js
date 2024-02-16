import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  // queryClient is used to add cache manually later
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      // Immediately after logging in, there is no need to getCurrentUser from supabase. Instead, the react query should use the data from cache. Therefore, after successfully logging in, we can put the user data in the cache manually. Then, when the useUser hook is called, the data needed is already in the cache, and the React Query will not fetch data from supabase again.
      queryClient.setQueryData(["user"], data.user);
      navigate("/dashboard", { replace: true });
    },
    // the err here will be the error thrown by the mutation function
    onError: (err) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
