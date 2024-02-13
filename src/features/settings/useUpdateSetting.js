import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const QueryClient = useQueryClient();

  // For editing an existing cabin (existing cabin has an id)
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: (newSetting) => updateSettingApi(newSetting),
    onSuccess: () => {
      toast.success("Settings successfully updated!");
      QueryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
