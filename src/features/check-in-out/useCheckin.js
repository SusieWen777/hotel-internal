import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    // data is the returning data from the mutationFn
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      // instead of using query key here, use { active: true } will invalidate all the queries that are currently active in this page
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: () => toast.error("There is an error while checking in"),
  });

  return { checkin, isCheckingIn };
}
